<?php
   use PHPMailer\PHPMailer\PHPMailer;
   if(isset($_POST['name']) and  isset($_POST['phone']) ) {
        $userName = $_POST['name'];
        $userPhone = $_POST['phone'];

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";
    
        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->Host ="smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "meancook.dy@gmail.com";
        $mail->Password = "Malma2033";
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        $mail->isHTML(true);
        $mail->setFrom($userName,$userPhone);
        $mail->addAddress("meancook.dy@gmail.com");
        $mail->Body = $userName."jest zainteresowany ofertą kontakt - ".$userPhone;

        if($mail->send()){
            $status = "success";
            $response = "Email is sent!";
        }
        else
        {
            $status = "failed";
            $response = "Something is wrong: <br>" . $mail->ErrorInfo;
        }
    
        exit(json_encode(array("status" => $status, "response" => $response)));

   }

   function name(){
       return "loka";
   }
   name();

?>