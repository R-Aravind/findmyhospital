const result = document.getElementById("search-results");
const featured = document.getElementById("featured");
const SearchInput = document.getElementById("search-input")
const hos = document.getElementById("f_hos");
const docs = document.getElementById("f_docs")

//Search(); //FOR TESTING PURPOSES

// const db = new HosAPI(); //create new 

window.onload = function () { 
    get_featured_doctors('.f_docs');
    get_featured_hospitals('.f_hos');
    
 }


function Search() {


    let value = SearchInput.value;

    // console.log(db.fetch_data('hello'));
    get_hospital_location('#search-results', value);
    

    // let data = db.get_hospital_name('Hospital 1');
    // console.log(data);

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


