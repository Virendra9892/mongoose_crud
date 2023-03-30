const express = require("express");
const router4 = express.Router();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const {sum,sub,mult,div} = require("./home")
// router.get("/",(req,res,next)=>{
//     res.send('this is login page');
// });

router4.get("/sum",sum);
router1.get("/sub",sub);
router2.get("/mult",mult);
router3.get("/div",div)

module.exports = {router4,router1,router2,router3};