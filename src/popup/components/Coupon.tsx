import { useEffect, useState } from 'react'
import amazon_card from '../../../public/img/Amazon/amzCard.png'
import amazon_logo from '../../../public/img/Amazon/amz_logo.svg'
import { useStep } from '../../hooks/useStep'
type Props = {}
const BackgroundEffect = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="212"
      height="71"
      viewBox="0 0 212 71"
      fill="none"
    >
      <g filter="url(#filter0_f_4384_6690)">
        <ellipse cx="102.941" cy="71.0001" rx="69.9406" ry="20.8722" fill="#507598" />
      </g>
      <defs>
        <filter
          id="filter0_f_4384_6690"
          x="-67"
          y="-49.8721"
          width="339.883"
          height="241.744"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4384_6690" />
        </filter>
      </defs>
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
export default function Coupon({}: Props) {
  const [timeRegister, setTimeRegister] = useState(true)
  setTimeout(() => {
    setTimeRegister(false)
  }, 2000)
  const { currentStep, setStep } = useStep()
  useEffect(() => {
    setTimeout(() => {
      setStep(3)
    }, 3000)
    return () => {}
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-4 self-stretch">
      <div className=" relative">
        <img src={amazon_card} alt="card" className="h-[120px] w-full" />
        <img src={amazon_logo} alt="logo" className=" absolute left-3 top-3" />
        <div className="absolute bottom-3 left-3 flex w-fit flex-col gap-1 font-MonaSans">
          <p className="text-sm font-bold not-italic leading-[100%] text-[#F90]">
            Amazon Gift Card
          </p>
          <p className="text-xs font-medium not-italic leading-[100%] text-[color:var(--Black,#140E24)]">
            $2,999
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-start gap-2 self-stretch rounded-lg bg-[#060D18] px-4 py-3">
        <p className="font-IBMPlexMono text-[10px] font-medium not-italic leading-[100%] text-[color:var(--White,#FFF)]">
          ORDER TOTAL
        </p>
        <p className="text-[32px] font-normal not-italic leading-[100%] text-[color:var(--Signature-SUI-Blue,#67B6FF)]">
          $2,999
        </p>
        <div className="absolute bottom-0 h-fit w-fit">
          <BackgroundEffect />
        </div>
      </div>
      {timeRegister && (
        <p className="text-[10px] font-normal not-italic leading-[120%] tracking-[-0.25px] text-[color:var(--Gray,#CECBCF)]">
          An Amazon Gift Card with the value equivalent to the amount of USDC you just deposited is
          being registered
        </p>
      )}
      {!timeRegister && (
        <div className="flex items-center gap-[10px]">
          <ICCheck />
          <p className="whitespace-nowrap text-[10px] font-normal not-italic leading-[120%] tracking-[-0.25px] text-[#CECBCF]">
            Equivalent Amazon Gift Card registered!
          </p>
        </div>
      )}
    </div>
  )
}
