export const initialState = {
    cart: [],
    user: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "DELETE_FROM_CART":
            const idx = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id)

            const updatedCart = [...state.cart] //create new cart
            if (idx >= 0) {
                updatedCart.splice(idx, 1)
            } else {
                console.log('nothing to remove')
            }

            return {
                ...state,
                cart: updatedCart
            }

        case 'GET_USER':
            return state
        default:
            return state
    }

}

export const getTotal = (cart) => cart.reduce((amount, item) => item.price + amount, 0)