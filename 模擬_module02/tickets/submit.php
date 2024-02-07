<?php
$firstName = $_GET["firstName"];
$lastName = $_GET["lastName"];
$phone = $_GET["phone"];
$password = $_GET["password"];
$verification = $_GET["verification"];

$host = 'localhost';
$dbuser ='admin';
$dbpassword = '1234';
$dbname = 'j17';

$conn = mysqli_connect($host,$dbuser,$dbpassword,$dbname);

$sql = "INSERT INTO `tickets`(`firstName`, `lastName`, `phone`, `password`, `verification`) VALUES ('".$firstName."','".$lastName."','".$phone."','".$password."','".$verification."')";

$conn->query($sql);

header("Location: ./../home.html")
?>