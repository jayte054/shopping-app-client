import React, { useContext, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import toastify from "toastify-js";
import AuthContext from "../../context/authContext/authContext";
import { Footer } from "../../components/footer/footer.components";
import NavbarShoppingPage from "../../components/Navbar/navbar.shoppingPage";
import "./shoppingHistory.css"

const ShoppingHistoryPage = ({ historyStore }: any) => {
  const { FetchLists_HistoryStore } = historyStore;
  const { user } = useContext(AuthContext);
  const [itenary, setItenary] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1)
  const [count, setCount] = useState(0)

  const username = user && user.user ? user.user.username : ""
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = itenary.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(itenary.length / recordsPerPage)
  const numbers = Array.from({ length: nPage }, (_, i) => i + 1);


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
      toastify({
        text: "shopping history fetched successfully",
        backgroundColor: "blue",
        gravity: "top",
        close: true,
        duration: 3000
      }).showToast()
      return lists
     
    } catch (error) {
        toastify({
            text: "fetching shopping history unsuccessful",
            backgroundColor: "red",
            gravity: "top",
            close: true,
            duration: 3000
          }).showToast()
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


  return (
    <React.Fragment>
      <div>
        <NavbarShoppingPage />
        <div className="shoppingHistory-containers">
        <span style={{position:"relative", fontWeight:"bold",
                    fontSize:"1.5rem",
                    width:"310px",
    }}>Shopping History</span><br/>
        <span style={{ paddingTop:"5rem",

        }}>Please Click on the button below to view your shopping history</span>

        <div>
        <button className="fetchHistory-button" type="button" onClick={fetchShoppingLists}>
                fetch history
            </button>
           
        <div className="shoppingHistory-sub-container">
            <h3>{`${username ? username : "My"}`} shopping history</h3>
            <table className ="table-container">
          <thead className="table-header">
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
                <td colSpan={4}>No shopping list available</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>

      
        <p style={{fontWeight : "bold"}}>Total Items: {count}</p>
        <div className="pagination-container">
        <nav>
            <div className="pagination">
                <span className="page-item">
                    <span className = "pageLink" onClick={prevPage}>Prev</span>
                </span>
                {numbers.map((n, i) => (
                    <span className = {`page-item ${currentPage === n ? "active" : ""}`} 
                          key={i}
                          style={{border:"none", padding: "0"}}>
                        <span className = "pageLink" onClick = {changeCurrentPage}>{n}</span>
                    </span>
                ))}
                
                <span className="page-item">
                    <span className="pageLink" onClick={nextPage}>Next</span>

                </span>
            </div>
        </nav>
        </div>
        
        </div>
      </div>
      <Footer />
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