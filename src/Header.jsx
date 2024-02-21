import "./header.css"

export function Header (props) {
    
    return (
        <>
        <h1 className="page-headline">{props.page}</h1>
        </>
    )
}