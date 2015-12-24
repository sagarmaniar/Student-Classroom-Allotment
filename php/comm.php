<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
function level1(){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("select Course_Id,Course_Name,Course_Credits,Course_StartDate,Course_EndDate,Course_Prerequisites,Max_Registrations from course");
	
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


$stage=$_GET["type"];

	$levelone="\"courseDisp\"";
	
	if( $stage== $levelone ){
			
	 	echo json_encode(level1());
	}

	



	
	?> 