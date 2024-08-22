const Block = require("./block");
class Blockchain {
    constructor() {
      this.chain = [Block.genesis];

    }

    addBlock(data){
        // Bloque anterior
        const previousBlock = this.chain[this.chain.length - 1];

        // minar nuevo bloque
        const block = Block.mine(previousBlock, data);
        this.chain.push(block);
        return block;
    }
}

module.exports = Blockchain;

