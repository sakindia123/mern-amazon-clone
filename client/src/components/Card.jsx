import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { useStateValue } from '../context/StateProvider'

const Card = ({ id, title, price, image, rating }) => {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = (e) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_TO_CART',
            payload: { id, title, price, image, rating }
        })
    }

    return (
        <Container>
            <Image>
                <img src='https://images-eu.ssl-images-amazon.com/images/I/41ezRvTwcaL._AC_SR400,600_.jpg'
                    alt='pic' />
            </Image>
            <Info>
                <h4>{title}</h4>
                <FaStar color='#ff9900' size={25} />
                <p>₹{price}</p>
                <button onClick={addToCart}>Add To Cart</button>
            </Info>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`

const Image = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:20px;
flex:0.3;

img{
    width:150px;
    height:200px;
}
`

const Info = styled.div`
text-align:center;
align-items:center;
padding:5px;
display:flex;
flex:0.7;
flex-direction:column;

h4{
    font-size:15px;
    text-align:center;
    align-items:center;
    display:flex;
    margin:10px;
}

button{
width:55%;
border:none;
outline:none;
height:35px;
background-color:#ff9900;
border-radius:8px;
cursor:pointer;
}
`

export default Card