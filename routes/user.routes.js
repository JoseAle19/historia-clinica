const { Router }= require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.send('Hello World')
})
// TODO: falta el update y el delete

module.exports  = router;