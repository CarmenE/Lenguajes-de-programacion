<?php
//path to directory to scan
$directory = "../images/team/harry/";
 
//get all image files with a .jpg extension.
$images = glob($directory . "*.jpg");
 
//print each file name
foreach($images as $image)
{
echo $image;
}

?>