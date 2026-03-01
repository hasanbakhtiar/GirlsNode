const isAdmin = function (req, res, next) {
    if (!(req.user.role === "admin")) {
        return res.status().json({
            message: "You do not have access permission!"
        })
    } else {
        next();
    }
}

module.exports = {isAdmin}
