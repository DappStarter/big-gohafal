require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender solution walk cost office collect coral light army gasp'; 
let testAccounts = [
"0x8cce1ed0795ab1568b4312c3a8c69d7a02038b10599d25e4489dbb2b7f92322f",
"0xd7b414e43a0ae78aab9d2c9baafbd4961d612bd98ead27d51c6968ea3f424cef",
"0x8c38f3241343310599be790d579346059f51cb012cbdc2a6738dea4b795455c9",
"0x5ff89e30383266bee5cf42eda86f79486881a933e3e79e94142175453dbff8f2",
"0x80768b69abef2d1013bdb0173df34a138d3f38b44a3de2e3f2d1a9649bf852b3",
"0x04dae48e19a8b5d0e7472c06ed9ceeee8f00a3076dbb8861b33e2175a6fdc56e",
"0x7798421a670d54567d4e32aaaf79c4ec2d890a02521ec20fce39ca75f96502f2",
"0x8f724d88d5bd287fe3e8a9ddb35deb160177892afa562c3e95e7821dc4713df1",
"0x9d1fdc9d468e142d4032c16ed266e6c6c7e1bfdfa9a9281ba967e84b9e811b04",
"0x9b3da006b27a4eda7b7372914895c9cdc6d14ed2ccdc0a62c609eb76cf02221a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
