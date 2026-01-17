import { connectWallet, getEthBalance } from "./portfolio.js";
import { getPrices } from "./api.js";

document.getElementById("connectBtn").onclick = async () => {
  const address = await connectWallet();
  const balance = await getEthBalance(address);
  const prices = await getPrices();

  document.getElementById("eth").innerText = "ETH Balance: " + balance;
  document.getElementById("value").innerText =
    "Total Value: $" + (balance * prices.eth);
};
