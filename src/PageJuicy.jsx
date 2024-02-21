import { Header } from "./Header";
import { PrisAndInfo } from "./PrisAndInfo";
import { TextDiv } from "./TextDiv";
import "./page.css"


export function PageJuicy() {
    return (  
        <div className="juicy-page page">
          <Header page="JUICY"/>
          <TextDiv text="Ripe fruit - freshly squeezed."/>
          <TextDiv text="It's as simple as that. Chunky or smooth - it's your choice."/>
          <PrisAndInfo/>
      </div>
    );
}