const initState = {
    menu:[],
    show:true
}

function globalReducer(state=initState,action){
    switch(action.type){
        case 'showmenu':
            return {
                ...state,
                show:true
            }
        case 'hidemenu':
            return {
                ...state,
                show:false
            }
        default:
            return state;
    }
}

export default globalReducer;