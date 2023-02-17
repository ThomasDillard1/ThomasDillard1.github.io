// Function to remove border from the image if screen size is less than 576px
function removeImageBorder() {
    var profileImg = document.getElementById("profile-img");
    
    if (window.innerWidth < 576) {
        profileImg.classList.remove("border", "border-top-0", "border-bottom-0", "border-dark");
    }
    else {
        profileImg.classList.add("border", "border-top-0", "border-bottom-0", "border-dark");
    }
}

// Call the function on page load and whenever the window is resized
window.onload = removeImageBorder;
window.onresize = removeImageBorder;