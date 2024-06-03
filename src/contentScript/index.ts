console.info('contentScript is running')
import './index.tsx'
const ApplyGiftCardAmazon = (message: any, sendResponse: any) => {
  var inputCode = document.getElementById('spc-gcpromoinput') as HTMLInputElement
  if (inputCode) {
    inputCode.value = message.giftCode
  } else {
    console.log('No input field found')
  }

  var ApplyCode = document.querySelector(
    'input.a-button-input[type="submit"][aria-labelledby="gcApplyButtonId-announce"]',
  ) as HTMLInputElement
  /* apply code */
  if (ApplyCode) {
    ApplyCode.click()
  } else {
    console.log('No input tag found')
  }
  sendResponse({
    result: 'applySuccess',
  })
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in content script:', message)
  switch (message.action) {
    case 'applyGiftCard':
      console.log('Apply Gift Card from Content Script')
      ApplyGiftCardAmazon(message, sendResponse)
      break
    case 'hello':
      console.log('Hello from Content Script')
      ApplyGiftCardAmazon(message, sendResponse)
    default:
      break
  }
  return true // Indicate that sendResponse will be called asynchronously
})
