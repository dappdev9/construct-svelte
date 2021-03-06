module.exports = (req, res) => {
    const { ethers } = require("ethers");
    
    const network = "ropsten";
    const provider = ethers.getDefaultProvider(network, {
        // etherscan: YOUR_ETHERSCAN_API_KEY,
        infura: INFURA_KEY,
        // alchemy: YOUR_ALCHEMY_API_KEY
    });

    const query = await provider.getBlockNumber()
    
    res.status(200).send(query);
};