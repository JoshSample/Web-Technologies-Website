<?php
//Function header for getDBInfo - no input parameters
function  getDBInfo() {
    $array[0] = 0;
    $count = 0;

    //Open file cf file
    $cfg = fopen("config.txt","r");

    //Test for opening
    if (!$cfg) {
        exit("Cannot open config.txt");
    }

    //Read the data
    while(true) {
        $line = fgets($cfg);

        //Check for eof
        if (!$line) {
            break;
        }

        //Otherwise store the results
        $array[$count] = rtrim($line);
        $count++;
    }

    //Return the array
    return($array);
}

//Function header for opening the database
function openDB() {
    //Get the db info
    $array = getDBInfo();

    //Open database
    $database = mysqli_connect( $array[0], $array[1], $array[2] , $array[3]);

    //Test the database
    if (!$database) {
        exit('Cannot open database');
    }

    return($database);
}

function getItemName($item_no) {
    //Open the database
    $data = openDB();

    //Implement the query
    //Implement the query
    $query = "select item_name from product where item_no = '" .$item_no."'";
    //Invoke the query
    $res = mysqli_query($data, $query );

    //Check the result
    if ($res == false) {
        return(0);
    }

    //Invoke the row
    $item_name = mysqli_fetch_row($res);

    //Close
    mysqli_close($data);

    //Return the result
    return($item_name[0]);
}

function getPrice($item_no) {
    //Open the database
    $data = openDB();

    //Implement the query
    //Implement the query
    $query = "select price from product where item_no = '" .$item_no."'";

    //Invoke the query
    $res = mysqli_query($data, $query );

    //Check the result
    if ($res == false) {
        return(0);
    }

    //Invoke the row
    $price = mysqli_fetch_row($res);

    //Close
    mysqli_close($data);

    //Return the result
    return($price[0]);
}

function getInventory($item_no) {
    //Open the database
    $data = openDB();

    //Implement the query
    //Implement the query
    $query = "select inventory from product where item_no = '" .$item_no."'";

    //Invoke the query
    $res = mysqli_query($data, $query );

    //Check the result
    if ($res == false) {
        return(0);
    }

    //Invoke the row
    $inventory = mysqli_fetch_row($res);

    //Close
    mysqli_close($data);

    //Return the result
    return($inventory[0]);

}

$item_no = $_GET['id_no'];
$item_no = rtrim($item_no);
$desc = $_GET['desc'];
$image = $_GET['image'];
$item_name = getItemName($item_no);
$price = getPrice($item_no);
$inventory = getInventory($item_no);
?>


<html>
<head>
    <title></title>
    <link rel="stylesheet" href="Product.css" />
    <script type="text/javascript">
        function setTitle(text) {
            document.title = text;
        }
        function additem(price, quantity, image, item_name, item_no) {
            document.cookie = item_name + "=" + price + "," + quantity + "," + image + "," + item_no;
            window.location.href = "checkout.html";
        }
    </script>
</head>

    <?php
    if(isset($_POST['quantity'])) {
        $quantity = $_POST['quantity'];
        if ($quantity > $inventory){
            echo "<script language=javascript>alert('Only ' + $inventory + ' ' + '$item_name' + ' left in stock');</script>";
        }
        else {
            echo "<script language=javascript>additem($price, $quantity, '$image', '$item_name',$item_no);</script>";
        }
    }
    // generate webpage with values from database
    $quantity = 1;
    print ("<body onload=\"setTitle( '$item_name' )\"   >");
    echo '<form action="" name="productBuy" method="post">';
    print("\n<h1>");
    print( "$item_name" );
    print("</h1>");
    print("\n<img src='" . $image . "' />");
    print("\n<h3>" . $desc . "</h3>");
    print("\n<label for='price'>Price:   </label>");
    print("\n<input style='background-color: #ffcc99; border:hidden' type='text' id='price' name='price' value=" . $price . " readonly='readonly' />");
    echo "\n<br />";
    if ($inventory > 0) {
        print("\n<label for='quantity'>Quantity:   </label>");
        print("\n<input type='number' id='quantity' name='quantity' value='" . $quantity. "' min='1' required='required' title=''/>");
        echo "\n<br /><br />";
        $desc = str_replace(' ', '+', $desc);
        print("\n<input type='image' src='images/checkout/BuyNow.png' alt='submit' value='Buy Now'><br/>");
    }
    else {
        print("<h4 style='font-size: 200%'>Sold Out</h4>");
        print('<p><a href="store_index.html">Continue Shopping</a></p>');
    }
    echo '</form>';
    ?>


</body>
</html>