<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
function level1($txt,$stype){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
    /*if($stype=="Student_Id"){
        
    }
    elseif($stype=="Student_Name"){
    }
    elseif($stype=="Gender"){
    }
    elseif($stype=="Address"){
    }*/
 $query=("SELECT a.Student_Id,a.Student_Name,a.Date_of_Birth,a.Gender,Address,a.Contact,a.emailAddress FROM student a where $stype like \"%$txt%\" ");
	
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
$searchtext=$_POST["srch"];
$searchtype=$_POST["typesearch"];
echo json_encode(level1($searchtext,$searchtype));
?>