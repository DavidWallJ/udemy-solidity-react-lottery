import Web3 from 'web3';
// lecture 88 / 89
// this allows us to user our version of 'web3'
// instead of the older version used by metamask
const web3 = new Web3(window.web3.currentProvider);

export default web3;