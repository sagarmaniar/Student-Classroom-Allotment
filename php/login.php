<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
$userD=$_POST["uname"];
		$passID=$_POST["passwo"];
		//echo (trim.($symptomID));
		echo json_encode(level2($userD,$passID));
        
        function level2($id,$passw){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("select loginUsername,loginPassword, loginFlag from login where loginUsername = \"$id\" and loginPassword = \"$passw\"" );
	$bool="false";
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