import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/get_all_users')
            if (res.status == 200) {
                setData(res.data.data)
                console.log(res.data.data)
            } else {
                return alert(res.data.message)
            }
        } catch (e) {
            return alert(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <section id='portfolio-details' className='portfolio-details'>
                <div className='container'>
                    <div className='row gy-4'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-8'>
                            <div className='portfolio-details-slider swiper'>
                                <div className='swiper-wrapper align-items-center'>
                                    <Slider {...settings}>
                                        {data.length > 0 ? (
                                            data.map(val => (
                                                <Link
                                                    to={'/view/' + val.id}
                                                    key={val.id}
                                                >
                                                    <div className='swiper-slide'>
                                                        <h2>
                                                            {val.first_name +
                                                                ' ' +
                                                                val.last_name}
                                                        </h2>
                                                        <img
                                                            src={
                                                                '../images/' +
                                                                val.img
                                                            }
                                                            alt=''
                                                        />
                                                    </div>
                                                </Link>
                                            ))
                                        ) : (
                                            <div>No Users found</div>
                                        )}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
