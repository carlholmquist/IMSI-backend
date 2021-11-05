//Importing packages
const express = require('express'); 
const cors = require('cors');
const knex = require('knex');

const select = require('./controllers/select');
const add = require('./controllers/add');
const categorys = require('./controllers/categorys')
const quantity = require('./controllers/quantity');
const itemInfo = require('./controllers/iteminfo');
const moveItem = require('./controllers/moveItem');
const joborders = require('./controllers/joborders');
const addrun = require('./controllers/addrun');
const runid = require('./controllers/runid');

const db = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'carlholmquist',
      password : '4085',
      database : 'Inventory-app'
    }
});

const app = express();//Initiallizing express as app
app.use(express.json());//Dont know what this does
app.use(cors());//Enable cors

app.get('/', (req,res) => {})
app.get('/signin', (req,res) => {
    res.send('Hello Please sign in')
})

app.get('/products', (req,res) => {select.handleProductsreq(req,res,db)})
app.get('/categorys',(req,res) => {categorys.handleCategorysreq(req,res,db)})
app.get('/joborders', (req,res) => {joborders.handleJobordersreq(req,res,db)})

app.post('/addproduct', (req,res) => {add.handleProductadd(req,res,db)})
app.post('/quantity', (req,res) => {quantity.handleQuantity(req,res,db)})
app.post('/iteminfo',(req,res) => {itemInfo.handleItemreq(req,res,db)})
app.post('/moveitem', (req,res) => {moveItem.handleMoveItem(req,res,db)})
app.post ('/addrun', (req,res) => {addrun.handleAddrun(req,res,db)})
app.post('/runid', (req,res) => {runid.handleGetrun(req,res,db)})


app.get('/locations', (req,res) => {
    db.select('location_id').from('locations').then(locations => res.json(locations));
})

app.listen( 3500 ,() => {
    console.log(`App is running on port ${process.env.PORT}`); //Somewhy port undefined?
}) //Starts server, listening on port 3000