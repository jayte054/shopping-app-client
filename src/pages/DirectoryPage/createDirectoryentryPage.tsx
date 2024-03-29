import React, { useContext, useEffect, useState } from "react"
import toastify from "toastify-js"
import NavbarDirecotry from "../../components/Navbar/navbar.direcotry"
import { directoryInput } from "../../services/directoryServices"
import { directoryStore } from "../../stores/directory.stores"
import AuthContext from "../../context/authContext/authContext"
import { Footer } from "../../components/footer/footer.components"
import "./createDirectoryentryPage.css"
import { IoLocation } from "react-icons/io5"


export const CreateEntryPage = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [walletId, setWalletId] = useState("")
    const [address, setAddress] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    // const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
    const {user} = useContext(AuthContext)
    const {FetchDirectory_Store} = directoryStore
    const [directoryList, setDirectoryList] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<any>(1)
    const [count, setCount] = useState(0)

    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = directoryList.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(directoryList.length / recordsPerPage)
    const numbers = Array.from({length: nPage}, (_, i) => i + 1)

    const fetchDirectory: any = async() => {
        try{
            const accessToken = user.accessToken 
            const directory = await FetchDirectory_Store(accessToken)
            const Directory = directory.split(",")
            const parsedDirectory = JSON.parse(Directory)
            parsedDirectory.sort((a:any, b:any) => a - b)
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
                text:"fetching data unsuccessful",
                duration: 3000,
                gravity: "top",
                backgroundColor: "red",
                close: true 
            }).showToast()
            throw error
        }
    }

    const changeCurrentPage =(id: any) => {
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

    // useEffect(() => {
    //     // Convert string lat and long to numbers and set the marker position
    //     if (directoryList.length > 0) {
    //       const firstEntry = directoryList[0];
    //       setMarkerPosition({
    //         lat: parseFloat(firstEntry.latitude),
    //         lng: parseFloat(firstEntry.longitude),
    //       });
    //     }
    //   }, [directoryList]);

    
    const createEntry = async(e:any) => {
        e.preventDefault()

        
        const input: directoryInput = {
            name,
            number,
            walletId,
            address,
            latitude, 
            longitude
        }

        const {createDirectory_Store} = directoryStore
        const accessToken = user.accessToken
        try{
            if(user.isAdmin = true){
                await createDirectory_Store(input, accessToken)
                toastify({
                    text:"entry created successfully",
                    duration: 3000,
                    gravity:"top",
                    backgroundColor: "green",
                    close: true
                }).showToast()
                setName("")
                setAddress("")
                setNumber("")
                setWalletId("")
                setLatitude("")
                setLongitude("")
            }else{
            toastify({
                text:"entry unsuccessful, admin priviledge required",
                duration: 3000,
                gravity: "top",
                backgroundColor: "red",
                close: true 
            }).showToast()
            }
            
        }catch(error){
            console.log(error)
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

    const openGoogleMaps = (latitude: string, longitude: string) => {
        console.log("Received latitude:", latitude);
        console.log("Received longitude:", longitude);

        const parsedLatitude = parseFloat(latitude);
        const parsedLongitude = parseFloat(longitude);

        if (isNaN(parsedLatitude) || isNaN(parsedLongitude)) {
            console.log("Invalid latitude or longitude.");
            return;
        }

        const googleMapsLink = `https://www.google.com/maps/place/${parsedLatitude},${parsedLongitude}`;
        window.open(googleMapsLink, '_blank');
      };
    
    return (
        <div >
            <NavbarDirecotry/>
        <div className="directory-container">
            <div className="createEntry">
                <h1 style={{textDecoration: "underline"}}>Register Entry</h1>

                <ul>
                    <li className="entryList">Name</li>
                    <input type="text" 
                           placeholder="name"
                           value={name}
                           onChange={e => setName(e.target.value)}
                           required
                           className="entryInput"/>
                    <li className="entryList">WhatsappNumber</li>
                    <input type="text"
                           placeholder="number"
                           value={number} 
                           onChange={(e) => setNumber(e.target.value)}
                           required
                           className="entryInput"/>
                    <li className="entryList">Wallet ID</li>
                    <input type="text"
                           placeholder="wallet id"
                           value={walletId}
                           onChange={e => setWalletId(e.target.value)}
                           required
                           className="entryInput"/>
                    <li className="entryList">Address</li>
                    <input type="text"
                           placeholder="address"
                           value={address}
                           onChange={e => setAddress(e.target.value)}  
                           required
                           className="entryInput"/><br/>
                           <li className="entryList">Latitude</li>
                    <input type="text"
                           placeholder="latitude"
                           value={latitude}
                           onChange={e => setLatitude(e.target.value)}  
                           required
                           className="entryInput"/><br/>
                           <li className="entryList">Longitude</li>
                    <input type="text"
                                  placeholder="longitude"
                                  value={longitude}
                                  onChange={e => setLongitude(e.target.value)}  
                                  required
                                  className="entryInput"/><br/>        
                    <button onClick={(e) => createEntry(e)}>
                        Create Entry 
                    </button>
                </ul>
            </div>
            <div className="viewEntry">
                <h1 style={{textDecoration: "underline"}}>Directory</h1>
                <button type="button" onClick= {fetchDirectory}>
                    Fetch Directory
                </button>
                <div>
                    <table className="table-container1">
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
                                records.map((item: any, index: number) => (
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
                                ):(
                                    <tr>
                                        <td colSpan={5}> Empty Directory</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <p>Total Store in Directory: {count}</p>
                <div className="pagination-container">
                    <nav>
                        <div className="pagination">
                            <span className="page-item">
                                    <span className="pageLink" onClick={prevPage}>Prev</span>
                            </span>
                            {numbers.map((n,i) => (
                                <span className = {`page-item ${currentPage === n ? "active": ""}`}
                                      key={i}
                                      style={{border: "none", padding: "0"}}>
                                        <span className="pageLink" onClick = {changeCurrentPage}>{n}</span>
                                    
                                </span>
                            ))}

                            <span className="page-item">
                                <span className="pageLink" onClick={nextPage}> Next </span>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}