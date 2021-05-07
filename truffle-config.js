const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const secrets = JSON.parse(fs.readFileSync('.secrets').toString().trim());

module.exports = {
    networks: {
        ropsten: {
            provider: () => 
                new HDWalletProvider(
                  secrets.seed,
                    `https://ropsten.infura.io/v3/${secrets.projectId}`
            ),
            network_id: 3
        }
    }
};


//seed words--> lecture swap during survey purse okay police crop make response cloud tuna