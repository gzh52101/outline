"use strict";

var getData = function getData(url) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var data = [];
  return {
    data: data
  };
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var username = 'jingjing';

var User = /*#__PURE__*/function () {
  function User(username, password) {
    _classCallCheck(this, User);

    this.username = username;
    this.password = password;
  }

  _createClass(User, [{
    key: "login",
    value: function login() {}
  }, {
    key: "logout",
    value: function logout() {}
  }]);

  return User;
}();

var jj = new User(username, 123456);
"use strict";

var obj = {
  say: function say() {}
};
var username = 'jingjing';
var msg = "hello ".concat(username);