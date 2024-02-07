<?php

$connent = mysqli_connect("localhost", "admin", "1234", "j17");

$sql = "INSERT INTO `buy_ticket`(`first_name`, `last_name`, `phone`, `password`, `verification`) VALUES ('" . $_POST["first_name"] . "','" . $_POST["last_name"] . "','" . $_POST["phone"] . "','" . $_POST["password"] . "','" . $_POST["verification"] . "')";

$result = $connent->query($sql);

echo "<script>window.location.href = 'home.html'</script>";
?>