const SHA256 = require(`crypto-js/sha256`);


// al crearse varios bloques, subimos la dificultad de rentalización
const DIFFICULTY = 3;
const MINE_RATE = 2000;

class Block{
    constructor(actualTime, previousHash, hash, data, nonce, difficulty){
        this.time = actualTime;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    static get genesis(){
        const time = new Date("2009-03-01").getTime();

        // nuevo bloque
        return new this(
            time,
            undefined,
            "genesis hash",
            "Genesis Block",
            0,
            DIFFICULTY
        );
    }

    static mine(previousBlock, data){
        const {hash:previousHash} = previousBlock;
        let {difficulty} = previousBlock;
        let hash;
        let time;
        let nonce = 0;

        do {
            time = Date.now();
            nonce +=1;
            difficulty = previousBlock.time + MINE_RATE > time ? difficulty + 1 : difficulty -1;
            hash = SHA256( previousHash + time + data + nonce + difficulty).toString();
            
        } while (hash.substring(0,difficulty) !== "0".repeat(difficulty));
        return new this(time, previousHash, hash, data, nonce, difficulty);
    }
    toString() {
        const {time, hash,previousHash, data, nonce, difficulty } = this;
        return ` ⛏️  ✨  Block -
            Time: ${time}
            Previus Hash: ${previousHash}
            Hash : ${hash}
            Data: ${data}
            Nonce: ${nonce}
            Difficulty: ${difficulty}   
             -----------------------------------------------`;
      }
}

module.exports = Block;
