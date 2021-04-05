<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>process</title>
</head>
<body>
 <?php
 
 // Get all post data
 extract($_POST);

 // Take post data and store in comma delimited blog.txt
 if (count($_POST) > 0) {
     // take uploaded image and place in images/blog
     if (count($_FILES)) {
         // Take uploaded image and place in blog folder
         $target_dir = "images/blog/";
         $target_file = $target_dir . basename($_FILES["image"]["name"]);

         // Temporary file is moved to permanent file
         $res = move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);

         // if file fails to upload
         if (!$res) {
             print("<h1>Problem uploading ".$target_file."<h1>");
         }
         $record["field2"] = basename($_FILES["image"]["name"] . ",");
     }

     // Write the record to the file.
     $file = fopen('blog.txt', 'a');
     if (!$file)
         exit("<h1>Error openng info </h1>");
     
     //Print out post data
     for ($i = 0; $i < count($_POST); $i++) {
         //Get the current key
         $ind = key($_POST);

         //Get the current value
         $data = $_POST[$ind];
         if ($i == 2)
             $record["field3"] = $_POST[$ind] . ",";
         else
            $record["field".$i] = $_POST[$ind] . ",";

         //Get the next one
         next($_POST);
     }
     // add date
     $record["field4"] = date('m/d/y');
     // sort the keys since they were added out of order
     ksort($record);

     // write the array to blog.txt
     for ($i = 0; $i < count($record); $i++) {
         fwrite($file, $record["field".$i]);
     }
     fwrite($file, PHP_EOL);
     fclose($file);
 }  

 // redirect back to admin.html
 header("Location: admin.html");
 exit();

 ?>




<body/>
