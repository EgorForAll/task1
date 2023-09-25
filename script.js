const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";
const table = document.querySelector("table");
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  data.forEach((item, index) => {
    const firstFive = (index) =>
      index < 5 ? 'style="background-color: #8484ff;"' : null;
    const isUsdt = (item) =>
      item.symbol === "usdt" ? 'style="background-color: #7de47d;"' : null;
    table.insertAdjacentHTML(
      "beforeend",
      `<tr  ${isUsdt(item)} ${firstFive(index)}>
      <td class="id">${item.id}</td>
      <td class="symbol">${item.symbol}</td>
      <td class="name">${item.name}</td></tr>`
    );
  });
}

getData(url);
