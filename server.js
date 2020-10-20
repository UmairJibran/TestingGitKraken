const express = require("express"); //require express framework

const app = express(); //instatiating Express Application
const port = process.env.PORT || 8080; //providing available port or 8080 by default

app.get("/", (req, res) => {
   //looking for api call on main route
   res.status(200).send("Successful"); //displaying "Successful" to acknowledge it works
});

app.listen(port, (error) => {
   //listen on provided port
   if (error) return console.log(error); //console.log error if there is any
   console.log(`Listening on PORT ${port}`); //console.log that app is running on x port
});
