import React,{useReducer} from 'react';

const initState = [
    { id: 1, name: "goods1", price: 98, qty: 2 },
    { id: 2, name: "goods2", price: 198, qty: 2 },
    { id: 3, name: "goods3", price: 998, qty: 1 },
];
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.id != action.id);
        case 'change':
            return state.map(item => {
                if (item.id === action.id) {
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return []
        default:
            throw new Error('type error');
    }
}

export const ctx = React.createContext(null);

export function Provider(props){
    const [goodslist,dispatch] = useReducer(reducer,initState);
    return (
        <ctx.Provider value={[goodslist,dispatch]}>
            {props.children}
        </ctx.Provider>
    )
}
