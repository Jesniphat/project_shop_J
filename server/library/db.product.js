Promise = require('bluebird');
var conn = require('./config');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');
var url = conn.database;


module.exports = new function () {
    /////////////////////////////////////////  Save Product ////////////////////////////////////////////////////
    this.saveProduct = function (data, callbackok, callbackerror) {
        var $scope = {};
        $scope.getListProduct = [];
        
        var insertProduct = function () {
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    else {
                        // console.log('Connection established to', url);
                        var product = db.collection('product');
                        var productData = {
                            product_name: data.name,
                            product_description: data.desc,
                            status: true,
                            product_price: data.price,
                            product_qty: data.qty,
                            product_pic: data.picName,
                            created_date: new Date(),
                            created_by: "Admin",
                            updated_date: new Date(),
                            updated_by: "Admin"
                        };
                        product.insertOne(productData, function (err, result) {
                            if (err) {
                                console.log(err);
                                reject('Can not insert data ' + err);
                            }
                            else {
                                // console.log('Inserted : ', result.insertedId);
                                $scope.product_id = result.insertedId;
                                resolve("Insert Ok");
                            }
                            db.close();
                        });
                    }
                });
            });
            // return deferred.promise;
        };

        insertProduct()
            .then(function () {
            // console.log("Data from promise = ", arguments);
            callbackok($scope.category_id);
        }).catch(function (e) {
            console.log(e);
            callbackerror(e);
        });
    };

///////////////////////////////////  Grt Product List  /////////////////////////////////////////////////////////////
    this.getProductList = function (callbackok, callbackerror) {
        var $scope = {};
        $scope.getProductList = [];
        
        var getAllProduct = function () {
            // let deferred = promise.pending();
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    assert.equal(null, err);
                    var cursor = db.collection('product').find({});
                    cursor.each(function (err, doc) {
                        if (err) {
                            // deferred.reject(err);
                            reject(err);
                        }
                        assert.equal(err, null);
                        if (doc != null) {
                            $scope.getProductList.push(doc);
                        }
                        else {
                            if ($scope.getProductList.length > 0) {
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
        getAllProduct()
            .then(function () {
            // console.log("getCate from promise = ", arguments);
            callbackok($scope.getProductList);
        }).catch(function (e) {
            console.log("reject is = ", e);
            callbackerror(e);
        });
    };

///////////////////////////////// Get Product By ID /////////////////////////////////////////////////////////
    this.getProductByID = function(id, callbackok, callbackerror){
        var $scope = {};
        $scope.getProductById = [];
        var getProduct = function () {
            // let deferred = promise.pending();
            return new Promise(function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                        reject('Unable to connect to the mongoDB server. Error:' + err);
                    }
                    assert.equal(null, err);
                    var cursor = db.collection('product').find({ "_id": ObjectId(id) });
                    cursor.each(function (err, doc) {
                        if (err) {
                            reject(err);
                        }
                        assert.equal(err, null);
                        if (doc != null) {
                            $scope.getProductById.push(doc);
                        }
                        else {
                            if ($scope.getProductById.length > 0) {
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
        getProduct()
            .then(function () {
            // console.log("getCate from promise = ", arguments);
            callbackok($scope.getProductById);
        }).catch(function (e) {
            console.log("reject is = ", e);
            callbackerror(e);
        });
    }    
}