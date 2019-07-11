<?php




?>


<script>
let url = 'hospital_doctors.php?id=1';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(out);
})
.catch(err => { throw err });

</script>