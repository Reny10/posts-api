const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute=require('./routes/posts');

//Middleware
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res)=>{res.send ('home');  });

mongoose.connect (
	process.env.DB_CONNECTION,
 {useNewUrlParser:true, useUnifiedTopology: true },
 ()=>console.log('connected to DB')
 );

app.listen(3000);





