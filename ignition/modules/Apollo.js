const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Apollo", (m) => {
  const apollo = m.contract("Greeter", ["Launching Apollo!"]);

  m.call(apollo, "greet", []);

  return { apollo };
});