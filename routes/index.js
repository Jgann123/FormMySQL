var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!' ,
  port: '3030',
  database: 'leads', 
  tableName: 'pwa_leads'
});
 
connection.connect(
  function(err){
      if(err){
        console.error(err.message)
      }
      console.log('YAY! you are now connected to the database!')
    })
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/leads', function(req, res, next) {
  res.render('leads');
});

module.exports = router;
router.post('/leads', function(req, res, next) {
  console.log(req.body);
  const newlead = { 
    first_name: req.body.first_name,
    last_name: req.body.last_name
    
  };

}); 

router.post('/leadsSubmit', function(req, res) {

 
  connection.query("Insert into pwa_leads (event_id,first_name,last_name,phone,email,appt_date,appt_time) VALUES ('"+req.body.event_id+"','"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.phone+"','"+req.body.email+"','"+req.body.appt_date+"','"+req.body.appt_time+"')",function(err, result)      
  {                                                      
    if (err)
       throw err;
  });
  });
 var app = require('http');










  