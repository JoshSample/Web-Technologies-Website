<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" href="blog.css" />
    <title>Blog</title>
</head>
<body>
    <?php
    // function for sorting dates
    function date_compare($element1, $element2) {
        $datetime1 = strtotime($element1[4]);
        $datetime2 = strtotime($element2[4]);
        return $datetime2 - $datetime1;
    }

    // open blog file
    $file = fopen("blog.txt", "r");
    if (!$file)
        exit("<h1>Error openng info </h1>");

    $no_of_lines = 0;
    while (true) {
        // Get the current line in the file.
        $line = fgets($file);  //Reads up to endline
        // If this is the end of the file, stop.
        if (!$line)    //Returns false when no more data – must read one additional time to
            //read the  ^Z
            break;

        // Save the information about this blog entry.
        $info[$no_of_lines++] = $line;
    }
    // Close the file now that we're finished reading from it.
    fclose($file);
    // Take the lines and parse them into a multidimensional array
    for ($i = 0; $i < count($info); $i++) {
        $blog[$i] = explode(",", $info[$i]);
    }
    // Sort the blog entries by date
    usort($blog, 'date_compare');

    // output data to page
    foreach($blog as $post) {
        echo '<div class="center">';
        print("<h1>" . $post[1] . "</h1>");
        print("<h2>By " . $post[0] . " on " . $post[4] . "</h2>");
        print("<img src='images/blog/" . $post[2] . "'/>");
        print("<p>" . $post[3] . "</p>");
        echo '</div>';
        echo '<div style="border-bottom-style: dashed;"></div>';
    }

    ?>
</body>
</html>