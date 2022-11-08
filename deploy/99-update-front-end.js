const { frontEndContractsFile, frontEndAbiFile } = require("../helper-hardhat-config")
const fs = require("fs")
const { network } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const fundme = await ethers.getContract("FundMe")
    fs.writeFileSync(frontEndAbiFile, fundme.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
    const fundme = await ethers.getContract("FundMe")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(fundme.address)) {
            contractAddresses[network.config.chainId.toString()].push(fundme.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [fundme.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]