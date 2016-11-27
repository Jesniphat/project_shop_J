var express = require("express");
var category = require("../library/db.category");
var categoryRouter = express.Router();

// exports.categoryRouter = categoryRouter;
categoryRouter.post("/category_list", function (req, res, next) {
    //console.log(" รับ cate = ", req.body);
    category.getCategoryList(function (cate) {
        res.json({
            data: cate,
            status: true
        });
    }, function (errorMessage) {
        console.log("errorMessage = ", errorMessage);
        res.json({
            status: false,
            error: errorMessage
        });
    });
});
categoryRouter.post("/savecategory", function (req, res, next) {
    // console.log("cate data = ", req.body);
    var data = req.body;
    if (data.cateId == "create") {
        category.saveCategory(data, function (id) {
            res.json({
                status: true,
                data: id
            });
        }, function (errorMessage) {
            console.log("error m : ", errorMessage);
            res.json({
                status: false,
                error: errorMessage
            });
        });
    }
    else {
        category.editCategory(data, function (result) {
            res.json({
                status: true,
                data: result
            });
        }, function (errorMessage) {
            console.log("error m : ", errorMessage);
            res.json({
                status: false,
                error: errorMessage
            });
        });
    }
});
categoryRouter.post("/getcategorybyid", function (req, res, next) {
    var data = req.body;
    // console.log("data get cet by id = ", data);
    category.getCategoryById(data.cate_id, function (cate) {
        res.json({
            data: cate,
            status: true
        });
    }, function (errorMessage) {
        console.log("errorMessage = ", errorMessage);
        res.json({
            status: false,
            error: errorMessage
        });
    });
});
//# sourceMappingURL=category.js.map

module.exports = categoryRouter;