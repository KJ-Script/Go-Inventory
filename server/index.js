const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express()

app.use(bodyParser.urlencoded({extended: true,}));
app.use(cors());
app.use(bodyParser.json());

//creating a database connectiong
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "go-inventory",
  });


//register api
app.post("/createaccount", (req, res) => {

    const fullName = req.body.fullName
    const companyName = req.body.companyName
    const companyEmail = req.body.email
    const password = req.body.password

    let post = {
      fullName: fullName,
      companyName: companyName,
      email: companyEmail,
      password: password,
    };
    const query = connection.query(
      "INSERT INTO users SET ?",
      post,
       (error, results) => {
        if (error) {
            throw error.code;
        } else if (results) {
            console.log(query.sql)
            res.send("Account Created")
        } else {
            console.log("something weird is going on")
        }
      }
    );
  });



app.post("/login", (req, response) => {
    const companyName = req.body.companyName;
    const password = req.body.password;
  
    const query = connection.query(
      `SELECT * FROM users WHERE companyName="${companyName}"`,
      function (err, result) {
        if (err) throw err;

        if (result.length > 0) {
          for (let count = 0; count < result.length; count++) {
            if (result[count].password == password) {
              let data = {
                id: result[0].id,
                status: 200,
              }
              console.log("result:::::", data)
              response.send(data);
            } else {
              response.send("Incorrect Password");
            }
          }
        } else {
          response.send("Invalid username");
        }
        response.end();
      }
    );
  });
  

  //create a Quotation

  app.post("/createQuotation", (req, res) => {

    const user_id = req.body.userId
    const storageType = req.body.storageType
    const productType = req.body.productType
    const storageState = req.body.storageState
    const storageLocation = req.body.storageLocation
    

    let post = {
      user_id: user_id,
      storageType: storageType,
      productType: productType,
      storageState: storageState,
      storageLocation: storageLocation,
    };

    console.log("Big Posts", post);

    const query = connection.query(
      "INSERT INTO quotations SET ?",
      post,
       (error, results) => {
        if (error) {
            throw error.code;
        } else if (results) {
            res.send("Quotation Created")
        } else {
            console.log("something weird is going on")
        }
      }
    );
  });



  app.post('/getQuotationById', (req, res) => {
    const user_id = req.body.userId
    console.log("userId", user_id)

    const query = connection.query(`SELECT * FROM quotations WHERE user_id="${user_id}"`, (err, result) => {
      if(err) throw err;
      res.json(result)
      console.log('specific data:', result)
    })
    // res.send("Data retrieved")
  })

//listens on port
app.listen(8080, function () {
    console.log("app listening on port 8080!");
  });