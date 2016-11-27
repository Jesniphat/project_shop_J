var express = require('express');
var upload = express.Router();

var fs          = require('fs');
// var path        = require('path');
// var bodyParser  = require('body-parser');
var moment      = require('moment');
var multer      = require('multer');
var uploadFile  = multer({ dest: __dirname+'/../../src/uploads/tmp/' });

/* GET users listing. */
upload.post('/uploadproductpic', uploadFile.single('producPic'),  function(req, res, next) {
    var $scope = {};
    // console.log("res product pic = ", req.file);
    var newName = moment().format('YYYY-MM-DD_hh-mm-ss') + '_' + req.file.originalname;
    var filename = __dirname + '/../../src/uploads/product_pic/' + newName;
    var filename2 = __dirname + '/../../dist/uploads/product_pic/' + newName;
    var filename3 = __dirname + '/../../../product_pic/' + newName;
    var src = fs.createReadStream(req.file.path);
        src.pipe(fs.createWriteStream(filename));
        src.pipe(fs.createWriteStream(filename2));
        src.pipe(fs.createWriteStream(filename3));
        src.on('end', function() {
          res.send({
            status: true,
            fileName: newName
          });
        });
        src.on('error', function(err) {
          res.send({
            status: false,
            exMessage: 'upload file error' + err
          });
        });
});

module.exports = upload;