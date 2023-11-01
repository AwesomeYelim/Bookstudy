const dep2 = require("./d2");
console.log("require dep2", dep2);
module.exports = () => {
  console.log("dep2", dep2);
};
