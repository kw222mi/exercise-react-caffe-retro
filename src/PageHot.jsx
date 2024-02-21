import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { PriceHot } from "./PriceHot";
import { TextDiv } from "./TextDiv";
import "./page.css"


export function PageHot() {
    return (  
      <>
      <Navbar/>
      <div className="hot-page page">
        <Header page="HOT"/>
        <TextDiv text="Hot freshly ground black coffee or a cup of exquisite tea?" type="first"/>
        <TextDiv text="We give you that perfect cup every time." type="second"/>
        <PriceHot/>
      </div>
      </>
    );
}
 