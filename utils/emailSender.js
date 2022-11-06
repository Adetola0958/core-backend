import nodemailer from "nodemailer"

const sendMail = async (option) => {
    const email = emails.map(users => {
        return users.Email
    })
    console.log(emails)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.corestepmfb.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: { 
            user: "test@corestepmfb.com", // generated ethereal user
            pass: "coreserver22/24", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    // send mail with defined transport object
    let mailOptions = ({
        from: '"Test Contact" <test@corestepmfb.com>', // sender address
        //to: emails.toString(), // list of receivers
        subject: "Test Contact Message", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    email.forEach(function (to, i , array) {
            (function(i,to){
                mailOptions.to = to;
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                    console.log('Sending to ' + to + ' failed: ' + err);
                    return;
                } else { 
                    console.log('Sent to ' + to);
                    res.status(201).json({
                    message: 'Mail has been sent successfully',
                    status: 'ok',
                    })
                }
        
                if (i === email.length - 1) { mailOptions.transport.close(); }
            });
        })(i,to)
    });


    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error) {
    //         return console.log(error)
    //     }else{
    //         res.status(201).json({
    //             message: 'Mail has been sent successfully',
    //             status: 'ok',
    //         })
    //     }

    //     console.log("Message sent: %s", info.messageId);
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // })
}

export default sendMail