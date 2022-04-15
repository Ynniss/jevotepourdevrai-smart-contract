const JMtest = artifacts.require("./JM.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("JM", () => {

// Base setup

  it("should deploy JM contract", async function () {
	  const JMContract = await JMtest.deployed();
  });

// isOpen property

  it("should not be opened by default", async function() {
	  const JMContract = await JMtest.deployed();
	  assert(await JMContract.isOpen, false);
  });
  
  it("should be opened when triggerring the opening", async function() {
	  const JMContract = await JMtest.deployed();
	  await JMContract.openElection()
	  assert(await JMContract.isOpen, true);
  });

  it("should be closed when toggling the election state", async function() {
	  const JMContract = await JMtest.deployed();
	  
	  await JMContract.openElection()
	  await JMContract.closeElection()
	  
	  assert(await JMContract.isOpen, false);
  });

// Candidat

  it("should not contain any candidates by default", async function() {
    const JMContract = await JMtest.deployed();
	  
    assert.equal(await JMContract.candidates.length, 0);
  });

  // Unfortunately not working, after countless tries
  it("should properly present candidates to the election", async function() {
	  const JMContract = await JMtest.deployed();
	  
	  await JMContract.present(web3.utils.fromAscii("Norman"));
	  await JMContract.present(web3.utils.fromAscii("Yannis"));
	  await JMContract.present(web3.utils.fromAscii("Lucas"));
	  
	  assert.equal(await JMContract.candidates.length, 1);
  });

});
