import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./scss/style.css";
import { useWeb3React } from "@web3-react/core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import Web3 from "web3";
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  const { activate, deactivate } = useWeb3React();

  const providerOptions = {
    binancechainwallet: {
      package: true,
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "4e93acbfad4846a7978a8e4210332e33",
      },
    },
    walletlink: {
      package: WalletLink,
      options: {
        appName: "NFT Minter",
        infuraId: "4e93acbfad4846a7978a8e4210332e33",
        rpc: "",
        chainId: 1,
        appLogoUrl: null,
        darkMode: true,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
    providerOptions,
  });

  async function connectwallet() {
    var provider = await web3Modal.connect();
    var web3 = new Web3(provider);
    // await window.ethereum.send('eth_requestAccounts');
    // var accounts = await web3.eth.getAccounts();
    // account = accounts[0];
    // document.getElementById('wallet-address').textContent = account;
    // contract = new web3.eth.Contract(ABI, ADDRESS);
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      {/* <Web3ModalComponent /> */}
      <button onClick={connectwallet}>connect</button>
    </div>
  );
}

export default App;
