import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    const [{ cart }, dispatch] = useStateValue()
    const nav = useNavigate();

    return (
        <Container>
            <NavContainer>
                <Logo>
                    <img src='images/logo_home.png' alt='logo'
                        onClick={() => nav('/')} />
                </Logo>
                <SearchBox>
                    <input type='text' placeholder='Search...'></input>
                    <SearchIcon>
                        <AiOutlineSearch size={30} />
                    </SearchIcon>
                </SearchBox>
                <RightSection>
                    <NavBtn>
                        <span>Hello,</span>
                        <span>Guest</span>
                    </NavBtn>
                    <NavBtn>
                        <span>Returns</span>
                        <span>& Orders</span>
                    </NavBtn>
                    <CartIcon onClick={() => nav('/checkout')}>
                        <AiOutlineShoppingCart size={30} />
                        <p>{cart.length}</p>
                    </CartIcon>
                </RightSection>
            </NavContainer>

            <MobileSearchBox>
                <input type='text' placeholder='Search...'></input>
                <MobileSearchIcon>
                    <AiOutlineSearch size={30} />
                </MobileSearchIcon>
            </MobileSearchBox>
        </Container>
    )
}

const Container = styled.div`
height:65px;
width:100%;
display:flex;
position:relative;
align-items:center;
background-color:#232F3E;

@media only screen and (max-width:768px){
    height:125px;
    flex-direction:column;
}
`

const NavContainer = styled.div`
width:100%;
display:flex;
align-items:center;

@media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

const Logo = styled.div`
cursor:pointer;
margin-left:5px;

img{
width:100px;
}
`

const SearchBox = styled.div`
height: 35px;
flex: 1;
margin: 0px 15px;
display: flex;
align-items: center;

input{
    flex:1;
    height:100%;
    width:100%;
    border-radius:0 10 0 10px;
    border:none;
    outline:none;

    &::placeholder {
        padding-left: 10px;
      }

    &:hover {
        border: 1px solid #ff9900;
      }

      @media only screen and (max-width:768px){
            display:none;
      }
}

`

const MobileSearchBox = styled.div`
height:35px;
display:flex;
align-items:center;
padding:10px;
width:90%;
flex: 1;

input{
    height:100%;
    width:100%;
    border-radius:0 10 0 10px;
    border:none;
    outline:none;

    &::placeholder {
        padding-left: 10px;
      }

    &:hover {
        border: 1px solid #ff9900;
      }

      @media only screen and (min-width:768px){
        display:none;
    }
}
`

const SearchIcon = styled.div`
background-color:#ff9900;
height:37px;
width:45px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

@media only screen and (max-width:768px){
    display:none;
}
`

const MobileSearchIcon = styled.div`
background-color:#ff9900;
height:37px;
width:45px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

@media only screen and (min-width:768px){
    display:none;
}
`

const CartIcon = styled.div`
color:white;
margin-left:10px;
display:flex;
align-items:center;
cursor:pointer;

p{
    margin-left:10px;
    font-weight:700;
}
`

const RightSection = styled.div`
display: flex;
align-items: center;
width: fit-content;
justify-content: space-around;
height: 100%;
padding: 5px 15px;
`

const NavBtn = styled.div`
color:white;
height:80%;
display:flex;
margin-right:10px;
flex-direction:column;
justify-content:center;
cursor:pointer;
padding:5px;

span{
    &:nth-child(1){
        font-size:12px;
    }

    &:nth-child(2){
        font-size:14px;
        font-weight:700;
    }
}
`

export default Navbar