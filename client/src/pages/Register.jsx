import styled from 'styled-components'

const Register = () => {
    return (
        <Container>
            <Logo>
                <img src='images/logo.png' alt='logo' />
            </Logo>
            <FormBox>
                <h2>Create Account</h2>
                <InputBox>
                    <p><b>Name</b></p>
                    <input type="name" placeholder='John Doe' />
                </InputBox>
                <InputBox>
                    <p><b>Mobile number</b></p>
                    <input type="phone" placeholder='10 digits' />
                </InputBox>
                <InputBox>
                    <p><b>Email</b></p>
                    <input type="email" placeholder='test@test.com' />
                </InputBox>
                <InputBox>
                    <p><b>Password</b></p>
                    <input type="password" placeholder='password...' />
                </InputBox>
                <RegisterBtn>Continue</RegisterBtn>
                <Terms>
                    By continuing, you agree to Amazon's <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940'>Conditions of Use</a> and <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380'>Privacy Notice</a>.
                </Terms>
            </FormBox>
            <LoginBtn>Back to Login</LoginBtn>
        </Container>
    )
}

export default Register

const Container = styled.div`
width:80%;
display:flex;
flex-direction:column;
align-items:center;
min-width:425px;
padding:12px;
margin:auto;
`

const Logo = styled.div`
width:110px;

img{
width:100%;
}
`
const FormBox = styled.form`
margin-top:55px;
border: 1px solid lightgrey;
display:flex;
flex-direction:column;
height:620px;
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

    &:hover {
        border: 1px solid #ff9900;
      }
}
`
const LoginBtn = styled.button`
width:45%;
margin-top:35px;
border:none;
outline:none;
height:35px;
background-color:#ff9900;
border-radius:8px;
cursor:pointer;
`
const Terms = styled.div`
margin-top:25px;
font-size:14px;

a{
    text-decoration:none;
    color:#146eb4;
}
`
const RegisterBtn = styled.button`
margin-top:20px;
width:50%;
height:30px;

&:hover {
    border: 1px solid grey;
    background-color:#dfdfdf;
    cursor:pointer;
  }
`