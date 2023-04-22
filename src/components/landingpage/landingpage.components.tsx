import { Link } from "react-router-dom"
import NavBar from "../Navbar/navbar.landingpage"
import  {Benefit}  from "../benefit/benefit.components"
import  {Footer}  from "../footer/footer.components"
import "./landingpage.components.css"
const LandingPage = () => {
    return (
        <>
        <NavBar />
        <div className="landingpage-container">
            <h2 className="landingpage-h2">
                Welcome to Shopping Manager, your unique app that helps make a tidy list of things to buy
            </h2>
            <div className="address">
            <span> Your first order of business would be to <Link to = "/signup">sign up</Link> if you don't have an account </span>
            <p> Better Still, make a quick list of things to buy </p>
            </div>
            <div className="form-elements"> 
            <form>
                <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
                 <span className="item"> Item  </span>
                 <input type="text" />
                <span className="item"> price </span>
                 <input type="number" /> <br />
            <p className="total">Total : <input /> </p>
            </form>
            <div className="print">
            <button className="print-button">Print</button>
            <input className="print-input" />
            </div>
            </div>
        </div>
         <Benefit />
        <Footer /> 
        </>
    )
}

export default LandingPage