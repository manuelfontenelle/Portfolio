<?php 



  $errors = array(); // on crée une vérif de champs
if(!array_key_exists('nom', $_POST) || $_POST['nom'] == '') {// on verifie l'existence du champ et d'un contenu
  $errors ['nom'] = "vous n'avez pas renseigné votre nom";
  }
if(!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {// on verifie existence de la clé
  $errors ['email'] = "vous n'avez pas renseigné votre email";
  }
if(!array_key_exists('sujet', $_POST) || $_POST['sujet'] == '') {// on verifie l'existence du champ et d'un contenu
  $errors ['sujet'] = "vous n'avez pas renseigné de sujet";
  }
if(!array_key_exists('message', $_POST) || $_POST['message'] == '') {
  $errors ['message'] = "vous n'avez pas renseigné votre message";
  }
//On check les infos transmises lors de la validation
  if(!empty($errors)){ // si erreur on renvoie vers la page précédente
  header('Location: index.php');
  }else{
  $_SESSION['success'] = 1;
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= 'FROM:' . htmlspecialchars($_POST['email']);
  $to = 'manuel.fontenelle@gmail.com'; // Insérer votre adresse email ICI
  $subject = 'Message envoyé par ' . htmlspecialchars($_POST['nom']) .' - <i>' . htmlspecialchars($_POST['email']) .'</i>';
  $message_content = '
  <table>
  <tr>
  <td><b>Emetteur du message:</b></td>
  </tr>
  <tr>
  <td>'. $subject . '</td>
  </tr>
  <tr>
  <td><b>Contenu du message:</b></td>
  </tr>
  <tr>
  <td>'. htmlspecialchars($_POST['message']) .'</td>
  </tr>
  </table>
  ';
mail($to, $subject, $message_content, $headers);
  header('Location: formulaire.php');
  }

  ?>