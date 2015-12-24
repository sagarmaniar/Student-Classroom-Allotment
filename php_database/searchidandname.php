<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Search by ID</title>
	<link rel="stylesheet" type="text/css" href="Style/viewtablesearch.css" />
</head>

<body>
<center><h1>Search Result</h1></center>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="addnew" href="index.php" style="font-face:Khmer OS Battambang; font-size:16px;"></a></font>
	<table>
    	<tr>
            <th>StuID</th>
            <th>StuName</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Contact</th>

        </tr>
    <?php
		$text = $_POST['txtsearch'];
		if($text==""){
			echo "No Data....Please Try Again!!!"."<br>";
			echo '<a href="index.php"><img src="Images/Users_Group.png" title="Go Back"></a>';
		}
	?>
    <?php
		$cbo = $_POST['cbosearch'];
		$search = $_POST['txtsearch'];
		include('connect.php');
	?>
    <?php
		if($cbo=="ID")
		{
			$id ="SELECT * FROM student WHERE student_id='$search'";
            $h = $conn->query($id);
	?>

    <?php
		while($di = $h->fetch_assoc())
		{
	?>
			<tr>
				<td><?php echo $di["Student_Id"]; ?></td>
				<td><?php echo $di["Student_Name"]; ?></td>
                <td><?php echo $di["Gender"]; ?></td>
                <td><?php echo $di["Date_of_Birth"]; ?></td>
                <td><?php echo $di["Address"]; ?></td>
                <td><?php echo $di["Contact"]; ?></td>
				<td align="center"><a href="Delete_Form.php? txtid=<?php echo $di["Student_Id"];?>">Delete</a> / <a href="Edit_Form.php? txtid=<?php echo $di["Student_Id"];?>">Edit</a></td>
			</tr>
            <?php
		}
		}else if($cbo=="Name")
		{
			$na = "SELECT * FROM student WHERE Student_Name like '".$search."%'";
            $h = $conn->query($na);
	?>
    <?php
		while($an=$h->fetch_assoc())
		{
	?>
			<tr>
				<td><?php echo $an["Student_Id"]; ?></td>
				<td><?php echo $an["Student_Name"]; ?></td>
                <td><?php echo $an["Gender"]; ?></td>
                <td><?php echo $an["Date_of_Birth"]; ?></td>
                <td><?php echo $an["Address"]; ?></td>
                <td><?php echo $an["Contact"]; ?></td>
				<td align="center"><a href="Delete_Form.php? txtid=<?php echo $an["Student_Id"];?>">Delete</a> / <a href="Edit_Form.php? txtid=<?php echo $an["Student_Id"];?>">Edit</a></td>
			</tr>
            <?php
				}
			?>  
     <?php
		}else if($cbo=="Address")
				{
        $add = "SELECT * FROM student WHERE Address like '".$search."%'";
            $h = $conn->query($add);
     ?>
		<?php
		while($dda=$h->fetch_assoc())
		{
		?>
			<tr>
				<td><?php echo $dda["Student_Id"]; ?></td>
				<td><?php echo $dda["Student_Name"]; ?></td>
                <td><?php echo $dda["Gender"]; ?></td>
                <td><?php echo $dda["Date_of_Birth"]; ?></td>
                <td><?php echo $dda["Address"]; ?></td>
                <td><?php echo $dda["Contact"]; ?></td>
				<td align="center"><a href="Delete_Form.php?txtid=<?php echo $dda["Student_Id"];?>">Delete</a> / <a href="Edit_Form.php?txtid=<?php echo $dda["Student_Id"];?>">Edit</a></td>
			</tr>
            <?php
				}
			}else if($cbo=="Gender")
			{
			$g = "SELECT * FROM student WHERE Gender like '".$search."%'";
             $h = $conn->query($g);
			?>  
			<?php
				while($ge=$h->fetch_assoc())
				{			
			?>
            <tr>
				<td><?php echo $ge["Student_Id"]; ?></td>
				<td><?php echo $ge["Student_Name"]; ?></td>
                <td><?php echo $ge["Gender"]; ?></td>
                <td><?php echo $ge["Date_of_Birth"]; ?></td>
                <td><?php echo $ge["Address"]; ?></td>
                <td><?php echo $ge["Contact"]; ?></td>
				<td align="center"><a href="Delete_Form.php?txtid=<?php echo $ge["Student_Id"];?>">Delete</a> / <a href="Edit_Form.php?txtid=<?php echo $ge["Student_Id"];?>">Edit</a></td>
			</tr>
            
            <?php
				}
			}
			?>
</table>
</body>
</html>