document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.querySelector(".container").style.display = "block";
    }, 3000); // Adjust the time as needed
});
