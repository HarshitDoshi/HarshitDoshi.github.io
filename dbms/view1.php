<?php
require 'connect.inc.php';
error_reporting(1);
?>


<?php


		$sid = $query_row['Sid'];
		$name = $query_row['name'];
		$age = $query_row['age'];
		$address = $query_row['address'];
		$day = $query_row['day'];
		$month = $query_row['month'];
		$year = $query_row['year'];
		$contact = $query_row['contact'];
		$gender = $query_row['gender'];
		$profession = $query_row['profession'];
		$mstatus = $query_row['mstatus'];
		
$fname = $_REQUEST['fname'];






if($_REQUEST['fsubmit'])
{
echo '<h3>Here are the details : </h3><br>';
$query = "SELECT * FROM ois WHERE name = '$fname'";
echo "<table border='1' <tr> <th>ID</th><th>name</th><th>age</th><th>address</th><th>day(dob)</th><th>month(dob)</th><th>year(dob)</th><th>contact</th><th>gender</th><th>profession</th><th>mstatus</th></tr>";

if($query_run = mysql_query($query))
{
	while($query_row = mysql_fetch_assoc($query_run))
	{
		
		
		
		echo "<tr>";
 	    echo "<td>" . $query_row['Sid'] . "</td>";
    	echo "<td>" . $query_row['name'] . "</td>";
		echo "<td>" . $query_row['age'] . "</td>";
  	    echo "<td>" . $query_row['address'] . "</td>";
	    echo "<td>" . $query_row['day(dob)'] . "</td>";
  	    echo "<td>" . $query_row['month(dob)'] . "</td>";
	    echo "<td>" . $query_row['year(dob)'] . "</td>";
      	echo "<td>" . $query_row['contact'] . "</td>";
	    echo "<td>" . $query_row['gender'] . "</td>";
     	echo "<td>" . $query_row['profession'] . "</td>";
	    echo "<td>" . $query_row['mstatus'] . "</td>";
  	
	
	
	
  	echo "</tr>";
		
		
		
		
 		
	}
	echo "</table>";
	
	echo '<br>';
	
	echo '<form method="POST" name="fill" action="dbms/project.php"><input type="submit" name="Submit"  value="home" /></form>';
	
	
		

}
else
{
echo 'fail';
}



}
else
{

?>

<html>
<body>
<h3 >Enter full name : </h3>
<form method="POST" style="font-family:Comic Sans Ms" action="">
<input type="text" name="fname" size="50" />
<input type="submit" name="fsubmit" value="submit" />
</form>
<?php

}
?>
</body>
</html>