import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from "react-router-dom";
import { useDetectClickOutside } from 'react-detect-click-outside';
import {useDispatch} from 'react-redux'
import { setUsername,setAllAccounts} from "../redux/userReducer";

const Logout = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const accounts = user.allaccounts;
    const [profile,setProfile] = useState({});
    const [display, setDisplay] = useState(false)
    const history = useHistory();

    const closeLogoutWindow = () => {
        setDisplay(false)
    }
    const ref = useDetectClickOutside({ onTriggered: closeLogoutWindow });

    useEffect(() => {
        setProfile(accounts.filter(acc => {
            if(acc.name === user.username)
            {
                return acc
            }
            else{
                return null
            }
        }))
    },[user,accounts])
    
    
    const LogoutClick = (e) =>{
        setDisplay(true)
    }

    const ListClick = (e) => {
        setDisplay(false)
        if(e.target.alt){
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
    const Signoutclick = (e) => {
        history.push('/');
    }
    return(
        <div className="logout" id="logout" ref={ref}>
            {profile.length > 0 && 
            <div>
                <img src={profile[0].profilepicture} alt="profilepic" />
                <span 
                    style={{cursor: 'pointer'}} 
                    onClick={(e) => LogoutClick(e)}
                > 
                    {profile[0].name} 
                </span>
            </div>
            }
            {display && 
                <div className="logout-window" id="logout-window" >
                    <img id="logout-img" src={profile[0].profilepicture} alt="profilepic" />
                    <p className="logout-p">{profile[0].name}</p>
                    <p className="logout-p">{profile[0].email}</p>
                    <ul>
                        {
                            accounts.map((acc) => {
                                if(acc.name !== profile[0].name)
                                {
                                    console.log(acc.id)
                                return(
                                    
                                    <li key={acc.id}
                                        onClick={(e) => ListClick(e)} 
                                    >
                                        <img src={acc.profilepicture} alt={acc.name} key={acc.id} />
                                        {acc.name}
                                    </li>
                                )}
                                else return <span key={acc.id}></span>
                            })
                        }
                    </ul>
                    <button onClick={(e) => Signoutclick(e)}>Sign Out</button>
                </div>

            }
        </div>
    );
}

export default Logout;