<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
$stage=$_GET["type"];

	$levelone="\"level1\"";
	
	if( $stage== $levelone ){
        
			$UID=$_GET["uid"];
	 	echo json_encode(level1($UID));
	}

function level1($id){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=(" SELECT a.Student_Id,a.Student_Name,a.Date_of_Birth,a.Gender,Address,a.Contact,a.emailAddress FROM student a,login b where a.emailAddress=b.loginUsername and a.emailAddress= $id" );
    
 //$query=("select loginUsername,loginPassword, loginFlag from login where loginUsername = \"$id\" and loginPassword = \"$passw\"" );
	//$bool="false";
 $result=mysql_query($query);

	if (!$result) {
		$message  = 'Invalid query: ' . mysql_error() . "\n";
		$message .= 'Whole query: ' . $query;
		die($message);
	}
	$rows = array();
	while ($row=mysql_fetch_assoc($result)){
		if($row){
			$rows[] = $row;
		}
        

	}
	return($rows);
	
}
    
?>