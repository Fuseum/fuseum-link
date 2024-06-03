import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import CheckoutButton from './CheckOutButton'

export default function InjectedButton() {
  useEffect(() => {
    let container = document.createElement('div')
    switch (document.location.hostname) {
      case 'www.amazon.com': {
        injectAmazon(container)
        break
      }
    }
    return () => {
      if (container) {
        container.remove()
      }
    }
  }, [])
  const injectAmazon = (container: any) => {
    const intervalId = setInterval(() => {
      const checkoutBox = document.getElementById('submitOrderButtonId')
      if (checkoutBox) {
        clearInterval(intervalId) // Clear the interval once the checkoutBox is found
        checkoutBox?.parentNode?.insertBefore(container, checkoutBox.nextSibling)
        const root = createRoot(container)
        root.render(<CheckoutButton />)
      }
    }, 1000)
  }
  return null
}
