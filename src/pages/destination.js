import React, { useState } from 'react'
import Group23img from '../asset/gambar/destination/Group 23.png'
import MostPopular2 from '../components/MostPopular2/MostPopular2'
import OurPackage from '../components/OurPackage/OurPackage'
import Discount from '../components/discount/Discount'
import Footer from '../components/Footer/Footer'
// import Reangcle1img from '../asset/gambar/dicovery/Rectangle 29.png'
// import Reangcle2img from '../asset/gambar/dicovery/Rectangle 29 (1).png'
// import Reangcle3img from '../asset/gambar/dicovery/Rectangle 29 (2).png'
// import Reangcle4img from '../asset/gambar/dicovery/Rectangle 29 (3).png'

function Destination() {
    const [popularDestination] = useState(
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
            {
                id: 5,
                title: 'Nusa Penida',
                img: 'http://localhost:3000/static/media/Rectangle%2029.babf3c981c05c4854ff3.png',
                place: 'Kelungkung, Bali'
            },
            {
                id: 6,
                title: 'Pulau Komodo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(1).f72446c65f789d7b7633.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 7,
                title: 'Candi Borobudur',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(2).8c45d8532d00dabb566b.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 8,
                title: 'Gunung Bromo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(3).b1b1719c71b48423f996.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 9,
                title: 'Nusa Penida',
                img: 'http://localhost:3000/static/media/Rectangle%2029.babf3c981c05c4854ff3.png',
                place: 'Kelungkung, Bali'
            },
            {
                id: 10,
                title: 'Pulau Komodo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(1).f72446c65f789d7b7633.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 11,
                title: 'Candi Borobudur',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(2).8c45d8532d00dabb566b.png',
                place: 'Nusa Tenggara Timur'
            },
            {
                id: 12,
                title: 'Gunung Bromo',
                img: 'http://localhost:3000/static/media/Rectangle%2029%20(3).b1b1719c71b48423f996.png',
                place: 'Nusa Tenggara Timur'
            },
        ]
        
    )
    
    const PopularDestination = () => {
        return popularDestination.map((destinasi) => {
            return (
            <div key={destinasi.id} className='containerImg'>
                <img src={destinasi.img}/>
                <div className='bottomLeft'><span>{destinasi.title}</span><br/>{destinasi.place}</div>
            </div>
            )
        })
    }
  return (
    <>
    {/* section top start */}
    <div className="section-top">
        <div className="container">
            <div className="content1">
                <div className="content-left">
                    <h1>Exploring Wonderful Indonesia</h1>
                    <p>At Wonderful Indonesia, we believe that travel should be an unforgettable experience, and we're dedicated to making sure that every moment you spend with us is one to remember. So why wait? Book your adventure today and discover the magic of Indonesia.</p>
                    <button>Explore Now <i className="fa-regular fa-circle-right"></i></button>
                </div>
                <div className="content-right">
                    <div className="border">
                        <img src={Group23img} alt="" style={{marginBottom:'75px'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* section top end */}


    {/* most popular2 start */}
    <MostPopular2/>
    {/* most popular2 end */}

    {/* our package start */}
    <OurPackage/>
    {/* our package end */}

    {/* wonderful start */}
    <div className="section-wonderful">
        <div className="content1">
            <h2>Wonderful Destination</h2>
            <p>More than just destination</p>
        </div>
        <div className="content2">
            <PopularDestination />
        </div>
    </div>
    {/* wonderful end */}

    {/* discount start */}
    <Discount/>
    {/* discount end */}

    {/* footer start */}
    <Footer/>
    {/* footer end */}
    </>
  )
}

export default Destination
