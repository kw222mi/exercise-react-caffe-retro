import { CafeInfo } from "./CafeInfo";
import { Header } from "./Header";
import { TextDiv } from "./TextDiv";
import "./page.css"


export function PageCosy() {
    return (  
        <div className="cosy-page page">
          <Header page="COSY"/>
          <TextDiv text="Hang around. Enjoy the settings." type="first"/>
          <TextDiv text="Use our fast WiFi. Borrow a newspaper or a novel." type="second"/>
          <CafeInfo />
      </div>
    );
}