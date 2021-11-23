const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('pages/index');
});

app.get('/about', (req,res)=>{
    res.send({
        status : "Ok",
        message: "Ini adalah halaman About yang ditampilkan dalam format Json",
    })
})





app.listen(3000, () => console.log('Server Berjalan pada : http://localhost:3000'));