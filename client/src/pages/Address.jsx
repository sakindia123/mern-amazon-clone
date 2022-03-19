import { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useStateValue } from '../context/StateProvider'

const Address = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [house, setHouse] = useState('')
    const [area, setArea] = useState('')
    const [landmark, setLandmark] = useState('')
    const [state, setState] = useState('')
    const [{ }, dispatch] = useStateValue();

    const addressHandler = (e) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_ADDRESS',
            payload: { name, phone, house, area, landmark, state }
        })
    }

    return (
        <>
            <Navbar />
            <Container>
                <FormBox>
                    <h2>Sign In</h2>
                    <InputBox>
                        <p><b>Name</b></p>
                        <input type="text" placeholder='John Doe'
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <p><b>Mobile no</b></p>
                        <input type="phone" placeholder='1234567890'
                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <p><b>House no,Building,Apartment</b></p>
                        <input type="text" placeholder='Sector 123,Noida'
                            value={house} onChange={(e) => setHouse(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <p><b>Area,Street,Sector,Village,City</b></p>
                        <input type="text" placeholder='Delhi'
                            value={area} onChange={(e) => setArea(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <p><b>Landmark</b></p>
                        <input type="text" placeholder='GIP Mall'
                            value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <p><b>State/UT</b></p>
                        <input type="text" placeholder='Uttar Pradesh'
                            value={state} onChange={(e) => setState(e.target.value)} />
                    </InputBox>
                    <LoginBtn onClick={addressHandler}>Submit</LoginBtn>
                </FormBox>
            </Container>
        </>
    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-width:425px;
padding:12px;
`

const FormBox = styled.form`
margin-top:35px;
border: 1px solid lightgrey;
display:flex;
flex-direction:column;
height:800px;
width:50%;
align-items:center;
justify-content:center;
padding:12px;

h3{
    font-size:35px;
    align-self:flex-start;
}
`

const InputBox = styled.div`
width:100%;
padding:8px;

p{
    font-size:17px;
}

input{
    width: 95%;
    height:30px;
    border-radius: 5px;
    outline:none;
    border: 1px solid lightgrey;

    &::placeholder {
        padding-left: 10px;
      }
      
    &:hover {
        border: 1px solid #ff9900;
      }
}
`
const LoginBtn = styled.button`
width:75%;
margin-top:35px;
border:none;
outline:none;
height:35px;
background-color:#ff9900;
border-radius:8px;
cursor:pointer;
`

export default Address