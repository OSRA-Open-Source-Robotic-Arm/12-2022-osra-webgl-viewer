import "./middle_side.scss"
import Draggable from 'react-draggable';

export default function Middle_side () {
    return (
        <div className="reader">
          <div className="reader_background">
          </div>
          <div className="reader_secondes">
            {[0, 5, 10, 15, 20, 25, 30, 35].map((second, index) => (
              <div key={index}>{second}</div>
            ))}
            <div className="reader_drag-pos" id="drag-pos">
                <Draggable
                id="draggable"
                axis="x"
                bounds="parent"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                scale={1}>
                    <div className="drag">
                        <div className="handle">
                            <div>
                                <div className="white-line">
                                    <img src="Group 1.svg" draggable="false" id="drag" className="drag" alt="Girl in a jacket" width="15" height="20"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
          </div>
          <div className="reader_lecteur">
            {["first-black-line", "b", "c"].map((index) => (
              <div className="reader_lecteur_black-line" key={index} id={index}></div>
            ))}
          </div>
        </div>
    )
}