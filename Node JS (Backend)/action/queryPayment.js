const bkashConfig = require("../config/bkashConfig.json");
const fetch = require("node-fetch");
const authHeaders = require("../action/authHeader.js");

const queryPayment = async (paymentID) => {
  const queryResponse = await fetch(bkashConfig.query_payment_url, {
    method: "POST",
    headers: await authHeaders(),
    body: JSON.stringify({
      paymentID,
    }),
  });
  const queryResult = await queryResponse.json();
  return queryResult;
};

module.exports = queryPayment;
