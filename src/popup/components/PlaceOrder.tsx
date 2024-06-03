import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {}
const ICLoading = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M7.1021 11.8979C6.23127 12.0606 5.3352 12.0285 4.47826 11.8038C3.62132 11.5791 2.82477 11.1675 2.14581 10.5984C1.46685 10.0293 0.922336 9.31695 0.551369 8.51245C0.180402 7.70796 -0.00781028 6.83129 0.000248236 5.94542L0.938286 5.95396C0.931488 6.70132 1.09027 7.44092 1.40324 8.11964C1.71621 8.79836 2.17559 9.39935 2.7484 9.87945C3.3212 10.3596 3.99322 10.7069 4.71618 10.8964C5.43914 11.086 6.19511 11.1131 6.92979 10.9758L7.1021 11.8979Z"
        fill="#CECBCF"
      />
    </svg>
  )
}
const ICCheck = () => {
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
export default function PlaceOrder({}: Props) {
  const [timeOrder, setTimeOrder] = useState(true)
  setTimeout(() => {
    setTimeOrder(false)
  }, 2000)
  return (
    <div className="relative flex w-full items-start gap-[10px]">
      {timeOrder && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        >
          <ICLoading />
        </motion.div>
      )}
      {!timeOrder && <ICCheck />}
      <p className="text-[10px] font-normal not-italic leading-[120%] tracking-[-0.25px] text-[#CECBCF]">
        {timeOrder ? 'Your Order is being placed...' : 'Your Order has been placed successfully!'}
      </p>
      {!timeOrder && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="absolute bottom-[-100px] right-[16px] flex w-full flex-col items-center justify-center gap-[10px]"
        >
          <p className="whitespace-nowrap text-base font-medium not-italic leading-[100%] tracking-[-0.25px] text-white">
            Thank you for using our service!
          </p>
          <p className="whitespace-nowrap text-sm font-light not-italic leading-[100%] text-[#CECBCF]">
            This windows can now be closed.
          </p>
        </motion.div>
      )}
    </div>
  )
}
1
