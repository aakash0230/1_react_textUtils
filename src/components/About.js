export default function About(props) {
  // const [currStyle, setStyle] = useState({
  //   color : "black",
  //   backgroundColor : "white"
  // })
  // console.log(props.mode)
  // // const [btnText, setBtnText] = useState("Enable Dark Mode")
  // // const changeTheme = () => {
  //   if(props.mode === "light"){
  //     setStyle({
  //       color : "black",
  //       backgroundColor : "white"
  //     })
  //     // setBtnText("Enalble Dark mode")
  //   }
  //   else{
  //     setStyle({
  //       color : "white",
  //       backgroundColor : "black"
  //     })
  //     // setBtnText("Enable Light mode")
  //   }
  // // }
  return (
    <div className="container">
      <h2 className='my-3'>About us</h2>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About our textUtils
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            About our projects
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            About our Clients
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    {/* <button className = "btn btn-primary mx-3 my-3" onClick={changeTheme}>{btnText}</button> */}
    </div>
  )
}
