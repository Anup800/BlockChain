
const BlockChain = require('./index');
const Block =require('./block')


describe('Index' , ()=>{
    let bc,bc2;
    beforeEach(()=>{
        bc =  new BlockChain();
        bc2 = new BlockChain();
    });

    it('starts with genesis block',()=>{
        expect(bc.chain[0]).toEqual(Block.genesis());

    });

    it('checking last block',()=> {
        const data = 'hey';
        bc = new BlockChain();
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual('hey');
    });
    it('checking chain validation',()=>{
        
        bc2.addBlock('blo');
        
        
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
});