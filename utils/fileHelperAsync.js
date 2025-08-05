const fs = require("fs/promises");
const filePath = require("./filePath");

// Writes data to a file asynchronously.
const writeDataAsync = (data) => {
  return fs.writeFile(filePath, JSON.stringify(data));
};

// Reads data from a file asynchronously.
const readDataAsync = async () => {
  const rawJson = await fs.readFile(filePath);
  const data = JSON.parse(rawJson) || [];

  return data;
};

module.exports = { writeDataAsync, readDataAsync };