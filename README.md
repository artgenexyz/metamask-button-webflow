# No-code "Connect Metamask" button for Webflow / Wordpress

## How to use?

1. Create a button in Webflow / Wordpress
2. Assign it an HTML ID `connect` in button settings. [Guide for Webflow](https://university.webflow.com/lesson/section-link)
3. Create a Custom Code block in Webflow / Wordpress
4. Copy & paste this code in the custom code block:
```html
<script>
// Change to custom button ID, starting with # (optional)
window.buttonID = "#connect"
</script>
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" />
<script type="module" src="https://buildship-dev.github.io/metamask-button-webflow/wallet.js" />
```
5. Done! "Connect MetaMask" button is working!

If you want to allow minting on your NFT website and can't code, reach out to us via https://buildship.dev, or, if you can code, check out https://github.com/buildship-dev/generativeNFT-template
