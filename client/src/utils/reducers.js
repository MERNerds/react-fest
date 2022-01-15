import {
    UPDATE_TICKETS,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';

const defaultState = {
    tickets: [],
    cart: [],
    cartOpen: false
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_TICKETS:
            return {
                ...state,
                tickets: [...action.tickets],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, ...action.tickets]
            }

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.ticets]
            }

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(ticket => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };

        default:
            return state;
    }
};