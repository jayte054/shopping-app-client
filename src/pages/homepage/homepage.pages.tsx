import React, {useState} from "react"
import NavBar from "../../components/Navbar/navbar.homepage"
import { Footer } from "../../components/footer/footer.components"
import "./homepage.pages.css"
// import currencySymbol from "currency-symbol"
// import { json } from "stream/consumers"

export const Homepage = () => {
    
    const [inputFields, setInputFields] = useState([
        {
            item: "",
            price: ""
        }
    ])
    const [inputFields2, setInputFields2] = useState([""])

    const addFields:any = () => {  
        return  setInputFields([...inputFields, {item:"", price: ""}])
    }

    const removeFields: any = (index: number) => {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }
    // let Naira = currencySymbol.symbol("Naira")
    
    const printCart = (event:any) => {
        event.preventDefault()
    //    alert(JSON.stringify(inputFields))
    const itemList = inputFields.map(item => (`${item.item} -  ₦${item.price}`));
    const item :any= () => {
        return (
            <>
             <span>My shopping list</span>
            <ul>
            {itemList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            </>
           
        )
    }
   
    console.log(inputFields)    
    setInputFields2(item)
    //   console.log(data)
    //   return data
    }

    const getData: any = () =>  setInputFields(inputFields)
    const itemList = inputFields.map(item => `${item.item} - $${item.price}`);
    
    const handleFormChange = (index: number, event: any) => {
        let data:any = [...inputFields]
        data[index][event.target.name]= event.target.value
        setInputFields(data)
    }

    const handleFormChange2 = (event: any) => {
        console.log(event.target.value)
        setInputFields2(event.target.value)
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
            <button>Total</button>
            <input />
            </div>
            
                </div>
            <div className="print-container" >
            <button className="homepage-print-button" type="button" onClick={printCart}>Print</button>
           
                    <div className="homepage-print-input">
                        {inputFields2}
                    </div>
                   
            </div>
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