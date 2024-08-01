const initialState = {
    weblist: [],
    currentWebList: null,
}

const webListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEBLIST':
            return { ...state, weblist: [...state.weblist, action.data] }
        case 'GET_WEBLIST':
            return { ...state, weblist: action.data }
        case 'UPDATE_WEBLIST':
            console.log("UPDATE_WEBLIST", action.data)
            console.log("initialState", state)
            return { ...state, weblist: state.weblist.map((weblist) => weblist._id === action.data._id ? action.data : weblist) }
        case 'GET_WEBLIST_CRB':
            return { ...state, weblist: action.data }
        default:
            return state
    }
}

export default webListReducer;