const UserModel = require('../Modals/User.modal')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const SignupController = async (req, res) => {
    const UserExists = await UserModel.exists({ email: req.body.email })
    if (UserExists === null) {
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            // Store hash in your password DB.
            UserModel.create({
                name:req.body.name,
                email:req.body.email,
                username: req.body.username,
                password: hash,
                profileUrl:req.body.profileUrl
            })
        });


        res.json({
            message: "Account Created Successfully",
            status: 200
        })

    } else {
        res.json({
            message: "Username Already exists ",
            status: 400
        })
    }
}

module.exports = SignupController