// syntax of cookie
document.cookie = "cookieName=cookieValue; expires = expiryDate; path=/";


// document.cookie = "username='ram'&age=20; expires = thu,01,2025 00:00:00 GMT;  path=/"

var cookies = document.cookie;

function getCookie(name){
    var cookieValue = null
    var cookies = document.cookie.split(';');
    
}