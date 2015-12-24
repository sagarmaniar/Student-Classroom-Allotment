<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Delete Form</title>
	<link href="Style/Delete_Form.css" type="text/css" rel="stylesheet" />
</head>

<body background="Images/MyBackground.png" bgcolor="#999966">
	<div class="topbar"><center><h1 style="color:#FFF">Delete Form</h1></center></div>
	<div id="box"><center>
    
    	<?php
		error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
			$id = $_GET['txtid'];
			include ("connect.php");
			$i = "select * from student where Student_Id='".$id."'";
			//$h = mysql_query($i);
        $h = $conn->query($i);
			if($tr = $h->fetch_assoc())
			{
		?>
    
	<table>
    		<form method="post" action="">
    	<tr>
        	<th>ID:</th>
            <td><input type="text" name="txtid" value="<?php echo $tr["Student_Id"]; ?>" /></td>
        </tr>
        <tr>
        	<th>Name:</th>
            <td><input type="text" name="txtname" value="<?php echo $tr["Student_Name"]; ?>"/></td>
        </tr>
        <tr>
        	<th>Gender:</th>
            <td><input type="text" name="txtgender" value="<?php echo $tr["Gender"]; ?>" /></td>
        </tr>
        <tr>
        	<th>Date of Birth:</th>
            <td><input type="text" name="txtdob" value="<?php echo $tr["Date_of_Birth"]; ?>" /></td>
        </tr>
        <tr>
        	<th>Address:</th>
            <td><textarea name="txtaddress" cols="14px" rows="3"><?php echo $tr["Address"]; ?></textarea></td>
        </tr>
        <tr>
        	<th>Subject:</th>
            <td><input type="text" name="txtsub" value="<?php echo $tr["Contact"]; ?>" /></td>
        </tr>
        <?php
                error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
			}
		?>
        <tr>
            <td colspan="2" align="center">
            <input type="submit" name="cmddelete" value="Delete"/>
            <a href="index.php"><img src="Images/Users_Group.png" title="Go Back" /></a>
            </td>
        </tr>
        	</form>
    </table></center>
	</div>
        <?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
if(!(empty($_POST['txtid']))){
        $id=$_POST['txtid'];        
        include("connect.php");
        $i = "delete from student where Student_Id='".$id."'";
    $k = $conn->query($i);
}
       // if($k==true){
       // echo '<META HTTP-EQUIV="Refresh" Content="0; URL=index.php">';
       // }
        //header('Location::index.php');
        //exit;
        //mysql_close();
    ?>
</body>
</html>