import { create } from 'zustand'

interface Step {
  currentStep: number
  setStep: (step: number) => void
}
export const useStep = create<Step>()((set) => ({
  currentStep: 1,
  setStep: (step) => set({ currentStep: step }),
}))
