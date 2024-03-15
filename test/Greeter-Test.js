const { expect } = require("chai")
const { ethers } = require("hardhat")

// IGNORE FOR NOW
// const provider = waffle.provider;
// const { provider } = require("ethereum-waffle/provider");
// const { MockProvider } = require("@ethereum-waffle/provider");

describe("Greeter", function() {
    it("Should return the new greeting once it's changed", async function() {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world!");
        
        // this was in from tutorial, but caused to fail -> await greeter.deploy();

        expect(await greeter.greet()).to.equal("Hello, world!");

        const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

        //wait until the tx is mined
        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });

    //IGNORE FOR NOW - NEED TO TEST BALANCE CHANGES
    // it("Should return the new balance after ether is deposited", async function() {
    //     const Greeter = await ethers.getContractFactory("Greeter");
    //     const greeter = await Greeter.deploy("Hello, world!");
        
    //     // this was in from tutorial, but caused to fail -> await greeter.deploy();

    //     await greeter.deposit({value: 10});
    //     expect(await provider.getBalance(greeter.address)).to.equal(10);
    // });
});