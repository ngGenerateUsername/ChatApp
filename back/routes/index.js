var express = require('express');
var router = express.Router();
var Messages = require('./../models/Messages');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/messages/new',(req,res)=>{
  const dbMessage = req.body;

  Messages.create(dbMessage,(err, data)=>{
    if(err)
    return res.status(500).send(err);

    return res.status(201).send(data);
  })

})

module.exports = router;