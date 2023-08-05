import AuthContext from "../context/authContext/authContext";
import { CreateList, fetchShoppingLists, ListInput } from "../services/history.services";



let Itenary: any[] = [];

export const CreateList_HistoryStore = async (
  shoppingListItems: string[],
  shoppingListPrices: string[],
  userDetails: any
): Promise<any> => {
  try {
    const results = [];
    for (let i = 0; i < shoppingListItems.length; i++) {
      const input: ListInput = {
        item: shoppingListItems[i],
        price: shoppingListPrices[i],
      };
      const result = await CreateList(input, userDetails);
      results.push(result);
    }
    Itenary.push(results);
  } catch (error) {
    throw error;
  }
};

export const FetchLists_HistoryStore = async (accessToken: any): Promise<any> => {
  try {
    const response = await fetchShoppingLists(accessToken);
    
    return response;
  } catch (error) {
    throw error;
  }
};

export const historyStore = {
    CreateList_HistoryStore,
    FetchLists_HistoryStore,
    Itenary
}