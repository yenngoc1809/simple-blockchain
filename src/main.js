'use strict';
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Tạo cặp khóa
const myKey = ec.genKeyPair();
const myWalletAddress = myKey.getPublic('hex');

// Tạo instance của lớp Blockchain
const savjeeCoin = new Blockchain();

// Khai thác khối đầu tiên
console.log('Start mining...');
savjeeCoin.minePendingTransactions(myWalletAddress);

// Tạo và thêm giao dịch
const tx1 = new Transaction(myWalletAddress, 'address2', 40);
tx1.sign(myKey); // Ký giao dịch
savjeeCoin.addTransaction(tx1);

// Tạo và thêm giao dịch
const tx2 = new Transaction(myWalletAddress, 'address3', 30);
tx2.sign(myKey); // Ký giao dịch
savjeeCoin.addTransaction(tx2);

// Khai thác khối để bao gồm giao dịch
console.log('Start mining again...');
savjeeCoin.minePendingTransactions(myWalletAddress);

// Kiểm tra số dưcl
console.log();
console.log('Balance of block is', savjeeCoin.getBalanceOfAddress(myWalletAddress));


savjeeCoin.chain[1].transactions[0].amount = 1;



// // Kiểm tra tính hợp lệ của blockchain
console.log();
console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');
