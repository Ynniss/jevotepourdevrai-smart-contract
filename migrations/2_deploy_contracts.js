var JM = artifacts.require("./JM.sol"); module.exports = function(deployer) {
deployer.deploy(JM, web3.utils.fromAscii("elections presidentielles"), 3); };
