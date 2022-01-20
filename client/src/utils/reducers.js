import {
    UPDATE_TICKETS,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    TOGGLE_CART,
    CHECK_ORDERS
} from './actions';

const defaultState = {
    tickets: [],
    cart: [],
    cartOpen: false,
    orders: []
}

export default function reducer (state = defaultState, action) {
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
                cart: [...state.cart, action.ticket]
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.tickets]
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(ticket => {
                return ticket._id !== action._id;
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
                cart: state.cart.map(ticket => {
                    if (action._id === ticket._id) {
                        ticket.purchaseQuantity = action.purchaseQuantity;
                    }
                    return ticket;
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

        case CHECK_ORDERS:
            return {
                ...state,
                orders: [...action.orders]
            }

        default:
            return state;
    }
};

