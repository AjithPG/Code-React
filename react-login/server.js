const express = require("express"); // Import express
const cors = require("cors"); //import cros
const app = express(); // initialize a new app by calling express() and saving the result to a variable called app:
app.use(cors()); //add it to the application by calling the use method on app

//listen to the specific route
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
