
<?php

$username = "root";
$password = "nope";

try {
	$conn = new PDO("mysql:host=maria;dbname=db", $username, $password);

	$mail = $_POST['my_mail'];
	$pass = $_POST['my_pass'];

	// $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES(?, ?)");
	$stmt = $conn->prepare("SELECT * FROM users WHERE email=? AND password=?");

	$stmt->bindParam(1, $mail);
	$stmt->bindParam(2, $pass);

	$stmt->execute();

	$result = $stmt->fetchAll();
	
	if(counst($result) == 0)
		print(false);
	else
		print(true);

}
catch(PDOException $e)
{
	echo "Connection failed: " . $e->getMessage();
}