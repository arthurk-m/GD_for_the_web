var password = document.querySelector("#password-input");
var passwordContainer = document.querySelector("#password")
var lock = document.querySelector("#lock");

password.addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        var passwordInput = password.value;
        if (passwordInput == "password") {
            lock.style.opacity = "1";
            passwordContainer.style.display = "none";
        }
    }
});

console.log("hello")