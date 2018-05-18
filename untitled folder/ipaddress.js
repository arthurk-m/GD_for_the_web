$(document).ready(function(){
    $('#heart').click(function() {
        // $('#ipaddress').css('visibility','visible');
        // $('#ipaddress').toggleClass('hidden', addOrRemove);
    //     $('#ipaddress').addClass('hidden'); 
    // }, function () {
    //     $('#ipaddress').removeClass('hidden');
    $('#ipaddress').toggle();
    $('#ipaddress').toggleClass('hidden');
    $('#cambridge-container').toggleClass('blur');
    return false;
    });
});

$(document).ready(function(){
    $('#eye').mousedown(function(){
    $('body').toggleClass('invert');
    console.log("is this working arthur")
    });
});

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  $('#ipaddress').html(JSON.stringify(data, null, 2));
});
// var ipAddress = 'http://gd.geobytes.com/GetCityDetails?callback=?'>
// alert (ipAddress);

// document.getElementById("ipaddress").innerHTML = "11 + 5";

var password = document.querySelector("#password-input");
var passwordContainer = document.querySelector("#password")
var lock = document.querySelector("#lock");

password.addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode
    if (key == 13) {
        var passwordInput = password.value;
        if (passwordInput == "facebook") {
            lock.style.opacity = "1";
            passwordContainer.style.display = "none";
        }
    }
});

console.log("hello")

$(document).ready(function(){
    $('form').keypress(function(event) {
        $('.facebookLock').addClass('blur');
        console.log("lol")
    });
});