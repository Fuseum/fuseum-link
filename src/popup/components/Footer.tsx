
type Props = {}

export default function Footer({}: Props) {
  return (
    <div
      style={{ borderTop: '1px solid rgba(135, 94, 221, 0.00)' }}
      className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3 self-stretch px-0"
    >
      <div className="relative h-[105.284px] w-[193.223px] rounded-[16px_16px_0px_0px] border border-solid border-[rgba(215,215,215,0.50)] bg-[#151c2d]">
        <div className="absolute inset-0 flex w-full flex-col items-center justify-end gap-3 py-4">
          {/* <p className=" font-IBMPlexMono text-[11px] font-normal not-italic leading-[100%] text-white">
            Powered by Esol Labs
          </p> */}
          <p className=" font-IBMPlexMono text-[11px] font-normal not-italic leading-[100%] text-white">
            Powered by SUI
          </p>
          <p className="text-[11px] font-normal not-italic leading-[100%] text-[#89A4BE]">
            Term Privacy
          </p>
        </div>
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(113, 60, 227, 0.00) 0%, rgba(165, 111, 255, 0.53) 41.4%, rgba(165, 217, 255, 0.87) 85.5%, #C8EBFF 100%)',
          }}
          className=" absolute left-0 right-0 top-4 h-[26.52px]"
        ></div>
      </div>
    </div>
  )
}
