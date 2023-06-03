var rating = 0;
document.getElementById('ratingOne').onclick = function() {
    rating = 1;
    document.getElementById("rating").innerHTML = rating;
    console.log(rating);
}
document.getElementById('ratingTwo').onclick = function() {
    rating = 2;
    document.getElementById("rating").innerHTML = rating;
    console.log(rating);
}
document.getElementById('ratingThree').onclick = function() {
    rating = 3;
    document.getElementById("rating").innerHTML = rating;
    console.log(rating);
}
document.getElementById('ratingFour').onclick = function() {
    rating = 4;
    document.getElementById("rating").innerHTML = rating;
    console.log(rating);
}
document.getElementById('ratingFive').onclick = function() {
    rating = 5;
    document.getElementById("rating").innerHTML = rating;
    console.log(rating);
}
function changePage(){
        document.getElementById("ratingContent").style.display = "none";
        document.getElementById("thankContent").style.display = "flex";
}