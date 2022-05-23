import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'


const Search = () => {
    const {openMenu, setOpenMenu} = useGlobalContext()
    const {openSearch, setOpenSearch} = useGlobalContext()
    const {showResults, setShowResults} = useGlobalContext()
    const searchValue = React.useRef('')
    const {searchTerm,setSearchTerm} = useGlobalContext()
    const {coffeeList} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const searchCoffee = () => {
        setSearchTerm(searchValue.current.value)
    }

    if(searchTerm === ''){
        setShowResults(false)
    } else {
        setShowResults(true)
    }

        return (
            <div 
                className={openSearch ? "search__container" : "search__container close"}
            >
                <form 
                    className="search__form" 
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        id="search__input"
                        ref={searchValue} 
                        placeholder="Search coffee"
                        onChange={searchCoffee}
                    />
                </form>
                <div 
                    className={showResults ? 'search__results' : "search__results close"}
                >
                    {coffeeList.slice(0, 6).map((item)=> {
                        const {
                            id,
                            type,
                            index,
                            image,
                            title,
                            short
                        } =item
                        return (
                            <Link
                            to={`/${type}/${id}`}
                            key={index}
                            className="search__link"
                            onClick={() => setOpenSearch(false)}
                        >
                            <div 
                                className="img__cont"
                                style={{ backgroundImage:`url(${image})` }}
                            >   
                            </div>

                            <div className="search__info">
                                <h6
                                className="hero__tag" 
                                >{type}</h6>
                                <h3>{title}</h3>    
                                <p>{short}</p>    
                            </div>
                        </Link> 
                        )
                    })}
                </div>
            </div>
    
        )
    


    
}

export default Search;