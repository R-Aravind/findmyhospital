let result = document.getElementById("search-results");
let featured = document.getElementById("featured");
let SearchInput = document.getElementById("search-input")

//Search(); //FOR TESTING PURPOSES

let hospital = {
    name: "lol",
    rating: 3,
    price: 2000
}

function Search() {
    let value = SearchInput.value;

    // DESIGN AND ANIMATION CHANGES
    result.style.visibility = "visible";
    result.style.height = "30vh";
    result.style.transition = "height 0.9s";
    featured.style.height = "240vh";




    console.log(value);
}