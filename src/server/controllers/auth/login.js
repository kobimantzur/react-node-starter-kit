const router = require("express").Router();

router.get('/login', (req, res) => {
    res.send("success");
})

module.exports = router;
