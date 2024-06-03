import { useEffect } from 'react'
import { useStep } from '../../hooks/useStep'

type Props = {}
const ICCheck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6.30555L4.46154 8.75L10 3.25"
        stroke="#140E24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export const ICCheckBlue = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6.30555L4.46154 8.75L10 3.25"
        stroke="#67B6FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export default function ApplyCoupon({}: Props) {
  const { currentStep, setStep } = useStep()
  const sendApplyCouponAction = async () => {
    chrome.runtime.sendMessage({ action: 'getAmazonTabId' }, (response) => {
      if (response && response.tabId) {
        console.log('Amazon Tab ID:', response.tabId)
        chrome.tabs.sendMessage(
          response.tabId,
          {
            action: 'applyGiftCard',
            giftCode: 'G6HA-IJ5K-LYUV-WZ14-DQ0R',
          },
          (response) => {
            console.log('Response after apply gift card ', response)
            if (response !== 'applySuccess') {
              setTimeout(() => {
                setStep(4)
              }, 2000)
            }
          },
        )
      } else {
        console.log('No Amazon tab found.')
      }
    })
  }
  useEffect(() => {
    sendApplyCouponAction()
    return () => {}
  }, [])

  return (
    <div className="flex flex-col items-start gap-4">
      <div
        style={{ border: '0.5px solid rgba(151, 151, 151, 0.25)' }}
        className="flex items-center gap-2.5 self-stretch rounded-[32px] bg-[rgba(120,120,120,0.25)] py-1.5 pl-3 pr-1.5"
      >
        <p className="whitespace-nowrap text-[10px] font-normal uppercase not-italic leading-[100%] text-[color:var(--White,#FFF)]">
          G6HA-IJ5K-LYUV-WZ14-DQ0R
        </p>
        <div className="flex items-center justify-center rounded-full bg-[#67B6FF] p-[6px]">
          <ICCheck />
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <ICCheckBlue />
        <p className="text-[10px] font-normal not-italic leading-[120%] tracking-[-0.25px] text-[color:var(--Gray,#CECBCF)]">
          Gift card balance applied for payment!
        </p>
      </div>
    </div>
  )
}
