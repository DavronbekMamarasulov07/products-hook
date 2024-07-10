import { Carousel } from 'antd'
import "./Hero.css"
import Container from '../container/Container'

const Hero = () => {
  return (
    <Container>
      <div className='hero'>
        <Carousel className='carusel' speed={1000} autoplay>
          <div className='carusel_item'>
            <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p06qpzkt.jpg" alt="" />
          </div>
          <div className='carusel_item'>
            <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p06qpzkt.jpg" alt="" />
          </div>
          <div className='carusel_item'>
            <img src="https://assets.newatlas.com/dims4/default/50abdad/2147483647/strip/true/crop/1440x810+0+135/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fextra-dimensions-3.jpg" alt="" />
          </div>
          <div className='carusel_item'>
            <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p06qpzkt.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </Container>
  )
}

export default Hero
