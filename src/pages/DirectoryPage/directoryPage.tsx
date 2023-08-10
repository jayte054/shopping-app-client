import React, { useContext, useEffect, useState } from "react";
import toastify from "toastify-js"
import AuthContext from "../../context/authContext/authContext";
import { inject, observer } from "mobx-react";
import { directoryStore } from "../../stores/directory.stores";
import NavbarDirecotry from "../../components/Navbar/navbar.direcotry";
import { Footer } from "../../components/footer/footer.components";
import {IoLocation} from "react-icons/io5"
import "./directorypage.css"

export const DirectoryPage = ()=> {
    const {FetchDirectory_Store} = directoryStore;
    const {user} = useContext(AuthContext)
    const [directoryList, setDirectoryList] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<any>(1)
    const [count, setCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredRecords, setFilteredRecords] = useState([])

 
    
      useEffect(() => {
        const searchFunction = () => {
          if (searchQuery.trim() === ""){
            setFilteredRecords(directoryList)
          }else{
            const filtered: any = directoryList.filter((item: any) => 
                item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredRecords(filtered)
          }
        }
        searchFunction()
    }, [searchQuery, directoryList])

    const recordsPerPage = 20
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;;
    const records = directoryList.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(directoryList.length / recordsPerPage)
    const numbers = Array.from({length:nPage}, (_, i) => i + 1)

    const fetchDirectory: any = async() => {
        try{
            const accessToken = user.accessToken 
            const directory = await FetchDirectory_Store(accessToken)
            const Directory = directory.split(",")
            const parsedDirectory = JSON.parse(Directory)
            parsedDirectory.sort((a: any, b: any) => b - a)
            setDirectoryList(parsedDirectory)
            setCount(parsedDirectory.length)
            toastify({
                text:"directory fetched successfully",
                duration: 3000,
                gravity:"top",
                backgroundColor: "green",
                close: true
            }).showToast()
        }catch(error){
            toastify({
                text:"entry unsuccessful, admin priviledge required",
                duration: 3000,
                gravity: "top",
                backgroundColor: "red",
                close: true 
            }).showToast()
            throw error
        }
    }

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
            setCurrentPage(currentPage - 1)
        }
    }

    const openGoogleMaps = (latitude: number, longitude: number) => {
        const googleMapsLink = `https://www.google.com/maps/place/${latitude},${longitude}`;
        window.open(googleMapsLink, '_blank');
      };


    return (
        <React.Fragment>
            <div>
                <NavbarDirecotry />
                <div className = "directory-client">
                <h1>Shopping Manager Directory</h1>
                <p>You can check for the stores and/or traders closest to you</p>
                <button type="button" onClick= {fetchDirectory}>
                    Fetch Directory
                </button>

                {/* <span> */}
               
              
                <div>
                {/* <div> */}
                <input type = "text"
                     value = {searchQuery} 
                     onChange = {(e) => setSearchQuery(e.target.value)}
                     placeholder = "search..."
              />
              {/* <button type="button"
                      onClick={searchFunction}>
                    Search
              </button> */}
            {/* </span> */}
                {/* </div> */}
                    <table className="table-containers">
                        
                        <thead className="table-header">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Whatsapp Number</th>
                                <th>E-Naira Wallet Id</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecords && filteredRecords.length > 0 ? (
                                filteredRecords.map((item: any, index: number) =>(
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.walletId}</td>
                                        <td>{item.address} 
                                            {" "} 
                                            {<IoLocation onClick={ () => openGoogleMaps(item.latitude, item.longitude)} />}
                                        </td>
                                    </tr>
                                ))
                            ): (
                                <tr>
                                    <td colSpan={5}>Empty Directory</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <p>Total Stores in Directory: {count}</p>
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
                                        <span className="pageLink" onClick = {changeCurrentPage}>{n}</span>
                                      </span>
                            ))}

                            <span className="page-item">
                                    <span className="pageLink" onClick={nextPage}>Next</span>
                            </span>
                        </div>
                    </nav>
                </div>
                </div>
                
                <Footer />
            </div>
         </React.Fragment>
    )
}

export default inject("directoryStore")(observer(DirectoryPage))