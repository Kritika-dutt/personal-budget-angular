const express = require('express');
const app = express();
const port = 3000;
var budget = require('./Kritika.json');




app.use('/', express.static('public'));

/*const budget ={
    myBudget: [
    {
        title: 'Shopping',
        budget: 50
    },

    {
        title: 'rent',
        budget: 400
    },
    {
        title: 'groceries',
        budget: 80
    },

]
}; */



app.get('/kkk', (req, res) => {
    res.send('Hello World!');

});


app.get('/budget', (req, res) => {
res.json(budget);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 




