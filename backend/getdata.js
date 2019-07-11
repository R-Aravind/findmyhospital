let url = 'featured_hospital.php';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(out);
})
.catch(err => { throw err });