<?php

$name = $_POST['name'];
$email = $_POST['email'];
$telegram = $_POST['telegram'];
$phone = $_POST['phone'];

$token = "";
$chat_id = "";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Telegram' => $telegram,
  'Email' => $email
);

if (($name === "" && $phone === "") && ($email === '' && $telegram === '')){
  header('Location: index.html');
  exit;
}
else{
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
header('Location: index.html');
exit;
}
?>

