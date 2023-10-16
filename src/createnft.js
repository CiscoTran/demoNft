import React, { useState } from "react";
import { NFTService } from "./service/nft.service";

export default function CreateNFT() {
  //useState
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [file, setFile] = useState(null);
  const [createdNFT, setCreateNFT] = useState("");

  //create new NFT using createdNFT in nft.s
  const handleCreate = () => {
    const newNFT = { name, symbol, file };
    NFTService.CreateNFT(newNFT);
    setCreateNFT(newNFT);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.currentTarget.value)}
      />
      <input type="file" onChange={(e) => setFile(e.currentTarget.files[0])} />

      <button onClick={handleCreate}> Create</button>
      {createdNFT && (
        <div>
          {createdNFT.file && (
            <img
              height={"100px"}
              width={"100px"}
              src={URL.createObjectURL(createdNFT.file)}
              alt="nft card"
            />
          )}
          <h2>{createdNFT.name}</h2>
          <p>{createdNFT.symbol}</p>
        </div>
      )}
    </div>
  );
}
