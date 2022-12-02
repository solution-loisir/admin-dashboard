const amiliaAuth = require("../helpers/auth");
const getAccounts = require("../helpers/getAccounts");
require("dotenv").config();

exports.handler = async (event, context) => {
  
  if(!context.clientContext.user.app_metadata.roles.includes(process.env.SUPER_USER_ROLE)) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized endpoint" })
    }
  };

  const token = await amiliaAuth();
  const accounts = await getAccounts(token);

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(accounts)
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  };
};