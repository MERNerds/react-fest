import React from "react";
// replacing this with redux
// import { useStoreContext } from "../../utils/GlobalState";
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
    // added state at first but realized it was not needed
    const dispatch = useDispatch()

    // refactored to above for Redux
    // const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });

            idbPromise('cart', 'delete', { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });

            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <div className="flex-row">
            {/* <div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                />
            </div> */}
            <div>
                <div>{item.ticketName}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                    />
                    <span role="img" aria-label='trash' onClick={() => removeFromCart(item)}>🗑️</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;