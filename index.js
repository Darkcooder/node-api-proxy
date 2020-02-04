const express = require('express')();
const request = require('request');
const config = require('./config');



express.get('/', function (req, res) {
    res.send('Welcome to simple ApiProxy!')
});

config.routes.forEach((route) => {
    let callback = function (req, res) {
        let localParams = Object.assign(req.params, req.query)
        if(config.localTokens.indexOf(localParams.token) === -1) {
            console.log(localParams)
            res.status(401).send("Unknown token ");
            return;
        }
        delete localParams.token;
        let params = Object.assign(localParams, route.baseParams);
        request({
            method: route.remoteMethod,
            uri: route.remoteUrl,
            form: params,
            headers: route.baseHeaders
        }, function(error, response, body) {
            if(error) res.error(error);
            res.status(response && response.statusCode).send(body);
        })
    };
    switch(route.localMethod) {
        case "POST":
            express.post(route.localUrl,callback);
            break;
        case "PUT":
            express.put(route.localUrl, callback);
            break;
        case "DELETE":
            express.delete(route.localUrl, callback);
            break;
        default:
            express.get(route.localUrl, callback);
    }
});

express.listen(config.port);
console.log ("Proxy input on port " + config.port);