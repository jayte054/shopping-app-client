import React, { useEffect, useContext } from "react";
// import { historyStore } from "../store/historyStore";
// import AuthContext from "../context/authContext/authContext";

// const ShoppingList: React.FC = () => {
//   const { FetchLists_HistoryStore, itenary } = historyStore;
//   const { user }: any = useContext(AuthContext);

//   useEffect(() => {
//     const fetchShoppingLists = async () => {
//       try {
//         const accessToken = user.accessToken;
//         await FetchLists_HistoryStore(accessToken);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchShoppingLists();
//   }, [FetchLists_HistoryStore, user.accessToken]);

//   return (
//     <div>
//       <h2>Shopping Lists</h2>
//       {itenary.map((shoppingList: any, index: number) => (
//         <div key={index}>
//           <h3>Date: {shoppingList.date}</h3>
//           <ul>
//             {shoppingList.items.map((item: any, itemIndex: number) => (
//               <li key={itemIndex}>
//                 Item: {item.item}, Price: {item.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShoppingList;