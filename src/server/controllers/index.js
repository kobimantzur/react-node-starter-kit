const router = require("express").Router();

router.use("/auth", require('./auth'))
router.use('/one-pager', require('./one-pager'))

module.exports = router;
