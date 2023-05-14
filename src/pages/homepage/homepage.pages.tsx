import React, {useState} from "react"
import {SlNote} from "react-icons/sl"
import { WhatsappShareButton, WhatsappIcon} from "react-share"
import NavBar from "../../components/Navbar/navbar.homepage"
import { Footer } from "../../components/footer/footer.components"
import "./homepage.pages.css"
import { ShareData } from "../../components/share/shareData.share"


export const Homepage = () => {
    
    const [inputFields, setInputFields] = useState([
        {
            item: "",
            price: ""
        }
    ])
    const [inputFields2, setInputFields2] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);

    const addFields:any = () => {  
        return  setInputFields([...inputFields, {item:"", price: ""}])
    }

    const removeFields: any = (index: number) => {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }
    // let Naira = currencySymbol.symbol("Naira")

    const calculateTotalPrice: any = () => {
        let total = 0;
        inputFields.forEach((input) => {
          total += parseFloat(input.price);
        });
        setTotalPrice(total);
      };
    
    const printCart: any = (event:any) => {
        event.preventDefault()
    const item :any= () => {
        return (
            <>
            <h3><SlNote style={{fontWeight: "bold"}}/>Shopping Manager</h3>
             <span>My shopping list</span>
            <ul>
            {itemList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <span> total: ₦{totalPrice} </span>
            </>
        )
    }
    console.log(inputFields)    
    setInputFields2(item)
    //   console.log(data)
    //   return data
    }

    const shareData: any = () => {
        const itemList = inputFields.map(item => `${item.item} - ₦${item.price}`);
        const cart = `
        Shopping Manager
        My shopping list:
        ${itemList.join("\n")}
        Total: ₦${totalPrice}`;
      
        return cart;
      };

    
    const itemList = inputFields.map(item => `${item.item} - ₦${item.price}`);
    
    const handleFormChange = (index: number, event: any) => {
        let data:any = [...inputFields]
        data[index][event.target.name]= event.target.value
        setInputFields(data)
    }
      
    return (
        <React.Fragment>
            <NavBar />
            <div className="homepage-container">
                <div>
                <p style={{fontWeight:"bold"}}>Welcome Justin, Let's assist you in having an effortless shopping experience</p>
            <p style={{fontWeight:"bold"}}>Cart:</p>
            
            <form className="homepage-form" >
                {inputFields.map((input, index) => {
                    return (
                        
                            <div key={index}>
                            <label>Item:</label>
                            <input 
                                type="text"
                                name="item" 
                                placeholder= "item" 
                                value={input.item || ""} 
                                onChange = {event => handleFormChange(index, event)}
                                className="homepage-item-input"
                                required
                            />
                            <label style={{marginLeft:"4px"}}>Price:</label>
                            <input  
                                type="number"
                                name="price" 
                                placeholder= "price" 
                                value={input.price || ""}
                                onChange = {event => handleFormChange(index, event)}
                                className="homepage-price-input"
                                required
                            />
                            <button className="add-button" type= "button" onClick={() =>  addFields()}> Add More Items</button>
                            <button className="remove-button" type= "button" onClick={()=> removeFields(index) }>Remove Item</button>
                        </div>
                        
                    )
                })}
            </form>
            <div className="total-container">
            <button onClick={calculateTotalPrice}>Total</button>
            <input
              type="number"
              value={totalPrice}
              placeholder="Total Price"
            />
            <h4 style={{marginBottom:"0rem"}}>Note</h4>
            <p >To expeirence payments without any charge , please use  
                <a style={{fontWeight:"bold", marginLeft:"5px", color:"green"}} 
                href="https://mywallet.enaira.gov.ng/registration/" 
                target="_blank">
                e₦aira Wallet
                </a> </p>
          </div>
            
                </div>
            <div className="print-container" >
            <button className="homepage-print-button" type="button" onClick={printCart}>Print</button>
           
                    <div className="homepage-print-input">
                        {inputFields2}
                    </div>
                  
            </div>
            </div>
            <div className="socialsShareContainer">
                <p> Share on: <br /> 
                <div>
                <ShareData description = {shareData()} />
                                <WhatsappShareButton
                                url={`${(shareData())}`}
                                >  
                                    <WhatsappIcon  size="32" round color="black"/>
                                </WhatsappShareButton>
                </div>
                                
                </p>
            </div>
            <Footer />
        </React.Fragment>
    )
}

// export const Homepage = () => {
//     const [formValues, setFormValues] = useState([{ name: "", email : ""}])

//     let handleChange = (i:any, e:any) => {
//         let newFormValues:any = [...formValues];
//         newFormValues[i][e.target.name] = e.target.value;
//         setFormValues(newFormValues);
//      }
        
//     let addFormFields = () => {
//         setFormValues([...formValues, { name: "", email: "" }])
//      }
    
//     let removeFormFields = (i:any) => {
//         let newFormValues = [...formValues];
//         newFormValues.splice(i, 1);
//         setFormValues(newFormValues)
//     }

//     let handleSubmit =(event: { preventDefault: () => void }) => {
//         event.preventDefault()
//         alert(JSON.stringify(formValues))
//     }
//     return (
//         <form  onSubmit={handleSubmit}>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Name</label>
//               <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
//               <label>Email</label>
//               <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
//               {
//                 index ? 
//                   <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
//                 : null
//               }
//             </div>
//           ))}
//           <div className="button-section">
//               <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
//               <button className="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     )
// }

// import React, {useState} from "react"
// import NavBar from "../../components/Navbar/navbar.homepage"
// import { Footer } from "../../components/footer/footer.components"
// import "./homepage.pages.css"
// import { json } from "stream/consumers"

// export const Homepage = () => {
    
//     const [inputFields, setInputFields] = useState([
//         {
//             item: "",
//             price: ""
//         }
//     ])

//     const addFields:any = () => {  
//         return setInputFields([...inputFields, {item:"", price: ""}])
//     }

//     const removeFields: any = (index: number) => {
//         let data = [...inputFields]
//         data.splice(index, 1)
//         setInputFields(data)
//     }

//     const printCart = (event:any) => {
//         event.preventDefault()
//         alert(JSON.stringify(inputFields))
//     }

//     const handleFormChange = (index: number, event: any) => {
//         let data:any = [...inputFields]
//         data[index][event.target.name]= event.target.value
//         setInputFields(data)
//     }

//     // Create a new array itemList to hold the list of items in the desired format
//     const itemList = inputFields.map(item => `${item.item} - $${item.price}`)

//     return (
//         <React.Fragment>
//             <NavBar />
//             <div className="homepage-container">
//                 <div>
//                     <p style={{fontWeight:"bold"}}>Welcome Justin, Let's assist you in having an effortless shopping experience</p>
//                     <p style={{fontWeight:"bold"}}>Cart:</p>

//                     <form className="homepage-form" >
//                         {inputFields.map((input, index) => {
//                             return (
//                                 <div key={index}>
//                                     <label>Item:</label>
//                                     <input 
//                                         type="text"
//                                         name="item" 
//                                         placeholder="item" 
//                                         value={input.item || ""} 
//                                         onChange={event => handleFormChange(index, event)}
//                                         className="homepage-item-input"
//                                         required
//                                     />
//                                     <label style={{marginLeft:"4px"}}>Price:</label>
//                                     <input  
//                                         type="number"
//                                         name="price" 
//                                         placeholder="price" 
//                                         value={input.price || ""}
//                                         onChange={event => handleFormChange(index, event)}
//                                         className="homepage-price-input"
//                                         required
//                                     />
//                                     <button className="add-button" type="button" onClick={() =>  addFields()}> Add More Items</button>
//                                     <button className="remove-button" type="button" onClick={() => removeFields(index)}>Remove Item</button>
//                                 </div>
//                             )
//                         })}
//                     </form>

//                     <div className="total-container">
//                         <button>Total</button>
//                         <input />
//                     </div>
//                 </div>

//                 <div className="print-container">
//                     <button className="homepage-print-button" type="button" onClick={printCart}>Print</button>
//                     {/* Use the itemList array to display the list of items */}
//                     <ul>
//                         {itemList.map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <Footer />
//         </React.Fragment>
//     )
// }