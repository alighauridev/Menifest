import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const Web3ModalComponent = () => {
    const [web3Provider, setWeb3Provider] = useState(null);
    const [connectedAddress, setConnectedAddress] = useState('');

    const connectWallet = async () => {
        const providerOptions = {}; // You can customize the provider options here if needed

        const web3Modal = new Web3Modal({
            providerOptions,
            cacheProvider: true,
        });

        try {
            const provider = await web3Modal.connect();
            setWeb3Provider(provider);

            const ethersProvider = new ethers.providers.Web3Provider(provider);
            const signer = ethersProvider.getSigner();
            const address = await signer.getAddress();
            setConnectedAddress(address);

            // Now you can use 'provider' and 'signer' to interact with Ethereum
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    const disconnectWallet = () => {
        if (web3Provider && web3Provider.disconnect) {
            web3Provider.disconnect();
        }
        setWeb3Provider(null);
        setConnectedAddress('');
    };

    useEffect(() => {
        if (web3Provider) {
            // Subscribe to provider disconnection event
            web3Provider.on('disconnect', () => {
                disconnectWallet();
            });
        }
    }, [web3Provider]);

    return (
        <div>
            {!connectedAddress ? (
                <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <div>
                    <p>Connected Address: {connectedAddress}</p>
                    <button onClick={disconnectWallet}>Disconnect</button>
                </div>
            )}
        </div>
    );
};

export default Web3ModalComponent;
