function get_hospital_name(hospital, container){
    const url = `/backend/get_hospital_name.php?name=${hospital}`;
    
    $.get(url, function(data, status){
        data = JSON.parse(data);
        console.log(data);
        $(container + ' #name').text(data[0].name);
    });
}


//get hospital details @param location of hospital
function get_hospital_location(location){
    const url = `/backend/get_hospital_location.php?location=${location}`;
    $.get(url, function(data, status){
        data = JSON.parse(data);
        console.log(data);
        $(container + ' #name').text(data[0].name);  
    });

}

// get all doctors of a hospital @param hospital id
function get_doctors_hospital(id){
    const url = `/backend/get_hospital_doctors.php?id=${id}`;
    $.get(url, function(data, status){
        data = JSON.parse(data);
        console.log(data);
        $(container + ' #name').text(data[0].name); 
      });
}

// get hospitals by departments  |ISSUE|
function get_department_hospitals(department){
    const url = `/backend/get_deparment_hospitals.php?department=${department}`;
    $.get(url, function(data, status){
        data = JSON.parse(data);
        console.log(data);
        $(container + ' #name').text(data[0].name);  
      });
}

function get_featured_doctors(container){
    const url = `/backend/get_featured_doctors.php`;
    $.get("/backend/get_featured_doctors.php", function(data, status){
        data = JSON.parse(data);

        data.forEach((data, i) => {
            $(container + ' #name'+i).text(data.name);
            $(container + ' #id'+i).text(data.name);
            $(container + ' #photo'+i).text(data.name);
            $(container + ' #rating'+i).text(data.name); 
            $(container + ' #department'+i).text(data.name);
            $(container + ' #experience'+i).text(data.name);
            $(container + ' #featured'+i).text(data.name);
            $(container + ' #gender'+i).text(data.name);
            $(container + ' #hospital_id'+i).text(data.name);
            $(container + ' #hospital_name'+i).text(data.name); 
        });

    });
}

function get_featured_hospitals(){
    const url = `/backend/get_featured_hospitals.php`;
    $.get(url, function(data, status){
        data = JSON.parse(data);
        console.log(data);
        $(container + ' #name').text(data[0].name);  
    });
}


















// class HosAPI{

    

//     constructor(){
//         this.data = '';
//     }



    

    


    

    

    
//     // fetch (GET) data using @param url
//     // fetch_data(url){
//     //     // fetch data from database
//     //     fetch(url)
//     //     .then(res => res.json())
//     //         .then((out) => {
//     //             // this.data = out
//     //             // console.log(out);
//     //             //  this.data
//     //             return out;
//     //         })
//     //         .catch(err => { throw err });
//     //     }

    
//     fetch_data(url){
//         $.get("/backend/get_featured_doctors.php", function(data, status){
//           console.log(data)  
//         });
//     }

//     // fetch_data(url) {

//     //     // return the entire promise chain
//     //     return fetch(url)
//     //     .then((response) => {
//     //         if(response.ok) {
//     //             return response.json();
//     //         } else {
//     //             throw new Error('Server response wasn\'t OK');
//     //         }
//     //     })
//     //     .then((res) => {
//     //         const result = res
//     //         return res; // return the customer_name here
//     //     });
//     // }
    
        
//     }
    



