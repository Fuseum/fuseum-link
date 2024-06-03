import React, { useEffect, useMemo, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { SuiPriceServiceConnection } from '@pythnetwork/pyth-sui-js'
import { useStep } from '../../hooks/useStep'
const url = 'https://api.pos25.app/v1/cf-payment/generate_qr'
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer 5b33ba2c47dac55f901afbe762ea8acf',
}
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 0x0f) >> 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default function QR() {
  const { setStep } = useStep()
  const uuid = useMemo(generateUUID, [])
  const { data: SuiPrice } = useQuery({
    queryKey: ['getSuiPrice'],
    queryFn: async () => {
      const response = await axios.get(
        'https://hermes.pyth.network/v2/updates/price/latest?ids[]=0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744',
      )
      return response.data?.parsed[0]?.price?.price
    },
    refetchInterval: 5000,
  })
  const { data: QR } = useQuery({
    queryKey: ['getQR'],
    queryFn: async () => {
      const response = await axios.post(
        url,
        {
          amount: 0.001,
          asset: 'SUI',
          chain_id: 101, // The ID of the chain 101: SUI
          currency: 'USD',
          fee_unit: 'fixed', // Set fixed fee for transaction
          fee_value: '0',
          merchant_id: '214', // The ID of the merchant
          order_id: uuid, // The order ID you specified
          serial_number: '00024500711', // The serial number of POS device you want to send notification
          channel: 'POS', // This field required to send notification to the POS device
        },
        { headers },
      )
      return response.data?.data?.qr_url
    },
  })
  const { data: paymentResult } = useQuery({
    queryKey: ['getPaymentResult'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.pos25.app/v1/cf-payment/status?order_id=${uuid}`,
      )
      if (response.data?.data === 'success') {
        setStep(2)
      }
      return response.data?.data
    },
    refetchInterval: 1000,
  })
  return (
    <div className="flex w-full flex-col items-start gap-3">
      {/* <div className="w-full text-center text-xs font-bold not-italic leading-4 text-[#67B6FF]"></div> */}
      <div className="flex w-full items-center justify-center">
        <QRCodeSVG value={QR} includeMargin={true} className=" h-[180px] w-[180px] rounded-xl" />
      </div>
      <div className="flex w-full items-center gap-1 whitespace-nowrap">
        <p className="font-MonaSans text-xs font-normal not-italic leading-4 text-[#537390]">
          Exchange rate:
        </p>
        <p className="text-right text-xs font-bold not-italic leading-4 text-[#67B6FF]">
          1 SUI ~ {Number(SuiPrice / 100000000).toFixed(3)} USD
        </p>
      </div>
    </div>
  )
}
