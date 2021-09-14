//Importing packages
const express = require('express'); 
const cors = require('cors');
const knex = require('knex');

const select = require('./controllers/select');
const add = require('./controllers/add');

const db = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'carlholmquist',
      password : '4085',
      database : 'Inventory-app'
    }
});

console.log(db);

const app = express();//Initiallizing express as app
app.use(express.json());//Dont know what this does
app.use(cors());//Enable cors

app.get('/', (req,res) => {})
app.get('/signin', (req,res) => {
    res.send('Hello Please sign in')
})

app.get('/products', (req,res) => {select.handleProductsreq(req,res,db)})
app.post('/addproduct', (req,res) => {add.handleProductadd(req,res,db)})


app.listen( 3500 ,() => {
    console.log(`App is running on port ${process.env.PORT}`); //Somewhy port undefined?
}) //Starts server, listening on port 3000