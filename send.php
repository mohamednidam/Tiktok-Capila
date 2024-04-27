<?php

    $to = "hamzabichri1997@gmail.com"; // this is your Email address
    $full_name = $_POST['full_name'];
    $phone_number = $_POST['phone_number'];
    $city = $_POST['city'];
    $subject = "capila - nouvelle commande";
    $message = $full_name . " : " . $phone_number . " : " . $city;
    $headers = "From:" . $full_name;
    if(mail($to,$subject,$message,$headers)){
        echo "Mail Sent. Merci " . $full_name . ", nous vous contacterons sous peu.";
    } else {
        echo "Une erreur s'est produite, veuillez réessayer plus tard.";
    }
?>
