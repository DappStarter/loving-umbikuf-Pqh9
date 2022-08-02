require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rival remain essay hidden private metal gentle'; 
let testAccounts = [
"0x6be6b495d7ceb3c4d5c961898a6b1bb89d9939e4bfae3d21d9ccb425e823552d",
"0xdbe66bac62f9a6c8b820e91b9535f49fc4612a6a732ab13f24605b07aab4c102",
"0xa11acf8e36a8640318f59d650fe2d8571183b3ce78162eea194af782a416692d",
"0xa14db97bbfc4b20835f0ddb4f47865b71a44ab8d90bb3251dcd40d8fcc44659e",
"0x2e985c0ccda3169a8e8de7efd3698b5434b8ac4d42b61427b0d8c6339b48dfda",
"0x9a03f1de1009807734b83d30217da58f5504b6eccc546fc9da27bb2f040d2b61",
"0xf7bc268f4fa8c3b38190caa957c304fab3edb9bab9f105077e3926f2795b4a7e",
"0x4ac4ed956c2cb83b49f29cc1820f499460648f99e4116f183a8b573e85e6f920",
"0xd9112b5cd74ac61bc61bcccd589162689bd8958ecc77259cf0f17ebb761b6042",
"0x8446f57856ff91f49a5ccb8c39ad6afdeb133120bd2b3772284ca999ca22f3fd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


