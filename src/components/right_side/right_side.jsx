import "./right_side.scss"
import { gsap } from "gsap";
import Input from '../input'

export default function Right_side () {
    
    function play() {
        //gsap.from('#drag-pos', { duration: 1, x: '200px', delay: .5 })
        gsap.to('#drag-pos'
                    , { duration: 35, x: '98%', delay: .5  })
    }

    return (
        <div className="preview">
            <div className="preview_noms" style={{ alignSelf: "center" }}>
                <div style={{ fontSize: ".65rem", marginLeft: ".5rem" }}>
                Preview
                </div>
                <div style={{ display: "flex" }}>
                    <div className="preview_noms_select" style={{ marginRight: ".5rem", alignSelf: "center", padding: "0.25rem" }}>
                        12’021’’
                    </div>
                    <button className="preview_noms_previous"></button>
                    <button className="preview_noms_play" onClick={play}></button>
                    <button className="preview_noms_next"></button>
                </div>
            </div>
          
          <div className="preview_lignes">
            <div className="preview_lignes_nom X">
              <div className="preview_lignes_nom_axe">Animation length</div>
              <div className="preview_lignes_nom_line line2"></div>
              <Input value={"35"} unit={"sec"} marginLeft={ "-11%" } />
              {/* <div className="preview_lignes_nom_number">
                <div>35</div>
                <div className="preview_lignes_nom_number_unité-écrite">sec</div>
              </div> */}
            </div>

            <div className="preview_lignes_nom X">
              <div className="preview_lignes_nom_axe">Send Data</div>
              <div className="preview_lignes_nom_line line3"></div>
              <div className="preview_lignes_nom_number send">Send</div>
            </div>
          </div>
        </div>
    )
}