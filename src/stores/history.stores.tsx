import { createList, fetchLists, listInput } from "../services/history.services";

// let itenary: any[] = []
// const createList_HistoryStore = async({item, price}: any) => {
//     const result = await createList({item, price})
//     return itenary.push(result.data)
// }

let itenary: any[] = [];

export const createList_HistoryStore = async (item:string, price:string): Promise<any> => {
  try {
    const result = await createList(item, price);
    console.log(result)
    // itenary.push(result);
    console.log(result)
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const fetchLists_HistoryStore = async() => {
    const response = await fetchLists()
    if (response){
         itenary =  response.data
    }
}

export const historyStore = {
    createList_HistoryStore,
    fetchLists_HistoryStore,
    itenary
}