
class HosAPI{

    

    constructor(){
        this.data = '';
    }

    // get hospital details @param hospital name
    get_hospital_name(hospital, callback){
        const url = `/backend/get_hospital_name.php?name=${hospital}`;
        let rdata;
        
        $.get(url, function(data, status){
            // rdata = data;
            rconsole.log(data);
        });


        callback(rdata)

    }

    //get hospital details @param location of hospital
    get_hospital_location(location){
        const url = `/backend/get_hospital_location.php?location=${location}`;
        $.get(url, function(data, status){
            console.log(data)  
          });

    }

    // get all doctors of a hospital @param hospital id
    get_doctors_hospital(id){
        const url = `/backend/get_hospital_doctors.php?id=${id}`;
        $.get(url, function(data, status){
            console.log(data)  
          });
    }

    // get hospitals by departments  |ISSUE|
    get_department_hospitals(department){
        const url = `/backend/get_deparment_hospitals.php?department=${department}`;
        $.get(url, function(data, status){
            console.log(data)  
          });
    }


    get_featured_doctors(){
        const url = `/backend/get_featured_doctors.php`;
        $.get("/backend/get_featured_doctors.php", function(data, status){
            console.log(data)  
        });
    }

    get_featured_hospitals(){
        const url = `/backend/get_featured_hospitals.php`;
        $.get(url, function(data, status){
            console.log(data)  
        });
    }

    
    // fetch (GET) data using @param url
    // fetch_data(url){
    //     // fetch data from database
    //     fetch(url)
    //     .then(res => res.json())
    //         .then((out) => {
    //             // this.data = out
    //             // console.log(out);
    //             //  this.data
    //             return out;
    //         })
    //         .catch(err => { throw err });
    //     }

    
    fetch_data(url){
        $.get("/backend/get_featured_doctors.php", function(data, status){
          console.log(data)  
        });
    }

    // fetch_data(url) {

    //     // return the entire promise chain
    //     return fetch(url)
    //     .then((response) => {
    //         if(response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error('Server response wasn\'t OK');
    //         }
    //     })
    //     .then((res) => {
    //         const result = res
    //         return res; // return the customer_name here
    //     });
    // }
    
        
    }
    



