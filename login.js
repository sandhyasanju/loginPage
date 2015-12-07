$(document).ready(function() {
  var images = ["username.jpeg" , "password.jpeg" , "or.png" , "sign.png" , "with.png" , "google.jpeg" , "or.png" , "facebook.jpg" , "forgot.gif" , "signup.jpeg"];
  var imageId = 0;
  setInterval(function () {
    $("#initialImage").attr("src" , images[imageId]);
    imageId++;
    if(imageId === images.length)
    imageId = 0;
  }, 2000);
});
