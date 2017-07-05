
<?php

$username = "root";
$password = "nope";

try {
	$conn = new PDO("mysql:host=maria;dbname=db", $username, $password);

	$mail = $_POST['my_mail'];
	$pass = $_POST['my_pass'];

	$stmt = $conn->prepare("INSERT INTO users (email, password) VALUES(?, ?)");

	$stmt->bindParam(1, $mail);
	$stmt->bindParam(2, $pass);

	$stmt->execute();

	print(json_encode($_GET));
	print(json_encode($_POST));

}
catch(PDOException $e)
{
	echo "Connection failed: " . $e->getMessage();
}