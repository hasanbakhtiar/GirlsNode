const  jwt  = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ message: "You do not have authority" })
        } else {
            const decodedToken = jwt.verify(token, "jwtPrivateKey")
            req.user = decodedToken;
            next();
        }
    } catch (error) {
        console.log(error);

    }


}

module.exports = { auth };