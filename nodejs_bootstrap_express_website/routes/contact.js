var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'franko.gen@gmail.com',
            pass: 'asdsa'
        }
    });
    var mailOptions={
        from: 'John <sjadnasd@gmail.com>',
        to: '<franko.gen@gmail.com>',
        subiect: 'website submition',
        text: 'You have a new submition on a following details: Name: '+req.body.name+' email: '+req.body.email+' message: '+req.body.message,
        html: '<p>You have a new submition on a following details: <ul><li>Name: '+req.body.name+'</li><li>email: '+req.body.email+'</li><li>message: '+req.body.message+'</li></ul></p>'
        
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            console.log(error);
            res.redirect('/');
        }
        else{
            console.log('Message sent'+info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;