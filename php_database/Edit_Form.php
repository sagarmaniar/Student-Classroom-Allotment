<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Edit Form</title>

	<link rel="stylesheet" type="text/css"  href="Style/Edit_Form.css" />

</head>

<body background="Images/MyBackground.png" bgcolor="#FFCC99">
	<div class="topbar"> <h1 style="color:#FFF"><center>Edit Form</center></h1></div>    
	<center>
    <div class="box">
    	<?php
		$id = $_GET['txtid'];
		include ("connect.php");
		$i ="select * from student where Student_Id='".$id. "'";
       // $h = mysqli_query($i);
			//while($tr=mysqli_fetch_array($h))
			$h = $conn->query($i);
		//$h= mysql_query($i);
		if($tr = $h->fetch_assoc())
      // if($tr->num_rows > 0)
		{
	?>
    <table><form method="post" action="">
    	<tr>
            
        	<th>ID:</th>
        	<td><input type="text" name="txtid" value="<?php echo $tr["Student_Id"]; ?>"/></td>
        </tr>
        <tr>
        	<th>Name:</th>
        	<td><input type="text" name="txtname" value="<?php echo $tr["Student_Name"]; ?>" /></td>
        </tr>
        <tr>
        	<th>Gender:</th>
        	<td>
            	<input type="text" name="txtgender" value="<?php echo $tr["Gender"]; ?>" /></td>
            </td>
        </tr>
        <tr>
        	<th>Date of Birth:</th>
        	<td><input type="text" name="txtdob" value="<?php echo $tr["Date_of_Birth"]; ?>" /></td>
        </tr>
        <tr>
        	<th>Address:</th>
        	<td><textarea cols="16" rows="3" name="txtaddress"> <?php echo $tr["Address"];?> </textarea></td>
        </tr>
        <tr>
        	<th>Subject:</th>
        	<td><input type="text" name="txtsubject" value="<?php echo $tr["Contact"]; ?>" /></td>
        </tr>            
            <?php
				}
			?>
        	<td colspan="2" align="center"><input type="submit" name="cmdedit" value="Save" />
            <a href="index.php"><img src="Images/Users_Group.png" title="Go Back"/></a>
            </td>
        </tr>
	</form></table>
    </div>
    </center>
    <?php
        include ("connect.php");
        $i = "update student set Student_Name='".$_POST['txtname']."', Gender='".$_POST['txtgender']."', Date_of_Birth='".$_POST['txtdob']."', Address='".trim($_POST['txtaddress'])."', Contact='".$_POST['txtsubject']."' where Student_Id='".$_POST['txtid']."'";
$h = $conn->query($i);

       // if($h==true){
      //  echo '<META HTTP-EQUIV="Refresh" Content="0; URL=index.php">';
       // }
        //header('Location::index.php');
        //exit;
        //mysql_close();
    ?>
</body>
</html>