const SET_USERNAME = 'set-username'
const SET_ALLACCOUNTS = 'set-allaccounts'

const initialState = {
    username:'',
    allaccounts:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case SET_USERNAME:return {
            ...state,
            username:action.payload
        }

        case SET_ALLACCOUNTS:return{
            ...state,
            allaccounts:action.payload
        }

        default: return state
    }
}

export const setUsername = (username) => {
    return{
        type:SET_USERNAME,
        payload:username
    }
}

export const setAllAccounts = (allaccounts) => {
    return{
        type:SET_ALLACCOUNTS,
        payload:allaccounts
    }
}

export default reducer