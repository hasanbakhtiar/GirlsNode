const auth = async (req, res, next) => {
    try {
        if (req.headers.mykey == 1) {
            next();
        } else {
            return res.status(401).json({
                message: "no permisson"
            })
        }
    } catch (error) {
        console.log(error);

    }
}

module.exports = { auth };