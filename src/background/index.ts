console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('🚀 ~ request.action:', request.action)
  switch (request.action) {
    case 'openQR':
      const extensionTabURL = `https://fuseum-link.vertiree.com/extension/chainlink?extension-id=${chrome.runtime.id}`
      chrome.windows.create({
        url: extensionTabURL,
        type: 'popup',
        width: 350,
        height: 700,
        top: 0,
        left: 1000,
      })
      break

    case 'getAmazonTabId':
      // Query all tabs to find the Amazon tab
      chrome.tabs.query({}, (tabs: any) => {
        const amazonTab = tabs.find((tab: any) => tab.url.includes('amazon'))
        if (amazonTab) {
          console.log('Amazon ID: ', amazonTab?.id)
          sendResponse({ tabId: amazonTab.id })
        } else {
          console.log('Amazon ID not found')
        }
      })
      // Return true to indicate that we will send a response asynchronously
      return true
      break
    case 'applyGiftCard':
      break

    case 'placeOrder':
    case 'confirmApply':
      // Add logic for these actions if needed
      break

    default:
      console.warn('Unknown action:', request.action)
      break
  }

  return true
})

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  // Check for the correct action
  switch (request.action) {
    case 'login':
      chrome.storage.local.set({ address: request.address }, function () {
        // console.log('Address stored:', request.address)
      })
      // Optionally send a response back to the sender
      sendResponse({ status: 'Address Received' })
      break

    case 'logout':
      chrome.storage.local.set({ address: '' }, function () {
        // console.log('Address stored:', request.address)
      })
      // Optionally send a response back to the sender
      sendResponse({ status: 'Logout' })
      break

    case 'sendGiftCodeFromChainLink':
      console.log('Receive apply gift card from chainLink')
      chrome.tabs.query({}, (tabs: any) => {
        const amazonTab = tabs.find((tab: any) => tab.url.includes('amazon'))
        if (amazonTab) {
          console.log('🚀 ~ chrome.tabs.query ~ amazonTab:', amazonTab.id)
          chrome.tabs.sendMessage(
            amazonTab.id,
            { action: 'applyGiftCard', giftCode: request.giftCode },
            (response) => {
              console.log('Response from content script:', response)
              if (response?.result == 'applySuccess') {
                sendResponse({ status: 'Success apply gift code' })
              }
            },
          )
        }
      })

      break
  }
  return true // Return true to indicate you wish to send a response asynchronously
})
