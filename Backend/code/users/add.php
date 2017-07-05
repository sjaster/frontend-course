
<?php

$username = "root";
$password = "nope";

try {
	$conn = new PDO("mysql:host=maria;dbname=db", $username, $password);

	$mail = $_POST['my_mail'];
	$pass = $_POST['my_pass'];

	$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
	$stmt->bindParam(1, $mail);
	$stmt->execute();
	$result = $stmt->fetchAll();

	if(count($result) != 0)
		print(json_encode([
			'status' => false,
			'msg' => 'EMail Taken'
		]));
	else {
		$stmt = $conn->prepare("INSERT INTO users (email, password) VALUES(?, ?)");

		$stmt->bindParam(1, $mail);
		$stmt->bindParam(2, $pass);

		$stmt->execute();

		print(json_encode([
			'status' => true,
			'msg' => 'Successfull'
		]));
	}

}
catch(PDOException $e)
{
	echo "Connection failed: " . $e->getMessage();
}