<?php
 function addNumbers(){
   echo '<script>alert("Welcome to Geeks for Geeks")</script>';
$json=file_get_contents("https://www.omdbapi.com/?t=joker&apikey=f7f7c6d2");
$info=json_decode($json);
    print_r($_POST);
    if(isset($_POST['user']) {
echo $_POST["user"]; //just an example of processing
}
}


function name (){
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['fname'];
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}

if(isset($_POST['user']) {
echo $_POST["user"]; //just an example of processing
}
}
?>