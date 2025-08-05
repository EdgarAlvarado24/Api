const { readDataAsync } = require("../utils/fileHelperAsync");


const getUsers = () => {
  return readDataAsync();
};


const getUserById = async (id) => {
  const users = await getUsers();

  return users.find((user) => user.id === Number(id));
};

module.exports = { getUsers, getUserById };