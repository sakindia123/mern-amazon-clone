import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { getTotal } from '../context/Reducer'
import { useStateValue } from '../context/StateProvider'

const Checkout = () => {
    const [{ cart }, dispatch] = useStateValue();

    const deleteFromCartHandler = (e, id) => {
        e.preventDefault()

        dispatch({
            type: 'DELETE_FROM_CART',
            id: id
        })
    }

    console.log(cart)
    return (
        <Container>
            <Navbar />
            <InnerContainer>
                <Cart>
                    <h3>Shopping Cart</h3>
                    {
                        cart.map((cartItem) => {
                            <CartItem>
                                <Image>
                                    <img src={cartItem.image} alt='pic' />
                                </Image>
                                <Info>
                                    <h4>{cartItem.title}</h4>
                                    <p>{cartItem.price}</p>
                                    <button onClick={deleteFromCartHandler}>Delete</button>
                                </Info>
                            </CartItem>
                        })
                    }
                </Cart>

                <Total>
                    <p>Subtotal:({cart.length} items):<b>₹{getTotal(cart)}</b></p>
                    <button>Proceed to Checkout</button>
                </Total>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width:100%;
position:relative;
border:1px solid red;
`

const InnerContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding:10px;

h3{
    text-align:center;
    border-bottom: 1px solid lightgrey;
    padding-bottom:17px;
}
`

const Cart = styled.div`
flex: 0.7;

h3{
    font-size:25px;
    
}
`

const CartItem = styled.div`
display:flex;
align-items:center;
`

const Image = styled.div`
flex: 0.3;

img{
    width:150px;
    height:200px;
}
`

const Info = styled.div`
flex: 0.7;

h4{
font-size:15px;
}

p{
    font-size:12px;
    font-weight:500;
}

button{
    border:none;
    outline:none;
    cursor:pointer;
    background-color:transparent;
    color:#146eb4;

    &:hover{
        text-decoration:underline;
    }
}
`

const Total = styled.div`
flex: 0.3;

button{
width:25%;
margin-top:35px;
border:none;
outline:none;
height:35px;
background-color:#ff9900;
border-radius:8px;
cursor:pointer;
}
`

export default Checkout