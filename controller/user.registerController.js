const RegisterModel = require("../Model/user.model");
const bcrypt = require('bcrypt');
const createUser = async (req, res) => {
    const { personalDetails: {
        name,
        email,
        dob,
        password,
        cpassword
    },
    authenticationDetails: {
        aadharCardNumber,
        panCardNumber
    }} = req.body;

    console.log(req.body);  
    console.log(password);
    console.log(email);
    console.log('Processing registration...');

    
    if (password !== cpassword) {
        return res.status(400).send('Password mismatch');
    }

    
    try {
        var saltround =10;
        console.log(password);
        console.log(email);

        const hash = await bcrypt.hash(password, saltround);

        
        const user = new RegisterModel({
            personalDetails: {
                name:name,
                email:email,
                dob:dob,
                password:hash
            },
            authenticationDetails: {
                aadharCardNumber: aadharCardNumber,
                panCardNumber: panCardNumber
            }
            
           

        });

        await user.save();
        res.send('Register Successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during registration');
    }
};

module.exports = { createUser };