var server = require("./server/server");
var router = require("./server/router");
var chatServer = require("./server/chat");

//http handlers
var base = require("./handlers/base");
var error = require("./handlers/error");
var login = require("./handlers/login");
var logout = require("./handlers/logout");
var getRoom = require("./handlers/getRoom");
var getUser = require("./handlers/getUser");
var getUserFeed = require("./handlers/getUserFeed");
var playTurn = require("./handlers/playTurn");

var handle = {};
handle["/"] = base.base;
handle["/error"] = error.error;
handle["/login"] = login.login;
handle["/logout"] = logout.logout;
handle["/getRoom"] = getRoom.getRoom;
handle["/getUser"] = getUser.getUser;
handle["/getUserFeed"] = getUserFeed.getUserFeed;
handle["/playTurn"] = playTurn.playTurn;

server.start(router.route, handle);
chatServer.start();