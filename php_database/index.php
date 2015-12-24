<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Student Information</title>
<link rel="stylesheet" type="text/css" href="Style/viewtablesearch.css" />
</head>
<body>
<center><h1>Welcome to Student Information</h1></center>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="addnew" href="Add_Form.php" style="font-face:Khmer OS Battambang; font-size:16px;"></a></font>
	<div class="search">
	<form method="post" action="searchidandname.php">
    <select name="cbosearch">
    	<option>ID</option>
    	<option>Name</option>
        <option>Gender</option>
        <option>Address</option>
    </select>
	<input type="text" name="txtsearch" placeholder="Type to Search" /><input type="submit" name="cmdsearch" value="Search" />
    </form>
        
    </div>
	<table>
    	<tr>
            <p>&nbsp;</p>
            <th>Student_Id</th>
            <th>Student_Name</th>
            <th>Date_of_Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Contact</th> 
    	</tr>
        <?php
			include "connect.php";
			$i = "select * from student";
       // $h = mysqli_query($i);
			//while($tr=mysqli_fetch_array($h))
			$h = $conn->query($i);
			while($tr=$h->fetch_assoc())
			{
		?>
        <tr>    
        	<td><?php echo $tr["Student_Id"]; ?></td>
            <td><?php echo $tr["Student_Name"]; ?></td>
            <td><?php echo $tr["Date_of_Birth"]; ?></td>
            <td><?php echo $tr["Gender"]; ?></td>
            <td><?php echo $tr["Address"]; ?></td>
            <td><?php echo $tr["Contact"]; ?></td>
            <td align="center"><a href="Delete_Form.php? txtid=<?php echo $tr["Student_Id"];?>">Delete</a> / <a href="Edit_Form.php? txtid=<?php echo $tr["Student_Id"];?>">Edit</a> </td>    
        </tr>
        <?php
			}
		?>
		
    </table>
</body>
</html>