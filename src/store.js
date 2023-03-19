import { create } from 'zustand'

const useStore = create((set, get) => ({
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
  },
  {
    target: "j1",
    axe: "z",
    keyframes: [
      {
        value: 0,
        time: 0,
      },

    ]
  },
  {
    target: "j2",
    axe: "z",
    keyframes: [
      {
        value: Math.PI,
        time: 0,
      },
    ]
  },
  ],
  jointsState: [{
    joint: 'j0',
    axe: 'y',
    value: 0
  },
  {
    joint: 'j1',
    axe: 'z',
    value: 0
  },
  {
    joint: 'j2',
    axe: 'z',
    value: 0
  }],
  animTime: 30.5,
  currentTime: 0,
  armPosition: 'arm_position',
  setAnimTime: (time) => set({ animTime: time }),
  setJointsState: (data) => {
    set({ jointsState: data })
  },
  setArmPosition: (position) => set({ armPosition: position }),
  setCurrentTime: (time) => {
    set({ currentTime: time })
  },

  addKeyframe: (obj) => {
    const kfCopy = get().keyframes.map(copy => ({ ...copy }))
    kfCopy.forEach(keyframeObject => {
      if (keyframeObject.target === obj.target)
        keyframeObject.keyframes.push({
          value: obj.value,
          time: obj.time
        })
    })

    set((state) => ({ keyframes: kfCopy }))
  },

  removeKeyFrame: (id) =>
    set((state) => ({ keyframes: state.keyframes.filter(obj => obj.id !== id) })),
}))

export default useStore