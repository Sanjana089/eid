$(document).ready(function () {
    let moonContainer = $("#moonContainer");
    moonContainer.addClass("slideInDown");
    let bottomImage = $("#bottom-image");
    let lantern = $("#lantern");


    moonContainer.click(function () {
        bottomImage.css("transform", "scale(2.5)");
        lantern.css("top", "0");
    });
});