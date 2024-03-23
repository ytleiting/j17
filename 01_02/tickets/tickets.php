<?php
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$verification = $_POST["verification"];

$connect = mysqli_connect("localhost", "admin", "1234", "j17");
$sql = "INSERT INTO `tickets`(`first_name`, `last_name`, `email`, `phone`, `verification`) VALUES ('${first_name}','${last_name}','${email}','${phone}','${verification}')";
$result = $connect->query($sql);

header("Location: ./../home.html");