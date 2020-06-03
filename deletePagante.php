<?php
    header('Content-Type: application/json');

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'hoteldb';


    $conn = new mysqli($server, $username, $password, $dbName); //apertura connessione
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
        return;
    };
    $id = $_POST['id'];

    $sql = "
        DELETE FROM paganti WHERE paganti.id = " . $id ;

    $conn -> query($sql);

    $conn -> close(); // chiusura connessione
