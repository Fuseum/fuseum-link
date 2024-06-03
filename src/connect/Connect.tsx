import React, { useEffect, useState } from 'react'
import Line from '../../public/img/Connect/Line.svg'
import link_button from '../../public/img/linkbutton.svg'
type Props = {}

export default function Connect({}: Props) {
  const [suiWalletAddress, setSuiWalletAddress] = useState<string>('')
  function handleOpenNewTab() {
    chrome.tabs.create({ url: 'https://www.amazon.com/' }, (tab) => {
      console.log(`New tab opened with ID: ${tab.id}`)
    })
  }
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, #EBEFF2 0%, #FFF 100%), linear-gradient(180deg, #DAEAF6 0%, #FFF 100%)',
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-6">
        <img src={link_button} alt="" width={47} height={47} />
        <button
          onClick={handleOpenNewTab}
          style={{ boxShadow: '0px 12px 32px -12px rgba(0, 0, 0, 0.25)' }}
          className="font-HelveticaNeue flex flex-col items-center justify-center gap-2.5 rounded-lg bg-[#375BD2] px-10 py-3 text-xl font-medium not-italic leading-[normal] text-[color:var(--White,#FFF)]"
        >
          Go Shopping
        </button>
      </div>
      <div className="font-HelveticaNeue flex flex-col items-center justify-center gap-3 self-stretch px-0 py-4">
        <p className="text-[11px] font-normal not-italic leading-[100%] text-[#82959B]">
          Powered by Link
        </p>
        <div className="flex items-center gap-[10px] text-[11px] font-medium not-italic leading-[100%] text-[color:var(--Signature-Chainlink-Blue,#375BD2)]">
          <p>Term</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  )
}
