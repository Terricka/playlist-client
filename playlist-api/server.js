const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const dbConfig = {
user: "SA",
password: "IllM@tic08",
server: "localhost",
database: "PlaylistApp", "options": {
    "encrypt": true,
    "enableArithAbort": true
    }, pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }}

const app = express();

var corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// // sync database
// const db = require("./models");
// db.sequelize.sync();
// // to drop and re-sync database run code below
// // db.sequelize.sync({ force: true }).then(() => {
// //     console.log("Drop and re-sync db.");
// //   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Playlist application." });
});

//GET API
app.get("/api/v1/playlists", function(req , res){
	// getPlaylists().then(resp => {
    //     res.send(resp)
    // })

    console.log('getting')
    var dbConn = new sql.ConnectionPool(dbConfig);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from playlists").then(function (resp) {
            console.log(resp, 'here');
            dbConn.close();
            res.send(resp.recordset)
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});
function getPlaylists() {
   
}

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});