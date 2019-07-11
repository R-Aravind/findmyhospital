let result = document.getElementById("search-results");
let featured = document.getElementById("featured");
let SearchInput = document.getElementById("search-input")
let hos = document.getElementById("f_hos");
let docs = document.getElementById("f_docs")

//Search(); //FOR TESTING PURPOSES


function Search() {
    let value = SearchInput.value;

    // DESIGN AND ANIMATION CHANGES
    result.style.visibility = "visible";

    // PC 
    if (window.matchMedia("(min-width:1024px)").matches) {
        result.style.height = "30vh";
        result.style.transition = "height 0.9s";
        featured.style.height = "240vh";
    }

    // RESPONSIVE
    if (window.matchMedia("only screen and (max-width:1024px)").matches) {
        hos.innerHTML = "";
        docs.innerHTML = "";
        featured.style.height = "190vh";
        result.style.height = "180vh";
        //  result.style.transition = "height 0.9s";
    }

    console.log(value);
}