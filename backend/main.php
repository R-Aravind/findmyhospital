<?php




?>


<script>
let url = 'hospital_name.php?name=Hospital 1';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(out);
})
.catch(err => { throw err });

</script>