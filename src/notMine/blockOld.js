const SHA256 = require(`crypto-js/sha256`);
const hex2ascii = require("hex2ascii");

class Block {
  constructor(data) {
    this.hash = null;
    this.height = 0;
    this.body = Buffer.from(JSON.stringify(data).toString("hex"));
    this.time = 0;
    this.previousBlockHash = null;
  }

  // validamos que el bloque es correcto (no ha sido manipulado)
  validate() {
    const self = this;
    return new Promise((resolve, reject) => {
      // guardamos el hash actual
      let currentHash = self.hash;

      // hash    que agregamos
      self.hash = SHA256(JSON.stringify({ ...self, hash: null })).toString();

      if (currentHash !== self.hash) {
        return resolve(false);
      }
      resolve(true);
    });
  }
 
  // decodificación
  getBlockDatta() {
    const self = this;
    return new Promise((resolve, reject) => {
      let encodedData = self.body; // codigo hexadecimal
      let decodedData = hex2ascii(encodedData); // se crea un textolargo que contiene el objeto
      let dataObject = JSON.parse(decodedData); // objeto propio de js

      if (dataObject === "Genesis Block") {
        reject(new Error("This is the genesis block"));
      }
      resolve(dataObject);
    });
  }

  toString() {
    const { hash, height, body, time, previousBlockHash } = this;
    return `Block -
        hash : ${hash}
        height: ${height}
        body: ${body}
        time: ${time}
        previusBlockHash: ${previousBlockHash}
         -----------------------------------------------`;
  }
}

module.exports = Block;
