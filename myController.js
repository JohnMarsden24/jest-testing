const { doubleNum, sayMyName } = require("./utilities");

exports.doubleMyNum = (num, name) => {
  const myName = sayMyName(name);
  return doubleNum(num);
};
