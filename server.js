//Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
//var budget = require('./Kritika.json');
app.use(cors());


//app.use('/', express.static('public')); 

const budget ={
    myBudget: [
    {
        title: 'rent',
        budget: 400
    },

    {
        title: 'groceries',
        budget: 80
    },
    {
        title: 'shopping',
        budget: 200
    },
    {
        title: 'Beauty & wellness',
        budget: 150
    },
    {
        title: 'Dine in',
        budget: 100
    },
    {
        title: 'Travel',
        budget: 80
    },
    {
        title: 'Education',
        budget: 100
    }
]
}; 



/*app.get('/kkk', (req, res) => {
    res.send('Hello World!');

}); */


app.get('/budget', (req, res) => {
res.json(budget);
});



app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
}); 




