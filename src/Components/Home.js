import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux'
import { setUsername,setAllAccounts} from "../redux/userReducer";

const Canvas = () => {
    const dispatch = useDispatch()
    const [accounts, setAccounts] = useState([]);
    const history = useHistory();
    useEffect( () => { 
            
            fetch('https://panorbit.in/api/users.json')
            .then(res => res.json())
            .then(data => {
                setAccounts(data.users)
            })

    },[])

    const ListClick = e => {
        if(e.target.alt)
        {
            dispatch(setUsername(e.target.alt))
            dispatch(setAllAccounts(accounts))
            history.push('/profile')
        }
        else{
            dispatch(setUsername(e.target.textContent))
            dispatch(setAllAccounts(accounts))
            history.push('/profile')
        }
        
    }

    return ( 
        <div className="container">
            <svg viewBox="0 0 500 500" 
                preserveAspectRatio="xMinYMin meet">
              
                <path d="M0, 100 C150, 200 350,
                    0 500, 100 L500, 00 L0, 0 Z"
                >
                </path>
            </svg>
            <div id="canvas" >
                <h1>Select an account</h1>
                <div id="accounts">
                    <ul id="accounts_list">
                        {accounts ? accounts.map(account => {
                            return(
                                <li key={account.id} 
                                    id="accounts_name" 
                                    onClick={(e) => ListClick(e) }
                                >
                                    <img src={account.profilepicture} alt={account.name} />
                                    {account.name}
                                </li>
                            ) 
                        }) : <h1>none</h1>}
                    </ul>
                </div>
            </div>
        </div>
        
     );
}
 
export default Canvas;