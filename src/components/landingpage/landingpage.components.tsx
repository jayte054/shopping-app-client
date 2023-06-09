import { Link } from "react-router-dom";
import NavBar from "../Navbar/navbar.landingpage";
import { Benefit } from "../benefit/benefit.components";
import { Footer } from "../footer/footer.components";
import "./landingpage.components.css";
import { useState } from "react";
import { SlNote } from "react-icons/sl";

const LandingPage = () => {
  const [total, setTotal] = useState(0);
  const [inputFields, setInputFields] = useState([]);

  const handleTotalClick = () => {
    const priceInputs = document.querySelectorAll(
      'input[name^="price"]'
    ) as NodeListOf<HTMLInputElement>;
    let sum = 0;
    priceInputs.forEach((input) => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        sum += value;
      }
    });
    setTotal(sum);
  };

  const handlePrintClick = () => {
    const itemInputs = document.querySelectorAll(
      'input[type="text"]'
    ) as NodeListOf<HTMLInputElement>;
    const priceInputs = document.querySelectorAll(
      'input[name^="price"]'
    ) as NodeListOf<HTMLInputElement>;

    const items: any = [];
    for (let i = 0; i < itemInputs.length; i++) {
      const item = itemInputs[i].value;
      const price = priceInputs[i].value;
      if (item && price) {
        items.push({ item, price });
      }
    }
    setInputFields(items);
    console.log(items);
  };

  return (
    <>
      <NavBar />
      <div className="landingpage-container">
        <h2 className="landingpage-h2">
          Welcome to Shopping Manager, your unique app that helps make a tidy list of things to buy
        </h2>
        <div className="address">
          <span>
            Your first order of business would be to <Link to="/signup">sign up</Link> if you don't have an account
          </span>
          <p> Better Still, make a quick list of things to buy </p>
        </div>
        <div className="form-elements">
          <form>
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price1" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price2" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price3" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price4" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price5" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price6" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price7" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price8" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price9" /> <br />
            <span className="item"> Item </span>
            <input type="text" />
            <span className="item"> price </span>
            <input type="number" name="price10" /> <br />
            <button
              type="button"
              style={{
                width: "5rem",
                paddingBottom: "-2rem",
                paddingRight: ".5rem",
                paddingLeft: "0",
                marginLeft: "3rem",
                marginTop: "1rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
              onClick={handleTotalClick}
            >
              Total
            </button>
            <input type="number" value={total} readOnly />
          </form>
          <div className="landingpage-print-container">
            <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
              <button className="landingpage-print-button" type="button" onClick={handlePrintClick}>
                Print
              </button>

              <div className="landingpage-print-input">
              <h3><SlNote style={{fontWeight: "bold", fontSize:"2px"}}/>Shopping Manager</h3>
                     <span style={{marginBottom: "2px"}}>My shopping list</span><br />
                {inputFields.map((item:any, index) => (  
                  <div key={index}> 
                    <span>Item: {item.item}</span>
                    <span style={{marginLeft:"1rem"}}>Price: {item.price}</span>
                  </div>
                ))}
                    <span>Total: {total}</span>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Benefit />
      <Footer />
    </>
  );
};

export default LandingPage;