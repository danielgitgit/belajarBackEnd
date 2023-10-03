const express = require("express");
const mysql = require ('mysql2');
// const axios = require("axios");
const app = express();
// const PORT = 8000;

const db = mysql.createConnection({

  host : 'localhost',
  user :'root',
  password : 'adminmySQL',
  database :'datamurid',
  port : 3306

})

db.connect((err)=>{
  if(err)console.log(err)
  else console.log('mysql connect')
})

const queryString = 'SELECT * FROM studeninfo ORDER BY id DESC';

db.query(queryString,(err,result)=>{
  if(err) return res.status(500).send({message:err.message})
  console.log(result)
});

// app.use(express.json());

// app.get("/api/expenses", async (req, res) => {
//   const expenses = await axios.get("http://localhost:4400/expense-list");

//   return res.status(200).send({
//     status: 200,
//     message: "expenses succesfully patched",
//     data: expenses.data,
//   });
// });

// app.put("/api/expensesadd", async (req, res) => {
//   const { name, nominal, category, date } = req.body;

//   const expenses = await axios.post("http://localhost:4400/expense-list", {
//     name: name,
//     nominal: nominal,
//     category: category,
//     date: date,
//   });

//   return res.status(201).send({
//     status: 201,
//     message: "item succesfully added",
//     data: expenses.data,
//   });
// });

// app.put("/api/expensesedit/:id", async (req, res) => {

//     const {id }=req.params;
//     const {name, nominal, category, date} =req.body;
//     const {method} = req.method;

//     const expenses = await axios.put("http://localhost:4400/expense-list/"+id,{
//         name : name,
//         nominal : nominal,
//         category : category,
//         date : date
//     });

// return res.status(202).send({
//     status : 202,
//     method : method,
//     message : "data succesfully edited",
//     data : expenses.data
// })



// });

// app.delete("/api/expensesdelete/:id", async (req, res) => {

//     const {id} =req.params;
//     const {name, nominal, category, date} =req.body;
//     const {method} = req.method;


//     const expensesGetData = await axios.get("http://localhost:4400/expense-list/"+id);
//     const expensesDelete = await axios.delete("http://localhost:4400/expense-list/"+id);
//     const deletedData = expensesGetData.data;

//     return res.status(204).send({
//         status : 204,
//         //method : method,
//         message : "item deleted",
//         data : {id, deletedData }
//     })
// });

// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });
