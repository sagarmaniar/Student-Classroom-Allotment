<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
$stage=$_GET["type"];

	$levelone="\"level1\"";
	$leveltwo="\"level2\"";
	$levelthree="\"level3\"";
	$levelfour="\"level4\"";
	$levelfive="\"level5\"";
	
	if( $stage== $levelone ){
			$UID=$_GET["uid"];
	 	echo json_encode(level1());
	}
elseif($stage== $leveltwo){
    
	 	echo json_encode(level2());
}
elseif($stage== $levelthree){
    $roomNo=$_GET["rono"];
	 	echo json_encode(level3($roomNo));
}
elseif($stage== $levelfour){
    $romNo=$_GET["rono1"];
    $sloNo=$_GET["sono"];
    $depNo=$_GET["depID"];
    $courNo=$_GET["courseid"];
	 	echo json_encode(level4($romNo,$sloNo,$depNo,$courNo));
}
elseif($stage== $levelfive){
    
	 	echo json_encode(level5());
}

function level1(){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("SELECT a.Student_Id,a.Student_Name,a.Date_of_Birth,a.Gender,Address,a.Contact,a.emailAddress FROM student a" );
    //SELECT a.Dept_Id,a.Dept_Name,a.Dept_PhoneNum,a.depEmailAddress  FROM department a,login b where a.depEmailAddress=b.loginUsername and a.depEmailAddress= $id
	
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
function level2(){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("SELECT  Room_No,Course_Id,Slot_No,Number_of_Students FROM allotment" );
    //SELECT a.Dept_Id,a.Dept_Name,a.Dept_PhoneNum,a.depEmailAddress  FROM department a,login b where a.depEmailAddress=b.loginUsername and a.depEmailAddress= $id
	
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

function level3($nom){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("select distinct slot_no from books where slot_no not in (select slot_no from books where room_no = $nom)");
    //SELECT a.Dept_Id,a.Dept_Name,a.Dept_PhoneNum,a.depEmailAddress  FROM department a,login b where a.depEmailAddress=b.loginUsername and a.depEmailAddress= $id
	
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

function level4($rno,$sno,$dno,$cno){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("insert into books (Room_No,Dept_Id,Course_Id,Slot_No ) value ($rno,$dno,$cno,$sno)" );
    //SELECT a.Dept_Id,a.Dept_Name,a.Dept_PhoneNum,a.depEmailAddress  FROM department a,login b where a.depEmailAddress=b.loginUsername and a.depEmailAddress= $id
	
 $result=mysql_query($query);

	if (!$result) {
		$message  = 'Invalid query: ' . mysql_error() . "\n";
		$message .= 'Whole query: ' . $query;
		die($message);
	}
	return ($result);
	
}
function level5(){
 mysql_connect("localhost", "root","root");
 mysql_select_db("westernuniversity") or die(mysql_error());
 $query=("select  c.course_name,count(s.student_id) as \"Count_Student\" from course c,student s, chooses ch where ch.student_id = s.student_id and c.course_id = ch.course_id group by course_name order by course_name" );
    //SELECT a.Dept_Id,a.Dept_Name,a.Dept_PhoneNum,a.depEmailAddress  FROM department a,login b where a.depEmailAddress=b.loginUsername and a.depEmailAddress= $id
	
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
