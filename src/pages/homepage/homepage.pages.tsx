import React, {useContext, useState} from "react"
import { useLocation } from "react-router-dom"
import {inject} from "mobx-react"
import { AuthContext } from "../../context/authContext/authContext"
import {SlNote} from "react-icons/sl"
import { WhatsappShareButton, WhatsappIcon} from "react-share"
import NavBar from "../../components/Navbar/navbar.homepage"
import { Footer } from "../../components/footer/footer.components"
import "./homepage.pages.css"
import { ShareData } from "../../components/share/shareData.share"
import { CreateList_HistoryStore, historyStore } from "../../stores/history.stores"
import axios from "axios"
import { BASE_URL } from "../../services/auth.service"
import { ListInput, loadToken } from "../../services/history.services"
import { userStore } from "../../stores/user.stores"

export interface CreateListDto {
    item: string;
    price: string
}


 const Homepage = () => {
    const {user} = useContext(AuthContext)
    const username = user && user.user ? user.user.username : "";
    const location = useLocation()
     console.log(location.state)
    //   const name = location.state && location.state.data.user.username
    // name.push(location.state && location.state.data.user.username)
    //  console.log(state)
    //  const username = state
    //  console.log(username)
   
    // console.log(user.user.username)
 
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
        if (index === inputFields.length - 1) {
            return
        }
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


    const savePrintCart = async (e:React.MouseEvent<HTMLButtonElement>) => {
       const userDetails = user.accessToken
        e.preventDefault()
        const token = localStorage.getItem( "accessToken")
        console.log("print")
       console.log(userDetails)
         
        // const shoppingList : ListInput[] = inputFields.map((fields) => ({item :fields.item, price: fields.price}))
        const shoppingListItems: any[] = inputFields.map((fields) => fields.item);
        const shoppingListPrices: any[] = inputFields.map((fields) => fields.price);
        // const shoppingList : ListInput[] = inputFields.map((fields) => ({item :fields.item, price: fields.price}))
      
        const accessToken: any = await loadToken();
       
         const {CreateList_HistoryStore} = historyStore
        try {
          const response = await CreateList_HistoryStore(shoppingListItems, shoppingListPrices, userDetails);
        //  const response = await axios.post(`${BASE_URL}/shopper/create-list`,
        //                         shoppingList,
        //                         {
        //                             headers: {
        //                             Authorization: `Bearer ${accessToken}`,
        //                             },
        //                         }
        //                         );
             console.log(response)
          window.alert("Shopping List saved successfully");
        } catch (error) {
          console.log(error);
          window.alert("Failed to save Shopping List");
        }
      };

   
      
    return (
        <React.Fragment>
            <NavBar />
            <div className="homepage-container">
                <div>
                <p style={{fontWeight:"bold"}}>Welcome {`${username ? username : ""}`}, Let's assist you in having an effortless shopping experience</p>
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
                <div style={{display:"flex", flexDirection:"column", margin:"1rem"}}>
                <button className="homepage-print-button" type="button" onClick={printCart}>Print</button>
                <button className="homepage-print-button" type="button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => savePrintCart(e)}>Save</button>

                </div>
           
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

export default inject("historyStore", "routerStore")(Homepage)