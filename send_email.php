<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"] . " " . $_POST["lname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "munarrenzy@gmail.com";
    
    // Set the email subject
    $subject = "New Message from $name";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    // Send the email
    if (mail($to, $subject, $email_message)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send your message. Please try again later.";
    }
}
?>
