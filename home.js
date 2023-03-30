// data = [{ name: "vikas" }, { age: 20 }, [{ a: "name" }], [{ b: "hello" }]]

// let emp = []
// let result = data.reduce((acc, val) =>{
//     acc.push(val);
//     emp.concat(acc)
//     return emp
// }, []);

// console.log(emp);



// console.log(1);
// setImmediate(()=>{
//     console.log(2);
// })
// setTimeout(()=>{
//     console.log(3);
// })
// process.nextTick(()=>{
//     console.log(4);
// })
// setTimeout(() => {
//     console.log('3');
// });
// setImmediate(() => {
//     console.log('2');
// });
// console.log('1');

// const greet = require("./index1");
// greet("virendra");
// greet();
// console.log(greet.name,greet.lname);
// const express = require("express");
// const router = express.Router();

// router.get("/home",(req,res,next)=>{
//       res.send("this is virendra hello page.");
// });

// router.get("/login",(req,res,next)=>{
//     res.send("this is virendra login page.")
// });

// module.exports = router;    

const sum = (req,res,next)=>{
    res.send("this is sum 2")
}

const sub = (req,res,next)=>{
    res.send("this is sub 2")
}

const div = (req,res,next)=>{
    res.send("this is div 2");
}

const mult = (req,res,next)=>{
    res.send("this is mult 2")
}

module.exports = {sum,sub,div,mult};