const app = require("./src/app");
const port=process.env.port || 8000;

const { DB_URI } = require("./src/config/config")
const mongoose = require("mongoose");
mongoose.connect(DB_URI)
.then(result=>{
  console.log(result);
  console.log("connected to mongoDB successfully");
})
.catch(err=>{
  console.log(err);
  console.log("unable to connect to mongoDb");
});


app.listen(port, () => {
  console.log(`running on port ${port}`);
  console.log("--------------------------");
});
