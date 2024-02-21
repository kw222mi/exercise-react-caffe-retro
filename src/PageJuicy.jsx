import { Header } from "./Header";
import { PriceJuicy } from "./PriceJuicy";
import { TextDiv } from "./TextDiv";
import "./page.css"


export function PageJuicy() {
    return (  
        <div className="juicy-page page">
          <Header page="JUICY"/>
          <TextDiv text="Ripe fruit - freshly squeezed." type="first"/>
          <TextDiv text="It's as simple as that. Chunky or smooth - it's your choice."type="second"/>
          <PriceJuicy/>
      </div>
    );
}