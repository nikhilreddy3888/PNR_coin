const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8d416caa6dd3f97b59232490d8d30e79484a84f3e1006b22940fef70b5be26ac');
const myWalletAddress = myKey.getPublic('hex');

let PNR_Coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
PNR_Coin.addTransaction(tx1);

console.log('\n starting the miner...');
PNR_Coin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of my wallet is', PNR_Coin.getBalanceOfAddress(myWalletAddress));

console.log('Is valid ', PNR_Coin.isChainValid());