import React, {useEffect, useState, useContext} from 'react';
import data from './Data.json';
import { db } from './Firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [coffeeList, setCoffeeList] = useState(data)
    const [showResults, setShowResults] = useState(false)
    const [coffeeData, setCoffeeData] = useState([])
    const dataRef = collection(db, "coffeeData")

    // set coffee database
    useEffect(()=>{
        const getData = async() =>{
            const data = await getDocs(dataRef)
            setCoffeeData(data.docs.map((doc) =>({...doc.data()})))
        }
        getData()
        // console.log(coffeeData)
    },[])

    // Search Box
    useEffect(() => {
    const CoffeeResults = data.filter((value) =>{
        if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
        }
        })
        setCoffeeList(CoffeeResults)
    },[searchTerm])

    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }


    return <AppContext.Provider value={{
        openMenu,
        setOpenMenu,
        openSearch,
        setOpenSearch,
        searchTerm,
        setSearchTerm,
        coffeeList,
        showResults,
        setShowResults,
        data,
        handleClick,
        coffeeData
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}