const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
let app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {
    })
    })

    let PORT = process.env.PORT || 3030;

app.listen(PORT, function(){

  console.log('App starting on port', PORT);
});
