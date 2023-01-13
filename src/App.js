import './App.scss';

import { useCallback, useEffect } from "react";
//import VideoEditingTimeline from "video-editing-timeline";

import Timeline from "./components/timeline/timeline.jsx"

function App() {
  return (
    <div className="App">
      <Timeline />
    </div>
  );
}

export default App;
