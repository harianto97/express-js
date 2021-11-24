const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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


app.listen(port, () => console.log(`Server berjalan pada port ${port}`));