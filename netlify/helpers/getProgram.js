const getItems = require("./getItems");
const path = require("path");
require("dotenv").config();

module.exports = async (token) => {

  const allPrograms = await getItems(token, path.join(process.env.AMILIA_BASE_URL, "programs"));

  return allPrograms;
}