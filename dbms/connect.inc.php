<?php


//connection with db server
$conRef=mysql_connect("localhost","root","") or die("Database not connected!");

// use data base
mysql_select_db("information",$conRef) or die("Wrong Data Base def");
?>