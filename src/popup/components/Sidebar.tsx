import { useStep } from '../../hooks/useStep'

type Props = {
  stepNumber: number
}
const ICSuccess = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.66797 8.40744L5.95002 11.6667L13.3346 4.33337"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const StepButton = ({ stepNumber }: { stepNumber: number }) => {
  const { currentStep } = useStep()
  return (
    <>
      {currentStep < stepNumber || currentStep == stepNumber ? (
        <div
          className={
            `flex h-8 w-8 shrink-0 items-center justify-center  rounded-full font-IBMPlexMono ` +
            ` text-center text-sm font-medium not-italic leading-7 ` +
            `${currentStep == stepNumber ? 'text-[#140E24)] bg-[#fff]' : 'border-[2px] border-[rgba(149,149,149,0.25)] bg-[linear-gradient(92deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.10)_100%)] text-[#FFF]'} `
          }
        >
          0{stepNumber}
        </div>
      ) : (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#67B6FF]">
          <ICSuccess />
        </div>
      )}
    </>
  )
}
export default function Sidebar({ stepNumber }: Props) {
  return (
    <div className="flex shrink-0 grow-0 flex-col items-center self-stretch px-2">
      <StepButton stepNumber={stepNumber} />
      {stepNumber != 4 && (
        <div className="h-full w-[1px] bg-[rgba(255,255,255,0.25)]">
          <p className="opacity-0">.</p>
        </div>
      )}
    </div>
  )
}
