const express = require("express");
const app = express();
const router = require("./index1");
app.use("/api",router);

app.listen(3000,()=>{
    console.log(`server is listening on http://localhost:3000`);
});