import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { PrisAndInfo } from "./PrisAndInfo";
import { TextDiv } from "./TextDiv";


export function Page() {
    return (  
        <div>
    <Navbar/>
    <Header/>
    <TextDiv text="Hot freshly ground black coffee or a cup of exquisite tea?"/>
    <TextDiv text="We give you that perfect cup every time."/>
    <PrisAndInfo/>
      </div>
    );
}
 