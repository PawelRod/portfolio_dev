<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $company = $_POST['company'];
    $number = $_POST['number'];
    $msg = $_POST['message'];
}

$message .= "
<p><b>From:</b> $name</p>
<p><b>Email:</b> $mailFrom</p>
<p><b>Number:</b> $number *</p>
<p><b>Company:</b> $company *</p>
<b>Message:</b>
<p>$msg</p>
";

$to_email = 'rodziewiczpp@gmail.com';
$subject = 'pawelrodziewicz.com';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From:' . rawurldecode($mailFrom);

mail($to_email, $subject, $message, implode("\r\n", $headers));

header("Location: /");

?>