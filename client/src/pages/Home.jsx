import styled from 'styled-components'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero>
        <img src='images/hero.jpg' alt='hero' />
        <img src='images/mobile-hero.jpg' alt='hero' />
      </Hero>
      <Grid>
        <Card price={2500} title={'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage'} />
        <Card price={2500} title={'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage'} />
        <Card price={2500} title={'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage'} />
        <Card price={2500} title={'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage'} />
        <Card price={2500} title={'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage'} />
      </Grid>
    </Container>
  )
}

const Container = styled.div`
width:100%;
`

const Hero = styled.div`
width:100%;

img{
    width:100%;
    -webkit-mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 2),
        rgba(0, 0, 0, 0.95),
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0)
      );

      &:nth-child(2) {
        display: none;
      }

      @media only screen and (max-width:768px){
          &:nth-child(1){
              display:none;
          }

            &:nth-child(2){
                display:block;
                -webkit-mask-image: none;
            }
      }
`

const Grid = styled.div`
width:100%;
justify-content:center;
place-items:center;
display:grid;
grid-auto-rows: 420px;
grid-template-columns: repeat(4, 280px);
grid-gap: 20px;

@media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  
  @media only screen and (min-width: 768px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`

export default Home