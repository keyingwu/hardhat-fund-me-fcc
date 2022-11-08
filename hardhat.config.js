require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://goerli-ether/example"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const MOONBEAM_API_KEY = process.env.MOONBEAM_API_KEY || "key"
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY || "key"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        moonbase: {
            url: "https://rpc.api.moonbase.moonbeam.network",
            chainId: 1287, // 0x507 in hex,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
        },
    },
    etherscan: {
        // apiKey: ETHERSCAN_API_KEY,
        apiKey: MOONBEAM_API_KEY,
    },
    moonscan: {
        apiKey: MOONBEAM_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKET_API_KEY,
        token: "MATIC",
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}
