<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
$sidd=$_POST["sid"];
$studname=$_POST["sname"];
$studdob=$_POST["sdob"];
$studgender=$_POST["sgend"];
$studcontact=$_POST["scontact"];
//$studemail=$_POST["semail"];
$studadress=$_POST["sadd"];
$studoriginalID=$_POST["sorgid"];
$studaction=$_POST["saction"];
		//echo (trimsactionsymptomID));


	$edit="editit";
	$delete="deleteit";
	
	if( $studaction== $edit ){
        
			//,$studemail
	 	echo json_encode(edit($sidd,$studname,$studdob,$studgender,$studcontact,$studadress,$studoriginalID));
	}

elseif($studaction== $delete ){
    echo json_encode(delete($sidd,$studname,$studdob,$studgender,$studcontact,$studadress,$studoriginalID));
}
		
        
function edit($id,$name,$dob,$gender,$contact,$adress,$originalID){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("update student set Student_Name= \"$name\", Gender=\"$gender\", Date_of_Birth=\"$dob\", Address=\"$adress\", Contact=\"$contact\" where Student_Id=\"$originalID\"");
 $result=mysql_query($query);

	if (!$result) {
		$message  = 'Invalid query: ' . mysql_error() . "\n";
		$message .= 'Whole query: ' . $query;
		die($message);
	}
	   
return ($result);
	
}

function delete($id,$name,$dob,$gender,$contact,$adress,$originalID){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("delete from student where Student_Id=\"$originalID\"");
 $result=mysql_query($query);

	if (!$result) {
		$message  = 'Invalid query: ' . mysql_error() . "\n";
		$message .= 'Whole query: ' . $query;
		die($message);
	}
   
return ($result);
	
}
?>