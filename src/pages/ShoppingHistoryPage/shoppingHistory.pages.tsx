// // import React, {useContext} from "react"
// // import { ShoppingHistory } from "../../components/history/shoppingHistory.component"
// // import { Footer } from "../../components/footer/footer.components"
// // import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage"
// // import { historyStore} from "../../stores/history.stores"
// // import {inject, observer} from "mobx-react"
// // import AuthContext from "../../context/authContext/authContext"




// //  const ShoppingHistoryPage = () => {
// //     const {user} = useContext(AuthContext)
    
// //     const renderShoppingLists: any = async()=> {
// //       const accessToken = localStorage.getItem
// //         const {FetchLists_HistoryStore} = historyStore
// //       try{
// //         const response = await FetchLists_HistoryStore(accessToken)
// //         return response

// //       }catch(error){
// //         alert("couldn't ftech shopping list")
// //         console.log(error)
// //       }
// //     }

// //     const handleClick = ():any => {
// //       return  renderShoppingLists()
// //     }
   
// //     return (
// //         <React.Fragment>
// //             <div>
// //             <NavbarShoppingPage />
// //             <h2>Please Click on the button below to view your shopping lists</h2>
// //             {/* <ShoppingHistory /> */}
// //             <h3>Shopping Lists</h3>
// //               <button type="button" onClick = {handleClick} >Shopping History</button>  
// //               <p>{renderShoppingLists}</p>
// //             <Footer />
// //             </div>
        
// //         </React.Fragment>
       
// //     )
// // }

// // export default inject("historyStore")(observer(ShoppingHistoryPage))

import React, { useContext, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import AuthContext from "../../context/authContext/authContext";
import { historyStore } from "../../stores/history.stores";
import { Footer } from "../../components/footer/footer.components";
import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage";

const ShoppingHistoryPage = ({ historyStore }: any) => {
  const { FetchLists_HistoryStore } = historyStore;
  const { user } = useContext(AuthContext);
  const [itenary, setItenary] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1)
  const [count, setCount] = useState(0)

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = itenary.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(itenary.length / recordsPerPage)
//   const numbers = [...Array(nPage + 1).keys()].slice(1)
  const numbers = Array.from({ length: nPage }, (_, i) => i + 1);


//   useEffect(() => {
//     const fetchShoppingLists = async () => {
//       try {
//         const accessToken = user.accessToken;
//         const lists =  JSON.stringify(FetchLists_HistoryStore(accessToken));
//         console.log(lists)
//         const parsedLists = JSON.parse(lists); // Parse the JSON string response
//         console.log("Shopping Lists:", lists);
//         return setItenary(lists);
        
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchShoppingLists();
//   }, [FetchLists_HistoryStore, user.accessToken]);

  const fetchShoppingLists = async () => {
    try {
      const accessToken = user.accessToken;
      const lists = await  FetchLists_HistoryStore(accessToken);
      console.log( typeof lists)
    //   const parsedLists = JSON.parse(lists); // Parse the JSON string response
    const Lists = lists.split(",")
    const parsedLists = JSON.parse(Lists)
    parsedLists.sort((a:any,b: any) => b - a)
      console.log("Shopping Lists:", parsedLists);
      setItenary(parsedLists);
      setCount(parsedLists.length)
      return lists
    } catch (error) {
      console.log(error);
    }
  };

  const changeCurrentPage = (id: any) => {
    setCurrentPage(id)
  }
  const nextPage = () => {
    if(currentPage !== nPage) {
        setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if(currentPage !== 1) {
        setCurrentPage(currentPage  - 1)
    }
  }

//   useEffect(() => {
//     count()
// },[])
//   const count: any = () => {
//     let initialCount = 0
//     initialCount+= 1
//     console.log(initialCount)
//     return initialCount
//   }

  return (
    <React.Fragment>
      <div>
        <NavbarShoppingPage />
        <h2>Please Click on the button below to view your shopping lists</h2>
        <h3>Shopping Lists</h3>

        <div>
        <button type="button" onClick={fetchShoppingLists}>
                fetch list
            </button>
           
        

        <table>
          <thead>
            <tr>
                <th>ID</th>
              <th>Item</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {records && records.length > 0 ? (
              records.map((item: any, index: number) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.item}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No shopping list available</td>
              </tr>
            )}
          </tbody>
        </table>
        <p>Total Items: {count}</p>
        <nav>
            <ul className="pagination">
                <li className="pageItem">
                    <span className = "pageLink" onClick={prevPage}>Prev</span>
                </li>
                {numbers.map((n, i) => (
                    <li className = {`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                        <span className = "pageLink" onClick = {changeCurrentPage}>{n}</span>
                    </li>
                ))}
                
                <li className="page-item">
                    <span className="pageLink" onClick={nextPage}>Next</span>

                </li>
            </ul>
        </nav>
        <Footer />
      </div>
      </div>
    </React.Fragment>
  );
  
};

export default inject("historyStore")(observer(ShoppingHistoryPage));


// import React, { useContext, useEffect } from "react";
// import { inject, observer } from "mobx-react";
// import AuthContext from "../../context/authContext/authContext";
// import { historyStore } from "../../stores/history.stores";
// import { Footer } from "../../components/footer/footer.components";
// import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage";

// const ShoppingHistoryPage = ({ historyStore }: any) => {
//   const { FetchLists_HistoryStore, itenary } = historyStore;
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchShoppingLists = async () => {
//       try {
//         const accessToken = user.accessToken;
//         await FetchLists_HistoryStore(accessToken);
//         alert("successful")
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchShoppingLists();
//   }, [FetchLists_HistoryStore, user.accessToken]);

//   return (
//     <React.Fragment>
//       <div>
//         <NavbarShoppingPage />
//         <h2>Please Click on the button below to view your shopping lists</h2>
//         <h3>Shopping Lists</h3>
//         <ul>
//           {itenary && itenary.length > 0 ? (
//             itenary.map((shoppingList: any, index: number) => (
//               <li key={index}>
//                 Date: {shoppingList.date}
//                 <ul>
//                   {shoppingList.items.map((item: any, itemIndex: number) => (
//                     <li key={itemIndex}>
//                       Item: {item.item}, Price: {item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))
//           ) : (
//             <p>No shopping lists available.</p>
//           )}
//         </ul>
//         <Footer />
//       </div>
//     </React.Fragment>
//   );
// };

// export default inject("historyStore")(observer(ShoppingHistoryPage));



// import React, { useContext } from "react";
// import { inject, observer } from "mobx-react";
// import AuthContext from "../../context/authContext/authContext";
// import { historyStore } from "../../stores/history.stores";
// import { Footer } from "../../components/footer/footer.components";
// import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage";

// const ShoppingHistoryPage = ({ historyStore }: any) => {
//   const { FetchLists_HistoryStore, itenary } = historyStore;
//   const { user } = useContext(AuthContext);

//   const renderShoppingLists = async () => {
//     const id = user.profileId
//     const accessToken = user.accessToken
//     console.log(accessToken)
//     try {
//     //   const accessToken = localStorage.getItem("accessToken");
//       await FetchLists_HistoryStore( accessToken);
//       alert("successful")
//     } catch (error) {
//       alert("Couldn't fetch shopping lists");
//       console.log(error);
//     }
//   };

//   const handleClick = () => {
//     renderShoppingLists();
//   };

//   return (
//     <React.Fragment>
//       <div>
//         <NavbarShoppingPage />
//         <h2>Please Click on the button below to view your shopping lists</h2>
//         {/* <ShoppingHistory /> */}
//         <h3>Shopping Lists</h3>
//         <button type="button" onClick={handleClick}>
//           Shopping History
//         </button>
//         <ul>
//           {itenary.map((shoppingList: any, index: number) => (
//             <li key={index}>
//               Date: {shoppingList.date}
//               <ul>
//                 {shoppingList.items.map((item: any, itemIndex: number) => (
//                   <li key={itemIndex}>
//                     Item: {item.item}, Price: {item.price}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//         <Footer />
//       </div>
//     </React.Fragment>
//   );
// };

// export default inject("historyStore")(observer(ShoppingHistoryPage));


// import React, { useContext, useEffect, useState } from "react";
// import { historyStore } from "../../stores/history.stores";
// import AuthContext from "../../context/authContext/authContext";

// const ShoppingHistoryPage = () => {
//   const { FetchLists_HistoryStore, itenary } = historyStore;
//   const { user } = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchShoppingLists = async () => {
//       try {
//         const accessToken = user.accessToken;
//         await FetchLists_HistoryStore(accessToken);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchShoppingLists();
//   }, [FetchLists_HistoryStore, user.accessToken]);

//   return (
//     <div>
//       <h2>Shopping Lists</h2>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         itenary.map((shoppingList: any, index: number) => (
//           <div key={index}>
//             <h3>Date: {shoppingList.date}</h3>
//             <ul>
//               {shoppingList.items.map((item: any, itemIndex: number) => (
//                 <li key={itemIndex}>
//                   Item: {item.item}, Price: {item.price}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ShoppingHistoryPage;