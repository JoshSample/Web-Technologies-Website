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

// create database variable
$database = openDB();
// get form data
$first_name = $_POST['name_first'];
$last_name = $_POST['name_last'];
$email = $_POST['email'];
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
if ($address2 == "") {
    $address2 = "null";
}
$city = $_POST['city'];
$state = $_POST['state'];
$country = $_POST['country'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$fax = $_POST['fax'];
if ($fax == "") {
    $fax = "null";
}
$mail_list = $_POST['check'];
if ($mail_list == 'check') {
    $mail_list = 1;
}
else {
    $mail_list = 0;
}
$cc_no = $_POST['cc_no'];
$ex_mo = $_POST['expMonth'];
$ex_yr = $_POST['expYear'];

// insert customer data
$query = "INSERT INTO customer VALUES( $cc_no, $ex_mo, $ex_yr, '$first_name', '$last_name', '$email', '$address1', '$address2', '$city', '$state', $zip, '$country', '$phone', '$fax', $mail_list )";
$res = mysqli_query($database, $query);
//Check the result
if ($res == 0) {
    print("Error executing insert statement");
}

// insert into orders
foreach($_COOKIE as  $key => $val) {
    if ($key == "XDEBUG_SESSION") {
    }
    else {
        $values = explode(",", $val);
        $quantity = $values[1];
        $item_no = $values[3];
        $query = "INSERT INTO orders VALUES( $quantity, now(), $cc_no, $item_no)";
        $res = mysqli_query($database, $query);
        //Check the result
        if ($res == 0) {
            print("Error executing insert statement");
        }
    }
}

// decrement inventory by quantity
$query = "UPDATE product SET inventory = inventory - $quantity WHERE item_no = $item_no";
$res = mysqli_query($database, $query);
    //Check the result
    if ($res == 0) {
            print("Error executing update statement");
    }
?>

<html>
<head>
    <title>Order Confirmed</title>
    <style>
        .center {
            margin-left: auto;
            margin-right: auto;
        }
    </style>
    <script type="text/javascript">
        // Countdown timer for redirecting to another URL after several seconds

        var seconds = 15; // seconds for HTML
        var foo; // variable for clearInterval() function

        function redirect() {
            document.location.href = 'index.html';
        }

        function updateSecs() {
            document.getElementById("seconds").innerHTML = seconds;
            seconds--;
            if (seconds == -1) {
                clearInterval(foo);
                redirect();
            }
        }

        function countdownTimer() {
            foo = setInterval(function () {
                updateSecs()
            }, 1000);
        }

        function deleteAllCookies() {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }

        deleteAllCookies();
        countdownTimer();
    </script>
</head>
<body style="text-align:center; background-color:lightskyblue">
    <h1>Order Confirmed</h1>
    <h2>Your Order has been placed. Check email for order number and shipping info.</h2>
    <h3>Thank you! Redirecting you to our home page in <span style="color:red"id="seconds">15</span> seconds.</h3>
</body>
</html>