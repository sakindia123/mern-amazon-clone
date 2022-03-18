import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';

const Container = styled.div`
width:100%;
`

function App() {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Container>
    );
}

export default App;