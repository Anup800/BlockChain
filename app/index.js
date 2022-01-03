const  Express = require('express');
const Blockchain = require('../blockchain');
const BodyParser = require('body-parser');

const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = new Express();
const bc  = new Blockchain();

app.use(BodyParser.json());


app.get('/blocks',(req,res)=>{
res.json(bc.chain);
});

app.post('/mine',(req,res)=>{
    const block = bc.addBlock(req.body.data);
    console.log(`new block added : ${block.toString()}`);
    res.redirect('/blocks');
});
app.listen(HTTP_PORT,()=>{console.log(`listening on port ${HTTP_PORT}`)});