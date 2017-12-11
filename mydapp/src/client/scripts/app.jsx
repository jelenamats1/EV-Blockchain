import React from 'react';
import {bonds, formatBlockNumber, formatBalance} from 'oo7-parity';
import {Bond, TimeBond} from 'oo7';
import {InputBond, HashBond, BButton, TransactionProgressLabel} from 'parity-reactive-ui';
import {Rspan, Rimg, ReactiveComponent} from 'oo7-react';


const EVProfileABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_option",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasVoted",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "votes",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "who",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "option",
        "type": "uint256"
      }
    ],
    "name": "Voted",
    "type": "event"
  }
];

const Options = ['Red', 'Green', 'Blue'];

export class App extends React.Component {
	constructor () {
		super();
		this.aggregator = bonds.makeContract('0x4dF0e816F96CF064721289a7B04D85c3B9016891', EVProfileABI);
		this.state = { tx: null };
	}
	render () {
	return (
		<div>
		<Rspan>{bonds.height}</Rspan>
		<br />
		<BButton
		content='Register'
		onClick={() => this.aggregator.registerProfile()}
		/>
		
	</div>
);
}
}


