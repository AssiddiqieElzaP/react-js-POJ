import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Reangcle1img from '../../asset/gambar/dicovery/Rectangle 29.png'
// import Reangcle2img from '../../asset/gambar/dicovery/Rectangle 29 (1).png'
// import Reangcle3img from '../../asset/gambar/dicovery/Rectangle 29 (2).png'
// import Reangcle4img from '../../asset/gambar/dicovery/Rectangle 29 (3).png'

function MostPopular() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/destination-detail")
    }

    const [mostPick] = useState(
        [
            {
                id: 1,
                title: 'Nusa Penida',
                img: 'http://localhost:3000/static/media/Rectangle%2029.babf3c981c05c4854ff3.png',
                place: 'Kelungkung, Bali'
            },
            {
                id: 2,
                title: 'Pulau Komodo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(1).f72446c65f789d7b7633.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 3,
                title: 'Candi Borobudur',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(2).8c45d8532d00dabb566b.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 4,
                title: 'Gunung Bromo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(3).b1b1719c71b48423f996.png',
                place: 'Nusa Tenggara Timur'
            },
        ]
    )

    const MostPick = () => {
        return mostPick.map((pick) => {
            return (
                <div key={pick.id} className='containerImg'>
                    <img src={pick.img} alt='...'/>
                    <div className='bottomLeft'><span>{pick.title}</span><br/>{pick.place}</div>
                </div>
            )
        })
    }
  return (
    <>
    <div class="section-most-popular">
          <div class="container">
              <div class="content1">
                  <div class="content-left">
                      <p>Recommend</p>
                      <h3>Most Picked Destination</h3>
                  </div>
                  <div class="content-right">
                      <div><a href="/"><button>See all</button></a></div>
                  </div>
              </div>
              <div onClick={handleClick}>
                <div class="content2">
                  <MostPick/>
              </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default MostPopular
