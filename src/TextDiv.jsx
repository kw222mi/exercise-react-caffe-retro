import "./textDiv.css"


export function TextDiv(props) {

 
  return (
    <>
      <div className="text-container">
      <p className="text">{props.text}</p>
      </div>
    </>
  );
}