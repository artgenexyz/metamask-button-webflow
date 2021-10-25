const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    return ethereum.selectedAddress !== null;
}

export const getWalletAddress = async () => {
    return ethereum.selectedAddress ?? await ethereum.request({ method: 'eth_requestAccounts' })[0];
}

export const updateMetaMaskStatus = async () => {
    const connected = isMetaMaskConnected()
    if (connected) {
        const button = document.querySelector(window.buttonID ?? '#connect');
        button.textContent = "Metamask connected";
    }
}

export const connectMetaMask = async () => {
   await ethereum.request({ method: 'eth_requestAccounts' });
   updateMetaMaskStatus();
}

updateMetaMaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetaMask);
