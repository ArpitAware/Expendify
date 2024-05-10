const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
  `mongodb+srv://arpitaware65:Erawa1234@cluster0.shiqxp7.mongodb.net/ExpenseTracker`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))