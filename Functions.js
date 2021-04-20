// function that checks if cart has items in it
function toCart() {
    //See if Cookie is empty
    if (document.cookie.length > 0) {
        window.location.href = 'cart.html';
    }
    else {
        window.alert("Empty Cart - Please Buy Something First")
        window.location.href = 'store_index.html';
    }

}

// adds items to cart by creating a cookie for it
function addToCart() {
    // Get title for confirmation box
    var title = document.title;
    var cfrm = confirm("Add " + title + " to cart?");
    // if user clicks "Ok"
    if (cfrm == true) {
        // Get the quantity
        var quantity = document.productBuy.quantity.value;

        // assign catalog numbers
        if (title === "Brown Rabbit Slippers") {
            var catalogNum = 2;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Caribou Skin Boots") {
            var catalogNum = 1;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Dog Sled") {
            var catalogNum = 8;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Earring") {
            var catalogNum = 4;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Hair Clip") {
            var catalogNum = 6;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Ivory Carvings") {
            var catalogNum = 11;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Moose Skin Boots") {
            var catalogNum = 0;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Necklace") {
            var catalogNum = 5;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Pendent") {
            var catalogNum = 7;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Snow Rabbit Slippers") {
            var catalogNum = 3;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Wood Carving 1") {
            var catalogNum = 9;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
        else if (title === "Wood Carving 2") {
            var catalogNum = 10;
            document.cookie = catalogNum + "=" + quantity + ";";
        }
    }
}

// deletes cookie, removing the item from cart
function remove(cookieName, cookieValue) {
    var cfrm = confirm("Remove from cart?");
    // delete cookie
    if (cfrm == true) {
        document.cookie = cookieName + "=" + cookieValue + ";" + "expires=Thu, 01-Jan-95 00:00:01 GMT";
        toCart();
    }
}

// uses dynamic html to build shopping cart
function buildCart() {
    //Unescape cookies - only necessary if used escape
    var my_cookies = unescape(document.cookie);
    //Split cookie up based on ;
    var cookie_array = my_cookies.split(";");
    // Get length of cookie array
    var length = cookie_array.length;

    //Build table dynamically
    var total = 0;
    for (var i = 0; i < length; i++) {
        var cookie_val = cookie_array[i].split("=");
        cookie_val[0] = cookie_val[0].replace(/\s/g, '');
        // build rows based on catalog number
        if (cookie_val[0] === "2") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>2</b>";
            newtd1a.innerHTML = '<b>Brown Rabbit Slippers</b> <br /> <img src="images/products/footwear/slipper1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$150.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (150.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (150.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "1") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>1</b>";
            newtd1a.innerHTML = '<b>Caribou Skin Boots</b> <br /> <img src="images/products/footwear/boots1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$300.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (300.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (300.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "8") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>8</b>";
            newtd1a.innerHTML = '<b>Dog Sled</b> <br /> <img src="images/products/artsCrafts/dogsled1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$1000.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1000.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1000.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "4") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>4</b>";
            newtd1a.innerHTML = '<b>Earring</b> <br /> <img src="images/products/jewelry/earing1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$1000.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1000.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1000.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "6") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>6</b>";
            newtd1a.innerHTML = '<b>Hair Clip</b> <br /> <img src="images/products/jewelry/hairclp1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$75.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (75.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (75.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "11") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>11</b>";
            newtd1a.innerHTML = '<b>Ivory Carvings</b> <br /> <img src="images/products/artsCrafts/pendent2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$2500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (2500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (2500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "0") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>0</b>";
            newtd1a.innerHTML = '<b>Moose Skin Boots</b> <br /> <img src="images/products/footwear/boots2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$250.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (250.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (250.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "5") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>5</b>";
            newtd1a.innerHTML = '<b>Necklace</b> <br /> <img src="images/products/jewelry/pendent4.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "7") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>7</b>";
            newtd1a.innerHTML = '<b>Pendent</b> <br /> <img src="images/products/jewelry/pendent6.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$400.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (400.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (400.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "3") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>3</b>";
            newtd1a.innerHTML = '<b>Snow Rabbit Slippers</b> <br /> <img src="images/products/footwear/slipper2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$150.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (150.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (150.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "9") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>9</b>";
            newtd1a.innerHTML = '<b>Wood Carving 1</b> <br /> <img src="images/products/artsCrafts/craft5.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "10") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>10</b>";
            newtd1a.innerHTML = '<b>Wood Carving 2</b> <br /> <img src="images/products/artsCrafts/craft7.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1500.00 * parseInt(cookie_val[1]));
        }
    }
    // Table header
    var newrow = document.getElementById("table").insertRow(0);
    var newtd0 = newrow.insertCell(-1);
    newtd0.align = "center";
    newtd0.width = 100;
    var newtd1 = newrow.insertCell(-1);
    newtd1.align = "center";
    var newtd2 = newrow.insertCell(-1);
    newtd2.align = "center";
    var newtd3 = newrow.insertCell(-1);
    newtd3.align = "center";
    var newtd4 = newrow.insertCell(-1);
    newtd4.align = "center";
    newtd0.innerHTML = "<b>Catalog #</b>";
    newtd1.innerHTML = "<b>Item</b>";
    newtd2.innerHTML = "<b>Price</b>";
    newtd3.innerHTML = "<b>Quantity</b>";
    newtd4.innerHTML = "<b>Total</b>";
    // Table bottom
    var row = document.getElementById("table").insertRow(-1);
    var td0 = row.insertCell(-1);
    td0.align = "center";
    td0.width = 100;
    var td1 = row.insertCell(-1);
    td1.align = "right";
    td1.width = 100;
    td0.innerHTML = "<b>Total</b>"
    td1.innerHTML = "<b>$" + total.toFixed(2) + "</b>";
    document.createElement("td1");
    td1.setAttribute("colspan", "4");
}

// this function builds the table for the checkout
function checkoutCart() {
    //Unescape cookies - only necessary if used escape
    var my_cookies = unescape(document.cookie);
    //Split cookie up based on ;
    var cookie_array = my_cookies.split(";");
    // Get length of cookie array
    var length = cookie_array.length;

    //Build table dynamically
    var total = 0;
    for (var i = 0; i < length; i++) {
        var cookie_val = cookie_array[i].split("=");
        cookie_val[0] = cookie_val[0].replace(/\s/g, '');
        // build rows based on catalog number
        if (cookie_val[0] === "2") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>2</b>";
            newtd1a.innerHTML = '<b>Brown Rabbit Slippers</b> <br /> <img src="images/products/footwear/slipper1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$150.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (150.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (150.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "1") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>1</b>";
            newtd1a.innerHTML = '<b>Caribou Skin Boots</b> <br /> <img src="images/products/footwear/boots1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$300.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (300.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (300.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "8") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>8</b>";
            newtd1a.innerHTML = '<b>Dog Sled</b> <br /> <img src="images/products/artsCrafts/dogsled1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$1000.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1000.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1000.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "4") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>4</b>";
            newtd1a.innerHTML = '<b>Earring</b> <br /> <img src="images/products/jewelry/earing1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$1000.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1000.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1000.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "6") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>6</b>";
            newtd1a.innerHTML = '<b>Hair Clip</b> <br /> <img src="images/products/jewelry/hairclp1.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$75.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (75.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (75.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "11") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>11</b>";
            newtd1a.innerHTML = '<b>Ivory Carvings</b> <br /> <img src="images/products/artsCrafts/pendent2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$2500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (2500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (2500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "0") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>0</b>";
            newtd1a.innerHTML = '<b>Moose Skin Boots</b> <br /> <img src="images/products/footwear/boots2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$250.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (250.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (250.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "5") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>5</b>";
            newtd1a.innerHTML = '<b>Necklace</b> <br /> <img src="images/products/jewelry/pendent4.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "7") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>7</b>";
            newtd1a.innerHTML = '<b>Pendent</b> <br /> <img src="images/products/jewelry/pendent6.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$400.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (400.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (400.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "3") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>3</b>";
            newtd1a.innerHTML = '<b>Snow Rabbit Slippers</b> <br /> <img src="images/products/footwear/slipper2.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$150.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (150.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (150.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "9") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>9</b>";
            newtd1a.innerHTML = '<b>Wood Carving 1</b> <br /> <img src="images/products/artsCrafts/craft5.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (500.00 * parseInt(cookie_val[1]));
        }
        else if (cookie_val[0] === "10") {
            var newrow1 = document.getElementById("table").insertRow(0);
            var newtd0a = newrow1.insertCell(-1);
            newtd0a.align = "center";
            newtd0a.width = 100;
            var newtd1a = newrow1.insertCell(-1);
            newtd1a.align = "center";
            var newtd2a = newrow1.insertCell(-1);
            newtd2a.align = "center";
            var newtd3a = newrow1.insertCell(-1);
            newtd3a.align = "center";
            var newtd4a = newrow1.insertCell(-1);
            newtd4a.align = "center";
            newtd0a.innerHTML = "<b>10</b>";
            newtd1a.innerHTML = '<b>Wood Carving 2</b> <br /> <img src="images/products/artsCrafts/craft7.jpg" width=80px height=80px /> <br /> <button type="button" onclick=remove(' + cookie_val + ')> Remove</button > ';
            newtd2a.innerHTML = "<b>$500.00</b>";
            newtd3a.innerHTML = "<b>" + cookie_val[1] + "</b>";
            newtd4a.innerHTML = "<b>$" + (1500.00 * parseInt(cookie_val[1])).toFixed(2) + "</b>";
            total = total + (1500.00 * parseInt(cookie_val[1]));
        }
    }
    // Table header
    var newrow = document.getElementById("table").insertRow(0);
    var newtd0 = newrow.insertCell(-1);
    newtd0.align = "center";
    newtd0.width = 100;
    var newtd1 = newrow.insertCell(-1);
    newtd1.align = "center";
    var newtd2 = newrow.insertCell(-1);
    newtd2.align = "center";
    var newtd3 = newrow.insertCell(-1);
    newtd3.align = "center";
    var newtd4 = newrow.insertCell(-1);
    newtd4.align = "center";
    newtd0.innerHTML = "<b>Catalog #</b>";
    newtd1.innerHTML = "<b>Item</b>";
    newtd2.innerHTML = "<b>Price</b>";
    newtd3.innerHTML = "<b>Quantity</b>";
    newtd4.innerHTML = "<b>Total</b>";
    // Table bottom
    var row = document.getElementById("table").insertRow(-1);
    var td0 = row.insertCell(-1);
    td0.align = "center";
    td0.width = 100;
    var td1 = row.insertCell(-1);
    td1.align = "right";
    td1.width = 100;
    td0.innerHTML = "<b>Total</b>"
    td1.innerHTML = "<b>$" + total.toFixed(2) + "</b>";
    document.createElement("td1");
    td1.setAttribute("colspan", "4");
}

// get cookie and output data to checkout.html
function loadCheckout() {
    //Unescape cookies - only necessary if used escape
    var my_cookies = unescape(document.cookie);
    //Split cookie up based on ;
    var cookie_array = my_cookies.split(";");
    if (cookie_array[0] == "XDEBUG_SESSION=test") {
        var cookie_val = cookie_array[1].split(",");
        var newrow = document.getElementById("table").insertRow(0);
        var newtd0 = newrow.insertCell(-1);
        newtd0.align = "center";
        newtd0.width = 100;
        newtd0.innerHTML = "<img src=" + cookie_val[2] + ">";
        var newrow1 = document.getElementById("table").insertRow(1);
        var newtd1a = newrow1.insertCell(-1);
        newtd1a.align = "center";
        var item = cookie_val[0].split("=");
        newtd1a.innerHTML = "<h1 style='font-size: 200 %'>" + item[0] + "</h1>";
        var newrow2 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow2.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %' name='quantity'>Quantity: " + cookie_val[1] + "</h2>";
        var newrow3 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow3.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %'>Price: $" + item[1] + "</h2>";
        var newrow4 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow4.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %'>Total: $" + (parseInt(item[1]) * parseInt(cookie_val[1])) + "</h2>";
    }
    else {
        var cookie_val = cookie_array[0].split(",");
        var newrow = document.getElementById("table").insertRow(0);
        var newtd0 = newrow.insertCell(-1);
        newtd0.align = "center";
        newtd0.width = 100;
        newtd0.innerHTML = "<img src=" + cookie_val[2] + ">";
        var newrow1 = document.getElementById("table").insertRow(1);
        var newtd1a = newrow1.insertCell(-1);
        newtd1a.align = "center";
        var item = cookie_val[0].split("=");
        newtd1a.innerHTML = "<h1 style='font-size: 200 %'>" + item[0] + "</h1>";
        var newrow2 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow2.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %'>Quantity: " + cookie_val[1] + "</h2>";
        var newrow3 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow3.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %'>Price: $" + item[1] + "</h2>";
        var newrow4 = document.getElementById("table").insertRow(-1);
        var newtd1a = newrow4.insertCell(-1);
        newtd1a.align = "center";
        newtd1a.innerHTML = "<h2 style='font-size: 200 %'>Total: $" + (parseInt(item[1]) * parseInt(cookie_val[1])) + "</h2>";
    }
}

var pics = new Array(10);
pics[0] = "images/home/0.jpg";
pics[1] = "images/home/1.jpg";
pics[2] = "images/home/2.jpg";
pics[3] = "images/home/3.jpg";
pics[4] = "images/home/4.jpg";
pics[5] = "images/home/5.jpg";
pics[6] = "images/home/6.jpg";
pics[7] = "images/home/7.jpg";
pics[8] = "images/home/8.jpg";
pics[9] = "images/home/9.jpg";

//Array for labels
var captions = new Array("Caribou Migration", "Caribou Crossing River", "Ceremonial Dress", "Family's Home ", "Scenic View", "Family Stove",
    "Summer Camp", "Wolf", "Winter Caribou Herd", "Spring Caribou");

var c = 0;
var timer = 0;

// slideshow for index.html
function cyclePics() {
    //Set pic
    document.getElementById("pic1").src = pics[c];

    //Set caption
    document.getElementById("caption1").innerHTML = captions[c];

    c += 1;

    //Reset 
    if (c % 10 == 0)
        c = 0;

    //Set time out
    timer = setTimeout("cyclePics()", 3000);
}