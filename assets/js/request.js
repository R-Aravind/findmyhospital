
class HosAPI{
    constructor(){

    }

    get_hospital(hospital){
        const url = `/backend/get_hospital_name.php?name=${hospital}`;

        this.fetch_data(url);

    }

    fetch_data(url){
        // fetch data from database
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                console.log(out);
            })
            .catch(err => { throw err });
    }

}



