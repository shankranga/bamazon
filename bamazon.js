var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require("cli-table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "lockdee23",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayItems();
});

//show items
function displayItems() {
    connection.query("SELECT * FROM products", function (error, response) {
        if (error) {
            console.log(error);
        }
        var displayTable = new Table({
            head: ["item id", "product", "department", "price", "stock"],
            colWidths: [10, 30, 18, 10, 14]
        });

        for (i = 0; i < response.length; i++) {
            displayTable.push(
                [response[i].id, response[i].product, response[i].department, response[i].price, response[i].stock]
            );
        }
        //log table to console
        console.log(displayTable.toString());
        //run next function
        purchaseFunction();

    })
};

function purchaseFunction() {
    inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "What is the number of the Item you would like to Purchase?"
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many would you like to purchase?"


        },


    ]).then(function (answers) {
        var quantityWanted = answers.Quantity;
        var itemDesired = answers.ID;
        databasePurchased(itemDesired, quantityWanted);


    });
};

function databasePurchased(ID, quantityWanted) {
    connection.query("SELECT * FROM products WHERE id = " + ID, function (error, response) {
        if (error) {
            console.log(error)
        };
        //if stock is good
        if (quantityWanted <= response[0].stock) {
            var total = response[0].price * quantityWanted;
            console.log("Your order has been placed and will be delivered in 2-3 business days!")
            console.log("The total cost for " + quantityWanted + " " + response[0].product + "is" + total + " If your total doesn't look right please contact customer service");
            //database Update
            connection.query("UPDATE products SET stock = stock - " + quantityWanted + 'WHERE id = ' + ID);
        } else {
            console.log("We do not have enough of" + response[0].product + "to complete your order.");
        };

    });
};