<?php
// avoid CORS errors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// EoCORS Errors
require "DbConnect.php";
?>
<?php
$database = new Database("localhost", "root", "react-crud", "");
$database->connect();
// $database->prepReq("SELECT * FROM users");
// $users = $database->fetchData();

$user = json_decode(file_get_contents('php://input'));
var_dump($user);
/*
json_decode pour transformer le json reçu en objet php 
https://reqbin.com/code/php/0uwqq41y/json-to-array-php-example#:~:text=To%20convert%20a%20JSON%20data,converting%20JSON%20to%20PHP%20array.
*/
// var_dump($user->name);
// var_dump($user->email);
// var_dump($user->mobile);

/*
$_SERVER['REQUEST_METHOD'] == 'POST')

$_SERVER[$method]
case avec POST
PUT
DELETE
UPDATE
*/
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        $database->prepReq("INSERT INTO users(id, name, email, mobile, created_at) VALUES(id, '$user->name', '$user->email', '$user->mobile', created_at)");
}
// echo "<ul>";
// foreach ($users as $user) {
//     $username = $user['name'];
//     echo "<li>$username</li>";
// }
// echo "</ul>";
?>