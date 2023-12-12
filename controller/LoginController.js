const UserModel = require('../Modals/User.modal')
const bcrypt = require('bcrypt');


const LoginController = async (req, res) => {
    const UserExists = await UserModel.exists({ email: req.body.email })
    if (UserExists === null) {
        res.json({
            message: "User not exists",
            status: 400
        })
        

    } else {
        const UserData = await UserModel.findById(UserExists._id)
        console.log(UserData);
        bcrypt.compare(req.body.password, UserData.password, function(err, result) {
            // result == true
            if (result===true) {
                res.json({
                    message: "Logged Successful",
                    status: 200
                })
            } else {
                res.json({
                    message: "Password mis-matched",
                    status: 400
                })
            }

            
        })


        
    }
}

module.exports = LoginController