// module.exports = "hello world";
// module.exports = function greet(){
//     console.log("hello virendra good night");
// } 
// module.exports.sayname = "virendra patahk";
// module.exports = (name)=>{
//     console.log("hello",name);
// }
// module.exports = {
//     name:"virendra",
//     lname:"pathak"
// }

const express = require("express");
// const app = express();
const router = express.Router();

// const {router4,router1,router2,router3} = require("./login")
const routers = require("./login")

router.use("/",routers.router1);
router.use("/",routers.router2);
router.use("/",routers.router3);
router.use("/",routers.router4);
// app.use("/login",login)

// app.listen(3000,()=>{
//     console.log(`server is listening on http://localhost:3000`);
// })
module.exports = router;