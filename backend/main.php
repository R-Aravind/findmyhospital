<?php




?>


<script>
let url = 'deparment_hospital.php?deparment=deparment';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(out);
})
.catch(err => { throw err });

</script>