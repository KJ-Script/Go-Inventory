const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

const salt = 10;
//creating a database connectiong
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "go-inventory",
});

//register api
app.post("/createaccount", (req, res) => {
  const fullName = req.body.fullName;
  const companyName = req.body.companyName;
  const companyEmail = req.body.email;
  const password = req.body.password;

  //hashing the password
  bcrypt.hash(password.toString(), salt, (err, hash) => {
    if (err) return res.json({ title: "hashing Error", error: err });
    let post = {
      fullName: fullName,
      companyName: companyName, 
      email: companyEmail,
      password: hash,
    };

    connection.query("INSERT INTO users SET ?", post, (error, results) => {
      if (error) {
        throw error;
      } 
      if (results) {
        console.log("created");
        res.send("Account Created");
      } else {
        console.log("something weird is going on");
      }
    });
  });
});

app.post("/login", (req, res) => {
  const companyName = req.body.companyName;
  const password = req.body.password;

  const query = connection.query(
    `SELECT * FROM users WHERE companyName="${companyName}"`,
    (err, result) => {
      if (err) return res.json({ title: "fetching error", error: err });

      if (result.length > 0) {
        bcrypt.compare(
          password.toString(),
          result[0].password,
          (err, response) => {
            if (err) {
              return res.json({ title: "hashing Error", error: err });
            }

            if (response) {
              console.log("Response: ", response);
              const token = jwt.sign({ id: result[0].id }, "secretKey", {
                expiresIn: "1d",
              });
              res.cookie(token);
              return res.json({ status: 200, id: result[0].id });
            } else {
              return res.json({ Error: "Success" });
            }
          }
        );
        console.log("Raw-Result", result);
      } else {
        res.send({ Error: "Invalid Company name or Password" });
      }
    }
  ); 
});

//create a Quotation

app.post("/createQuotation", (req, res) => {
  const user_id = req.body.userId;
  const storageType = req.body.storageType;
  const productType = req.body.productType;
  const storageState = req.body.storageState;
  const storageLocation = req.body.storageLocation;

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
        res.send("Quotation Created");
      } else {
        console.log("something weird is going on");
      }
    }
  );
});

app.post("/addstore", (req, res) => {
  const storeData = req.body.formData
  console.log(storeData)
  let post = {
    location: storeData.location,
    size: storeData.size,
    pallet: storeData.pallets,
    product: storeData.product
  }

  const query = connection.query(
    "INSERT INTO warehouse SET ?",
    post,
    (error, results) => {
      if (error) {
        throw error;
      } else if (results) {
        res.send("store Created");
      } else {
        console.log("something weird is going on");
      }
    }
  );
})


app.get("/getproduct",  (req, res) => {
const query = connection.query(
  `SELECT * FROM product`,
  (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("specific data:", result);
  });
})

app.get("/getstore",  (req, res) => {
  const query = connection.query(
    `SELECT * FROM warehouse`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("specific data:", result);
    });
  })

  app.get("/getstate",  (req, res) => {
    const query = connection.query( 
      `SELECT * FROM state`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
        console.log("specific data:", result);
      });
    })

app.post("/addproduct", (req, res) => {
  const storeData = req.body.formData
  console.log(storeData)
  let post = {
    name: storeData.name,
    description: storeData.description
  }

  const query = connection.query(
    "INSERT INTO product SET ?",
    post,
    (error, results) => {
      if (error) {
        throw error;
      } else if (results) {
        res.send("store Created");
      } else {
        console.log("something weird is going on");
      }
    }
  );
})

app.post("/addstate", (req, res) => {
  const storeData = req.body.formData
  console.log(storeData)
  let post = {
    name: storeData.name,
    description: storeData.description
  }

  const query = connection.query(
    "INSERT INTO state SET ?",
    post,
    (error, results) => {
      if (error) {
        throw error;
      } else if (results) {
        res.send("store Created");
      } else {
        console.log("something weird is going on");
      }
    }
  );
})


app.post("/getQuotationById", (req, res) => {
  const user_id = req.body.userId;
  console.log("userId", user_id);

  const query = connection.query(
    `SELECT * FROM quotations WHERE user_id="${user_id}"`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("specific data:", result);
    }
  );
  // res.send("Data retrieved")
});

//gets users
app.get("/getusers",  (req, res) => {
  const query = connection.query(
    `SELECT * FROM users`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("specific data:", result);
    });
  })

  //get 

  app.get("/getquotations",  (req, res) => {
    const query = connection.query(
      `SELECT * FROM quotations`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
        console.log("specific data:", result);
      });
    })

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `DELETE FROM quotations WHERE q_id="${id}"`,
    (err, result) => {
      if (err) return err.code;
      return res.json({ Result: result });
    }
  );
});

//listens on port
app.listen(8080, function () {
  console.log("app listening on port 8080!");
});
