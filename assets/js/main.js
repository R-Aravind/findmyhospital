const result = document.getElementById("search-results");
const featured = document.getElementById("featured");
const SearchInput = document.getElementById("search-input")
const hos = document.getElementById("f_hos");
const docs = document.getElementById("f_docs")

//Search(); //FOR TESTING PURPOSES


function Search() {

    const db = new DATABASE();

    let value = SearchInput.value;

    db.get_hospital(value);

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