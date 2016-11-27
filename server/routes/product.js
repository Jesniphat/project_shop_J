var express = require("express");
var product = require("../library/db.product");
var productRouter = express.Router();

//////////////////// Save Product  ///////////////////////////////////////////////////////////////
productRouter.post("/saveproduct", function(req, res, next){
    console.log("save product = ", req.body);
    var data = req.body;
    if(data.id == "create") {
        product.saveProduct(data, function(id) {
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
});

////////////////////////  Get Product ///////////////////////////////////////////////////////////
productRouter.post("/product_list", function (req, res, next) {
    //console.log(" รับ cate = ", req.body);
    product.getProductList(function (prod) {
        res.json({
            data: prod,
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

//////////////////// Get Product By ID //////////////////////////////////////////////////////////
productRouter.post("/getproductbyid", function (req, res, next) {
    //console.log(" รับ cate = ", req.body);
    var data = req.body;
    product.getProductByID(data.product_id, function (prod) {
        res.json({
            data: prod,
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

module.exports = productRouter;