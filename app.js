const express = require ('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get ('/', (req , res) => {
    res.render('index')
});
app.get ('/ops/syntheticdowntime', (req , res) => {
    res.render('./ops/syntheticdowntime')
});

app.listen(8080,() => {
    console.log('listening on port 8080');
});