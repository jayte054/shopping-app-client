import React, { useContext, useState } from "react";
import toastify from "toastify-js"
import AuthContext from "../../context/authContext/authContext";
import { inject, observer } from "mobx-react";
import { directoryStore } from "../../stores/directory.stores";
import NavbarDirecotry from "../../components/Navbar/navbar.direcotry";
import { Footer } from "../../components/footer/footer.components";

export const DirectoryPage = ()=> {
    const {FetchDirectory_Store} = directoryStore;
    const {user} = useContext(AuthContext)
    const [directoryList, setDirectoryList] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<any>(1)
    const [count, setCount] = useState(0)


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
        }catch(error){
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
    return (
        <React.Fragment>
            <div>
                <NavbarDirecotry />
                <div style={{padding: "1rem"}}>
                <h1>Shopping Manager Directory</h1>
                <p>You can check for the stores and/or traders closest to you</p>
                <button type="button" onClick= {fetchDirectory}>
                    Fetch Directory
                </button>
                <div>
                    <table className="table-container">
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
                            {records && records.length > 0 ? (
                                records.map((item: any, index: number) =>(
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.walletId}</td>
                                        <td>{item.address}</td>
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