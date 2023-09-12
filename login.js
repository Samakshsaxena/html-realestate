
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Realestate" && password == "Realestate@123")
        alert ("Login successfully");
        window.location = "realestatetrial1.html";
        return false;
}