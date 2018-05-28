var nodemailer = require('nodemailer');
const args = process.argv;
//console.log(args);

if (args.length < 4) {

   console.error("You need to pass the user and password");
   return ;
}

let user = args[2];
let pass = args[3];


// Create the transporter with the required configuration for Gmail
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: user,
        pass: pass
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: `"Our Code World " <${user}>`, // sender address (who sends)
    to: 'merighifacundo@gmail.com, facundo.merighi@gitbetter.io', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
