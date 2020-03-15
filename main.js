const config = {
  nodeUrl: 'https://rpc.nearprotocol.com',
  deps: {
    keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore()
  }
};

// open a connection to the NEAR platform
(async function() {
  window.near = await nearlib.connect(config);

  // ---------------------------------------------------------------------------
  // here you have access to `nearlib` and a valid connection object `near`
  // ---------------------------------------------------------------------------

})(window)