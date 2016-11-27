Promise = require('bluebird');
var conn = require('./config');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');
var url = conn.database;
module.exports = new function () {
    //////////////////////////////////////////////  get all category  ///////////////////////////////////////////
    this.getCategoryList = function (callbackok, callbackerror) {
        var $scope = {};
        $scope.getCategoryList = [];
        var getAllCate = function () {
            // let deferred = promise.pending();
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    assert.equal(null, err);
                    var cursor = db.collection('category').find({});
                    cursor.each(function (err, doc) {
                        if (err) {
                            // deferred.reject(err);
                            reject(err);
                        }
                        assert.equal(err, null);
                        if (doc != null) {
                            $scope.getCategoryList.push(doc);
                        }
                        else {
                            if ($scope.getCategoryList.length > 0) {
                                // console.log("category_list data = ", $scope.getCategoryList);
                                // deferred.resolve("have data.");
                                resolve("have data.");
                            }
                            else {
                                // deferred.reject("Don't have data.");
                                reject("Don't have data.");
                            }
                        }
                    });
                });
                //return deferred.promise;
            });
        };
        getAllCate()
            .then(function () {
            // console.log("getCate from promise = ", arguments);
            callbackok($scope.getCategoryList);
        }).catch(function (e) {
            console.log("reject is = ", e);
            callbackerror(e);
        });
    };
    /////////////////////////////////////////  Save Category ////////////////////////////////////////////////////
    this.saveCategory = function (data, callbackok, callbackerror) {
        var $scope = {};
        $scope.getListCategory = [];
        var insertCategory = function () {
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    else {
                        // console.log('Connection established to', url);
                        var category = db.collection('category');
                        var categoryData = {
                            cate_name: data.cateName,
                            cate_description: data.cateDescription,
                            status: data.selectedStatus,
                            product_qty: 0,
                            cover_img: "",
                            created_date: new Date(),
                            created_by: "Admin",
                            updated_date: new Date(),
                            updated_by: "Admin"
                        };
                        category.insertOne(categoryData, function (err, result) {
                            if (err) {
                                console.log(err);
                                reject('Can not insert data ' + err);
                            }
                            else {
                                // console.log('Inserted : ', result.insertedId);
                                $scope.category_id = result.insertedId;
                                resolve("Insert Ok");
                            }
                            db.close();
                        });
                    }
                });
            });
            // return deferred.promise;
        };
        insertCategory()
            .then(function () {
            // console.log("Data from promise = ", arguments);
            callbackok($scope.category_id);
        }).catch(function (e) {
            console.log(e);
            callbackerror(e);
        });
    };
    //////////////////////////////////////////////// Edit Category //////////////////////////////////////////////
    this.editCategory = function (data, callbackok, callbackerror) {
        var $scope = {};
        var updateCategory = function () {
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    else {
                        var category = db.collection('category');
                        var categoryData = {
                            cate_name: data.cateName,
                            cate_description: data.cateDescription,
                            status: data.selectedStatus,
                            product_qty: 0,
                            cover_img: "",
                            created_date: new Date(),
                            created_by: "Admin",
                            updated_date: new Date(),
                            updated_by: "Admin"
                        };
                        category.updateOne({ "_id": ObjectId(data.cateId) }, categoryData, function (err, result) {
                            // console.log("Update = ", err, " = ", result, " data = ", categoryData);
                            if (err) {
                                console.log(err);
                                reject('Can not update data ' + err);
                            }
                            else {
                                // console.log('Inserted : ', result.insertedId);
                                resolve("update Ok");
                            }
                            db.close();
                        });
                    }
                });
            });
        };
        updateCategory()
            .then(function () {
            // console.log("Data from promise = ", arguments);
            callbackok("updated" + data.cateId);
        }).catch(function (e) {
            console.log(e);
            callbackerror(e);
        });
    };
    //////////////////////////////////////////////// get 1 category /////////////////////////////////////////////
    this.getCategoryById = function (id, callbackok, callbackerror) {
        var $scope = {};
        $scope.getCategoryById = [];
        var getAllCate = function () {
            // let deferred = promise.pending();
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    assert.equal(null, err);
                    // console.log(id);
                    // let cursor = db.collection('category').find({"id": parseInt(id)});
                    var cursor = db.collection('category').find({ "_id": ObjectId(id) });
                    cursor.each(function (err, doc) {
                        if (err) {
                            reject(err);
                        }
                        assert.equal(err, null);
                        if (doc != null) {
                            $scope.getCategoryById.push(doc);
                        }
                        else {
                            if ($scope.getCategoryById.length > 0) {
                                resolve("have data.");
                            }
                            else {
                                resolve("Don't have data.");
                            }
                        }
                    });
                });
            });
        };
        getAllCate()
            .then(function () {
            // console.log("getCate from promise = ", arguments);
            callbackok($scope.getCategoryById);
        }).catch(function (e) {
            console.log("reject is = ", e);
            callbackerror(e);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////
}; /* End module.exports here */
////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=db.category.js.map