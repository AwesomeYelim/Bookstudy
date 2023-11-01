const dep2 = require("./d1");
console.log("require dep2", dep2);
module.exports = () => {
  console.log("dep2", dep2);
};
