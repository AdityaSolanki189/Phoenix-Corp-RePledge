export default function Loader({loadingMessage}){
    return <div
    style={{
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0"
}}>
    <div
        style={{
        backgroundColor:"black" ,
        position: "absolute",
        left: "50%",
        color:"white",
        top: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid black",
        padding: "1rem 3rem"
    }}>{loadingMessage}

    </div>
</div>
}