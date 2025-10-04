# Simple Blockchain in Node.js

This project is a **basic blockchain implementation in JavaScript (Node.js)**.
It demonstrates how transactions, digital signatures, hashing, mining, and chain validation work in a simplified cryptocurrency model.

---

## ✨ Features

* **Transaction class** with SHA256 hashing and ECDSA signatures.
* **Block class** with proof-of-work mining (`difficulty`).
* **Blockchain class** with:

  * Genesis block creation
  * Mining rewards
  * Transaction validation and balance checking
  * Full chain validation
* Example script (`main.js`) showing how to create wallets, sign transactions, and mine blocks.

---

## 📂 Project Structure

```
├── node_modules/
├── src/
│   ├── blockchain.js   # Blockchain, Block, Transaction classes
│   └── main.js         # Example usage
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Run

### 1. Clone the repository

```bash
git clone https://github.com/yenngoc1809/simple-blockchain.git
cd simple-blockchain
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the example

```bash
node src/main.js
```

---

## 📚 Dependencies

* [crypto-js](https://www.npmjs.com/package/crypto-js) — Hashing (SHA256)
* [elliptic](https://www.npmjs.com/package/elliptic) — ECDSA digital signatures
* [debug](https://www.npmjs.com/package/debug) — Debug logging

---

## 🚀 Quick Example Code

Below is a simplified demo from `main.js`:

```js
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate keys
const myKey = ec.genKeyPair();
const myWalletAddress = myKey.getPublic('hex');

// Create blockchain instance
let yenCoin = new Blockchain();

// Create and sign transaction
const tx1 = new Transaction(myWalletAddress, 'recipient-public-key', 50);
tx1.signTransaction(myKey);
yenCoin.addTransaction(tx1);

// Start mining
console.log('Start mining...');
yenCoin.minePendingTransactions(myWalletAddress);

// Check balance
console.log(`Balance of my wallet is ${yenCoin.getBalanceOfAddress(myWalletAddress)}`);

// Validate chain
console.log('Blockchain valid?', yenCoin.isChainValid());
```

---

## 🖥️ Example Output

```
Start mining...
Block mined: 00a1f...
Nonce: 1234
Block successfully mined!

Start mining again...
Block mined: 004b2...
Balance of my wallet is 100
Blockchain valid? true
```

---

## 🔮 Future Improvements

* Add persistence (save/load blockchain from disk).
* Implement P2P networking for multiple nodes.
* Add transaction fees and adjustable difficulty.
* Build a CLI wallet or simple web interface.

---

## 📝 License

This project is for **educational purposes only**.
Do not use it for production cryptocurrencies.
Released under the MIT License.
