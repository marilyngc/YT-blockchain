const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

async function run() {
    const blockchain = new Blockchain();

    // generamos bloques
    const block1 = new Block({data: "Block #1"});
    const block2 = new Block({data: "Block #2"});
    const block3 = new Block({data: "Block #3"});

    // Agrega en la blockchain
    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);

    
    blockchain.print();
    
}

run();