const initState = {
    goodslist:[],
    // totalPrice:0
}

function cartReducer(state=initState,action){
    switch(action.type){
        case 'add_to_cart':
            return {
                ...state,
                goodslist:[action.goods,...state.goodslist]
            }
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item._id!==action._id)
            }
        case 'clear_cart':
                return {
                    ...state,
                    goodslist:[]
                }
        default:
            return state;
    }
}

export default cartReducer;