import React,{useState, useRef} from 'react';
import '../Style/Admin.css'; 
import { auth } from '../Firebase-config'
import {
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth"
import { db } from '../Firebase-config'
import { collection, addDoc , getDocs, updateDoc, doc, setDoc} from 'firebase/firestore'
import { useGlobalContext } from '../context'

const Admin = () => {
    const {coffeeData} = useGlobalContext()

    const [newsModal, setNewsModal] = useState(false)
    const [editNewsModal, setEditNewsModal] = useState(false)
    const [discoveryModal, setDiscoveryModal] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})

    // DATA REFERENCE
    const dataRef = collection(db, "coffeeData")
    // const dataRef = doc(collection(db, "coffeeData"))

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch(error){
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    // ADD NEW POST TO DATABASE
    const [ident, setIdent] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const [index, setIndex] = useState('')
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [short, setShort] = useState('')
    const [descrip, setDescript] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [recipe, setRecipe] = useState('')
    const [needOne, setNeedOne] = useState('')
    const [needTwo, setNeedTwo] = useState('')
    const [needThree, setNeedThree] = useState('')
    const [btnOne, setBtnOne] = useState('')
    const [btnTwo, setBtnTwo] = useState('')
    const [btnThree, setBtnThree] = useState('')

    const dataLenght = async() =>{
        const data = await getDocs(dataRef)
        setIndex((data.docs.map((doc) =>({...doc.data()}))).length + 1)
    }
    dataLenght()

    // const dataId = async() =>{
    //     const data = await getDocs(dataRef)
    //     setIdent((data.docs.map((doc) =>({...doc.id}))))
    //     console.log(ident)
    // }
    // dataId()

    const clearInputs = ()=>{
        setType('')
        setId('')
        setIndex('')
        setImg('')
        setTitle('')
        setShort('')
        setDescript('')
        setDate('')
        setCategory('')
        setCountry('')
        setRecipe('')
        setNeedOne('')
        setNeedTwo('')
        setNeedThree('')
        setBtnOne('')
        setBtnTwo('')
        setBtnThree('')
    }

    const createPost = async () =>{
        await setDoc(doc(db,"coffeeData",id), {
            type: type,
            id: id,
            index: index,
            image: img,
            title: title,
            short: short,
            descript: descrip,
            date: date,
        })
    }

    const createDiscovery = async () =>{
        await setDoc(doc(db,"coffeeData",id), {
            type: type,
            id: id,
            index: index,
            image: img,
            title: title,
            short: short,
            descript: descrip,
            category: category,
            country: country,
            recipe: recipe,
            needOne: needOne,
            needTwo: needTwo,
            needThree: needThree,
            btnOne: btnOne,
            btnTwo: btnTwo,
            btnThree: btnThree,
        })
    }

    // EDIT ITEM
    const [editItem, setEditItem] = useState('')

    const editItemData = () => {
        coffeeData.map((item)=>{
            if(item.id === editItem){
                setType(item.type)
                setId(item.id)
                setIndex(item.index)
                setImg(item.image)
                setTitle(item.title)
                setShort(item.short)
                setDescript(item.descript)
                setDate(item.date)
                // console.log(item)
            }
        })
    }


    const updateCoffee = async () =>{
        const someDocRef = doc(db, "coffeeData", id)
        await updateDoc (someDocRef,{
            type: type,
            id: id,
            index: index,
            image: img,
            title: title,
            short: short,
            descript: descrip,
            date: date
        })
    }

    return (
        <div className="admin__page">
            <div className= "admin__cont" >
                <button
                    className='menu__btn blue__btn'
                    onClick={()=> setDiscoveryModal(true)}
                >
                    Add Discovery 
                </button>
                <button
                    className='menu__btn blue__btn'
                    onClick={()=> setNewsModal(true)}
                >
                    Add Trends/News
                </button>
                <button
                    className='signout__btn'
                    onClick={logout}
                >
                    Sign Out
                </button>
            </div>

            {/* EDIT CONTAINER */}
            <div className="edit__cont">
                <h1>Edit News or Discovery</h1>
                <div className="edit__cont--form">
                    <input 
                        type="text" 
                        className="edit__link--input" 
                        placeholder='Paste ID here'
                        onChange={(e)=> setEditItem(e.target.value)}
                    />
                    <button 
                        className="edit__link--btn"
                        onClick={()=>{
                            editItemData()
                            setEditNewsModal(true)
                        }}
                    >
                        Edit File
                    </button>
                </div>
                
            </div>

            <div className="admin__modal">

                {/* NEWS/TREDNS FORM 
                ********************/}
                <div className={newsModal ? "blog__form" : "blog__form hide"}>
                    <div className='form'>
                        <div className="form__left form__col">
                            <input 
                                placeholder='Type'
                                onChange={(e)=> setType(e.target.value)}
                                value={type}
                            />
                            <input 
                                placeholder='Id'
                                onChange={(e)=> setId(e.target.value)}
                                value={id}
                            />
                            <input 
                                placeholder='Image Link'
                                onChange={(e)=> setImg(e.target.value)}
                                value={img}
                            />
                            <input 
                                placeholder='Title'
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}
                            />
                            <input 
                                placeholder='Short'
                                onChange={(e)=> setShort(e.target.value)}
                                value={short}
                            />
                        </div>
                        <div className="form__right form__col">
                            <textarea name="textare" id="" cols="30" rows="10" placeholder='Descript'
                            onChange={(e)=> setDescript(e.target.value)}
                            value={descrip}
                            ></textarea>
                            <input 
                                placeholder='Date month/day/year'
                                onChange={(e)=> setDate(e.target.value)} 
                                value={date}
                            />
                            <div className="form__btns">
                                <button 
                                    className='form__btn pink__btn'
                                    onClick={()=>{
                                        createPost()
                                        clearInputs()
                                    }}
                                    >
                                    Add Trend/News
                                </button>
                                <button
                                    className='close__form--btn'
                                    onClick={()=> setNewsModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit --------NEWS/TREDNS FORM 
                ********************/}
                <div className={editNewsModal ? "blog__form" : "blog__form hide"}>
                    <div className='form'>
                        <div className="form__left form__col">
                            <input 
                                placeholder='Type'
                                onChange={(e)=> setType(e.target.value)}
                                value={type}
                            />
                            <input 
                                placeholder='Id'
                                onChange={(e)=> setId(e.target.value)}
                                value={id}
                            />
                            <input 
                                placeholder='Image Link'
                                onChange={(e)=> setImg(e.target.value)}
                                value={img}
                            />
                            <input 
                                placeholder='Title'
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}
                            />
                            <input 
                                placeholder='Short'
                                onChange={(e)=> setShort(e.target.value)}
                                value={short}
                            />
                        </div>
                        <div className="form__right form__col">
                            <textarea name="textare" id="" cols="30" rows="10" placeholder='Descript'
                            onChange={(e)=> setDescript(e.target.value)}
                            value={descrip}
                            ></textarea>
                            <input 
                                placeholder='Date month/day/year'
                                onChange={(e)=> setDate(e.target.value)} 
                                value={date}
                            />
                            <div className="form__btns">
                                <button 
                                    className='form__btn pink__btn'
                                    onClick={()=>{
                                        updateCoffee()
                                        clearInputs()
                                    }}
                                    >
                                    Update Trend/News
                                </button>
                                <button
                                    className='close__form--btn'
                                    onClick={()=> setEditNewsModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* DISCOVERY COFFEES FORM 
                ********************/}
                <div className={discoveryModal ? "blog__form" : "blog__form hide"}>
                    <div className='form'>
                        <div className="form__left form__col">
                            <input 
                                placeholder='Type'
                                onChange={(e)=> setType(e.target.value)}
                                value={type}
                            />
                            <input 
                                placeholder='Id'
                                onChange={(e)=> setId(e.target.value)}
                                value={id}
                            />
                            <input 
                                placeholder='Image Link'
                                onChange={(e)=> setImg(e.target.value)}
                                value={img}
                            />
                            <input 
                                placeholder='Category'
                                onChange={(e)=> setCategory(e.target.value)}
                                value={category}
                            />
                            <input 
                                placeholder='Country'
                                onChange={(e)=> setCountry(e.target.value)}
                                value={country}
                            />
                            <input 
                                placeholder='Title'
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}
                            />
                            <input 
                                placeholder='Short'
                                onChange={(e)=> setShort(e.target.value)}
                                value={short}
                            />
                        </div>
                        <div className="form__right form__col">
                            <textarea name="textare" id="" cols="30" rows="10" placeholder='Descript'
                            onChange={(e)=> setDescript(e.target.value)}
                            value={descrip}
                            ></textarea>
                            <textarea name="textare" id="" cols="30" rows="10" placeholder='Recipe'
                            onChange={(e)=> setRecipe(e.target.value)}
                            value={recipe}
                            className="recipe"
                            ></textarea>
                            <div className="need__cont">
                                <input 
                                    placeholder='needOne'
                                    onChange={(e)=> setNeedOne(e.target.value)} 
                                    value={needOne}
                                    className="need__input"
                                />
                                <input 
                                    placeholder='needTwo'
                                    onChange={(e)=> setNeedTwo(e.target.value)} 
                                    value={needTwo}
                                    className="need__input"
                                />
                                <input 
                                    placeholder='needThree'
                                    onChange={(e)=> setNeedThree(e.target.value)} 
                                    value={needThree}
                                    className="need__input"
                                />
                            </div>
                            <div className="need__cont">
                                <input 
                                    placeholder='btnOne'
                                    onChange={(e)=> setBtnOne(e.target.value)} 
                                    value={btnOne}
                                    className="need__input"
                                />
                                <input 
                                    placeholder='btnTwo'
                                    onChange={(e)=> setBtnTwo(e.target.value)} 
                                    value={btnTwo}
                                    className="need__input"
                                />
                                <input 
                                    placeholder='btnThree'
                                    onChange={(e)=> setBtnThree(e.target.value)} 
                                    value={btnThree}
                                    className="need__input"
                                />
                            </div>

                            <div className="form__btns">
                                <button 
                                    className='form__btn pink__btn'
                                    onClick={()=>{
                                        createDiscovery()
                                        clearInputs()
                                    }}
                                    >
                                    Add Discovery
                                </button>
                                <button
                                    className='close__form--btn'
                                    onClick={()=> setDiscoveryModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LOGIN FORM */}
            <div className={user ? "login__cont close" : "login__cont"}>
                <input 
                    type="email" 
                    className='login__email'
                    placeholder='Enter email' 
                    onChange={(e) =>{setLoginEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    className='login__password'
                    placeholder='Enter password' 
                    onChange={(e) =>{setLoginPassword(e.target.value)}}
                />
                <button
                    className='login__btn'
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>

    )
}

export default Admin