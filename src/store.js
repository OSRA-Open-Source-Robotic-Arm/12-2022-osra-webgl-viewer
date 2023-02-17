import { create } from 'zustand'

const useStore = create((set) => ({
  keyframes: [
    {
      joint: "j0",
      value: 0,
      dTime: 0,
      id: 0,
    },
    {
      joint: "j0",
      value: 2,
      dTime: 1,
      id: 1,
    },
    {
      joint: "j0",
      value: 0,
      dTime: 3,
      id: 2,
    }],
  animTime: 30.5,
  currentTime: 0,
  setAnimTime: (time) => set({ animTime: time }),
  setCurrentTime: (time) => set({ setCurrentTime: time }),

  addKeyFrame: (keyframe) =>
    set((state) => ({ keyframes: [...state.keyframes, keyframe] })),

  removeKeyFrame: (id) =>
    set((state) => ({ keyframes: state.keyframes.filter(obj => obj.id !== id) })),
}))

export default useStore