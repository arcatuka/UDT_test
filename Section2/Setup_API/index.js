const express = require('express');
const app = express();
const port = 3000;
const mongoose= require('mongoose')
const adminRouter = require('./router/admin.router')
const agencyRouter = require('./router/agency.router')
const customerRouter = require('./router/customer.router')


app.use(express.json())

app.use('/admin',adminRouter)
app.use('/agency',agencyRouter)
app.use('/customer',customerRouter)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
mongoose.connect('mongodb+srv://TK:Tuka1803@cluster0.ksj7qqk.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open',function(){
  console.log('we are connected!')
})