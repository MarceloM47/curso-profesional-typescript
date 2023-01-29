var Users;
(function (Users) {
    Users[Users["NormalUser"] = 5] = "NormalUser";
    Users[Users["PayedUser"] = 6] = "PayedUser";
    Users[Users["AdminUser"] = 7] = "AdminUser";
    Users[Users["MegaUser"] = 8] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
if (myUser === Users.AdminUser) {
}
console.log(myUser);
