import { create } from 'zustand'

const useStore = create((set) => ({
  keyframes: [{
    target: "j0",
    axe: "y",
    keyframes: [
      {
        value: 0,
        time: 0,
      },
      {
        value: 2,
        time: 10,
      },
      {
        value: 0,
        time: 30,
      },]
  }
  ],
  animData: [],
  animTime: 30.5,
  currentTime: 0,
  armPosition: 'arm_position',
  setAnimTime: (time) => set({ animTime: time }),
  setAnimData: (data) => {
    set({ animData: data })
  },
  setArmPosition: (position) => set({ armPosition: position }),
  setCurrentTime: (time) => {
    set({ currentTime: time })
  },

  addKeyFrame: (keyframe) =>
    set((state) => ({ keyframes: [...state.keyframes, keyframe] })),

  removeKeyFrame: (id) =>
    set((state) => ({ keyframes: state.keyframes.filter(obj => obj.id !== id) })),
}))

export default useStore