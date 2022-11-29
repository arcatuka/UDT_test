const express = require('express');
const app = express();
const port = 3000;
const mongoose= require('mongoose')
const adminRouter = require('./router/admin.router')


app.use(express.json())

app.use('/admin',adminRouter)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
mongoose.connect('mongodb+srv://TK:Tuka1803@cluster0.ksj7qqk.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open',function(){
  console.log('we are connected!')
})