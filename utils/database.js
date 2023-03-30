const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// const dotenv = require('dotenv');
// dotenv.config({ path: ".env" });
console.log(`connecting to database`);
// console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
).then(() => {
  console.log(`Connected successfully`,
    process.env.MONGO_URI)
}
).catch((err) => { console.log(`ERROR${err}`); });