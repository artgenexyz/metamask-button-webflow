const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
}

export const getWalletAddress = async () => {
    if (ethereum.selectedAddress) {
        return ethereum.selectedAddress;
    }
    return await web3.eth.getAccounts()[0];
}

export const updateMetaMaskStatus = async () => {
  isMetaMaskConnected().then((connected) => {
    let button = document.querySelector(window.buttonID ?? '#connect');
    if (connected) {
        button.textContent = "MetaMask connected";
    }
  });
}

export const connectMetaMask = async () => {
  if (await isMetaMaskConnected() == false) {
    await ethereum.enable();
    await updateMetaMaskStatus();
    location.reload();
  }
}

window.onload = () => {
  updateMetaMaskStatus();
}
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetaMask);
