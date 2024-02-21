import "./textDiv.css"

export function TextDiv(props) {
    const classes = ["text"];

 if (props.type === "first") {
    classes.push("first")
 }
 if (props.type === "second")
    classes.push("second")
  return (
    <>
      <div className="text-container">
      <p className={classes.join(" ")}>{props.text}</p>
      </div>
    </>
  );
}
