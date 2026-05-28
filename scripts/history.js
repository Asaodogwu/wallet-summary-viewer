const https = require('https');

async function rpcCall(method, params) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      jsonrpc: "2.0",
      method: method,
      params: params,
      id: 1
    });

    const options = {
      hostname: "api.zan.top",
      path: "/node/v1/pharos/mainnet/139482a231794f9488a572bcda7bedd7",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => { body += chunk; });
      res.on("end", () => {
        try {
          const json = JSON.parse(body);
          resolve(json.result);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function showWalletSummary(address) {
  console.log("\nWallet Summary for: " + address + "\n");

  try {
    const balance = await rpcCall("eth_getBalance", [address, "latest"]);
    const txCount = await rpcCall("eth_getTransactionCount", [address, "latest"]);
    const blockNumber = await rpcCall("eth_blockNumber", []);

    const balanceNum = (parseInt(balance, 16) / 1e18).toFixed(4);
    const txCountNum = parseInt(txCount, 16);
    const blockNum = parseInt(blockNumber, 16);

    let status, advice;
    if (parseFloat(balanceNum) === 0) {
      status = "Empty";
      advice = "This wallet has no funds.";
    } else if (parseFloat(balanceNum) < 0.01) {
      status = "Low";
      advice = "Balance is very low. May not cover gas fees.";
    } else {
      status = "Healthy";
      advice = "Wallet has sufficient balance.";
    }

    console.log("Balance          : " + balanceNum + " PHRS");
    console.log("Total Txns Sent  : " + txCountNum);
    console.log("Latest Block     : " + blockNum);
    console.log("Health Status    : " + status);
    console.log("Advice           : " + advice);
    console.log("");

  } catch (err) {
    console.error("Error:", err.message);
  }
}

const address = process.argv[2];
if (!address) {
  console.error("Usage: node scripts/history.js <wallet-address>");
  process.exit(1);
}

showWalletSummary(address).catch(console.error);