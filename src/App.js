import './App.scss'
import useStore from './store.js'

import { useCallback, useEffect } from "react"
//import VideoEditingTimeline from "video-editing-timeline";

import Timeline from "./components/timeline/timeline.jsx"
import ThreeScene from "./components/three-scene/three-scene.jsx"

function App() {
  return (
    <div className="App">
      <ThreeScene />
      <Timeline />
    </div>
  )
}

export default App
