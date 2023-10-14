export const NFTService = {
  CreateNFT: async ({ name, symbol, file }) => {
    const obj = {
      network: "devnet",
      private_key:
        "tWwWa9acpagFmWS14hubmY63P7diLaFC2ovKfMy3RdqSgLxfCg8fpYMX2527JPJAApryPe6UdxJRtczaCqrKXcL",
      name,
      symbol,
      file,
      royalty: 10,
    };

    const form_data = new FormData();

    for (let key in obj) {
      console.log(key);
      console.log(obj[key]);
      form_data.append(key, obj[key]);
    }

    console.log(obj);

    fetch("https://api.shyft.to/sol/v1/nft/create", {
      //CURD create update read delete
      method: "POST",
      headers: {
        "x-api-key": "hRUxSHDzK6dQJDA5",
      },
      body: form_data,
    });
  },
};
