
const express = require("express");
const router = express.Router();
const authCon = require('../Controller/index')



router.post('/signup',authCon.authsignup)
router.post('/postdata',authCon.authPostdata)





module.exports = router