import styled from 'styled-components'
import { FaStar } from "react-icons/fa";

const Card = () => {
    return (
        <Container>
            <Image>
                <img src='https://images-eu.ssl-images-amazon.com/images/I/41ezRvTwcaL._AC_SR400,600_.jpg'
                    alt='pic' />
            </Image>
            <Info>
                <h4>Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)</h4>
                <FaStar size={25} />
                <p>₹39,990.00</p>
                <button>Add To Cart</button>
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