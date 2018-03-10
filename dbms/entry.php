<?php
error_reporting(1);

require 'connect.inc.php';




$name = $_REQUEST['name'];
$age = $_REQUEST['age'];
$address = $_REQUEST['address'];
$day = $_REQUEST['day'];
$month = $_REQUEST['month'];
$contact = $_REQUEST['contact'];
$year = $_REQUEST['year'];
$gender = $_REQUEST['gender'];
$profession = $_REQUEST['profession'];
$mstatus = $_REQUEST['mstatus'];


if($_REQUEST['submit'] && $name!= "" && $age!="" && $address!="")
	{
	
		$sqlQuery="insert into ois values('$id','$name','$age','$address','$day','$month','$year','$contact','$gender','$profession','$mstatus')";	

mysql_query($sqlQuery);

	
	
	
	include("link1.php");
	echo $id;
	
	
	
	}
else 
{
	

?>
<head>
<title style="font-family:Comic Sans Ms ">Online Identification System</title>
</head>
<body>
<br />
<h1 align="center" style="font-family:Lucida Fax">Enter the information below : </h1>
<form method="POST" style="font-family:Comic Sans Ms" action="">
<h4>*To save info into Databse, atleast Name, Age and Address must be filled.</h4>	

<br />
Full Name: 
<input type="text" name="name" size="50" />
<br />
<br />
Age: 
<input type="text" name="age" size="10" />
<br />
<br />
Address: <br />
<textarea name="address" rows="5" cols="40"></textarea>
<br /><br />
Date of Birth: 
Day 
<?php
echo '<select name="day">';
for($i=1;$i<=31;$i++)
{
echo "<option value=".$i.'>'.$i."</option>";
}

echo '</select>';


?>
Month
<select name="month">
<option value="January">January</option>
<option value="February">February</option>
<option value="March">March</option>
<option value="April">April</option>
<option value="May">May</option>
<option value="June">June</option>
<option value="July">July</option>
<option value="August">August</option>
<option value="September">September</option>
<option value="October">October</option>
<option value="November">November</option>
<option value="December">December</option>
</select>
Year
<?php
echo '<select name="year">';
for($i=1900;$i<=2014;$i++)
{
echo "<option value=".$i.'>'.$i."</option>";
}

echo '</select>';


?>

<br />
<br />
Contact :
<input type="text" name="contact" size="10" />
<br />
<br />
Gender: 
<select name="gender">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
<br />
<br />
Profession : 
<select name="profession">
<option value="student">Student</option>
<option value="working">Working</option>
<option value="other">Other</option>
</select>

<br />
<br />
Maritial Status: 
<select name="mstatus">
<option value="married">Married</option>
<option value="unmarried">Non-Married</option>
</select>
<br /><br />

<input type="submit" name="submit" value="submit" />
</form>


<?php
}
?>









</body>
</html>
