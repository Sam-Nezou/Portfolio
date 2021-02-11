<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$competences =[];
$value = $_GET['section'];

$query = "SELECT comp.name,comp.img_source, sec.name AS secName
        FROM competence AS comp, section_competence as sec 
        WHERE comp.section_id = '".$value."'
        AND sec.id = '".$value."'
        GROUP BY comp.name
        ORDER BY comp.id";

       if( $response = $conn->query($query)){
        $cr = 0;

        while ( $rows = $response->fetch_assoc() ) {
            $competences[$cr]['name'] = $rows['name'];
            $competences[$cr]['secName'] = $rows['secName'];
            $competences[$cr]['img_source'] = $rows['img_source'];
            //$competences[$cr]['img_source'] = $row['img_source'];
            $cr++;
          }
          echo json_encode(['data'=>$competences]);
    }

$conn->close();


?> 