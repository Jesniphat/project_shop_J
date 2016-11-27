var express = require('express');
var lnPermission = require("../library/lnpermission");
var logins = require("../library/db.login");
var loginRouter = express.Router();

loginRouter.get('/checkLogin', function (req, res, next) {
    // console.log("checkLogin");
    var resStatus = false;
    var resData = {};
    if (lnPermission.isLogin(req)) {
        resStatus = true;
    }
    else {
    }
    res.json({
        "status": resStatus,
        "data": resData
    });
});
loginRouter.get('/login', function (req, res, next) {
    //console.log("get login res = ");
    lnPermission.clearToken(res);
    res.json({
        "status": true,
        "data": "set0"
    });
});
loginRouter.post("/login", function (req, res, next) {
    // console.log("Post login data = ", req.body);
    var user = req.body.user;
    var password = req.body.password;
    logins.checkLogin(user, password, function (login) {
        // console.log("login base data = ", login);
        lnPermission.writeToken(res, login[0]._id);
        res.json({
            data: login,
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
loginRouter.post("/updatestaff", function (req, res, next) {
    var reqdata = {
        name: req.body.name,
        user: req.body.user,
        id: req.body.id,
        password: req.body.password
    };
    logins.updateStaff(reqdata, function (logingData) {
        res.json({
            data: logingData,
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
//# sourceMappingURL=login.js.map

module.exports = loginRouter;
