import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'

const Container = styled.div`
width:100vw;
`

function App() {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<h1>Home</h1>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Container>
    );
}

export default App;
