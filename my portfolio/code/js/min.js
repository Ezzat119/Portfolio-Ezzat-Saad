// img changing backgrounds
let imgArray = ["1.jpg", "2.jpg", "3.jpg"];
setInterval(function () {
  let randomNumber = Math.floor(Math.random() * imgArray.length);
  document.getElementById("header").style.backgroundImage =
    'url("../image/' + imgArray[randomNumber] + '")';
}, 8000);
// =====================================================================================================//

//Create Popup Eith The Image
let ourGallery = document.querySelectorAll(".box-img-main-alt img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let icon = document.createElement("i");
    icon.className = "fas fa-sign-out-alt";
    popupBox.appendChild(icon);
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
  });
});
// close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "fas fa-sign-out-alt") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
// ===================================================================================================//

// Select Skills Selector
let section = document.querySelector(".skaills");
let spans = document.querySelectorAll(".progress span")
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    };
};
// ===================================================================================================//
