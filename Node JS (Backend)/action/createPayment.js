const bkashConfig = require("../config/bkashConfig.json");
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");
const authHeaders = require("../action/authHeader.js");

const createPayment = async (req) => {
  try {
    if(!req.amount || req.amount < 1){
      return 'minimum amount atlest 1 tk';
    }
    const createResopnse = await fetch(bkashConfig.create_payment_url, {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({
        mode: "0011",
        payerReference: " ",
        callbackURL: bkashConfig.backend_callback_url,
        amount: req.amount, 
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5)
      }),
    });
    const createResult = await createResopnse.json();
    
    return createResult;
  } catch (e) {
    console.log(e);
  }
};

module.exports = createPayment;
