const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    1287: {
        name: "moonbase",
        ethUsdPriceFeed: "0x0BAA6E884cfD628b33867F9E081B44a76276fA2D",
    },
}

const developmentChains = ["hardhat", "localhost"]
const frontEndContractsFile =
    "../nextjs-fund-me/constants/contractAddresses.json"
const frontEndAbiFile = "../nextjs-fund-me/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    frontEndAbiFile,
    frontEndContractsFile,
}
