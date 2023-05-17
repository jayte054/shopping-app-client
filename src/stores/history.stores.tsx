import { createList, fetchLists } from "../services/history.services";

let itenary: any[] = []
const createList_HistoryStore = async({item, price}: any) => {
    const result = await createList({item, price})
    return itenary.push(result.data)
}

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