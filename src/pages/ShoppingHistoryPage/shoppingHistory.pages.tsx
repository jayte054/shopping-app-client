import React from "react"
import { ShoppingHistory } from "../../components/history/shoppingHistory.component"
import { Footer } from "../../components/footer/footer.components"
import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage"
import { historyStore} from "../../stores/history.stores"
import {inject, observer} from "mobx-react"

const List = ({id, item, price, }: any) => {
        const historyStore = inject("historyStore")
        return <div>
            <span>Item : {item} </span>
            <span>Price: {price} </span>
        </div>
}


 const ShoppingHistoryPage = () => {

    const renderShoppingLists: any = ()=> {
        if(!historyStore.itenary.length){
            return alert("no list available")
        }

        return historyStore.itenary.map(itenary => {
            <List key={itenary.id}
                  item = {itenary.item} 
                  price= {itenary.price}
                  />
        })
    }

    const handleClick = ():any => {
      return  renderShoppingLists()
    }
   
    return (
        <React.Fragment>
            <div>
            <NavbarShoppingPage />
            <h2>Please Click on the button below to view your shopping lists</h2>
            {/* <ShoppingHistory /> */}
            <h3>Shopping Lists</h3>
              <button type="button" onClick = {handleClick} >Shopping History</button>  
              <p>{renderShoppingLists}</p>
            <Footer />
            </div>
        
        </React.Fragment>
       
    )
}

export default inject("historyStore")(observer(ShoppingHistoryPage))