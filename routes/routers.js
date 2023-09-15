const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('')
})

router.get('/login', (req, res) => {
    res.render('');
});

router.get("/signup",(req,res)=>{
    res.render('')
})

module.exports=router