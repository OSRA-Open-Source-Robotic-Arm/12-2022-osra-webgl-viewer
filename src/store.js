import { create } from 'zustand'

const useStore = create((set) => ({
  keyframes: [{
  }],
  animTime: 30.5,
  setAnimTime: (time) => set({ animTime: time }),

}))

export default useStore