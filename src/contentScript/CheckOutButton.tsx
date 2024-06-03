import { useEffect } from 'react'

export default function CheckoutButton() {
  const ApplyAmazon = (message: any, sendResponse: any) => {
    var inputCode = document.getElementById('spc-gcpromoinput') as HTMLInputElement
    /* enter code */
    if (inputCode) {
      inputCode.value = '123123'
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
      action: 'confirmApply',
    })
  }
  const handleCheckout = async () => {
    chrome.runtime.sendMessage({
      action: 'openQR',
    })
  }

  return (
    <button
      style={{
        borderRadius: '8px',
        width: '100%',
        marginTop: '16px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '19px',
        fontSize: '14px',
        fontWeight: '400',
        background: '#67B6FF',
        borderWidth: '0px',
        color: '#140E24',
      }}
      onClick={handleCheckout}
    >
      Checkout with LINK
    </button>
  )
}
