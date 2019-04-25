<?php
//$to = 'ap@thelandpage.ru';
$to = 'sergey.kalistratov@bk.ru';
$result = mail($to,"Заявка с сайта!","\nФорма: $_POST[fn] \nИмя: $_POST[name] \nТелефон: $_POST[numb] \nE-mail: $_POST[email]", "Content-type: text/plain; charset=\"utf-8\"\r\n");

if ($result) {
    header("Location:index.html");
}
else{
    header("Location:index.html?status=false");
}
?>