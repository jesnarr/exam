import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const [data, setData] = useState([])
    const params = useParams()
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/view/' + params.id)
            if (res.status == 200) {
                setData(res.data.data)
                setLoading(false)
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

    if (loading) return null

    return (
        <section id='portfolio-details' className='portfolio-details'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-8'>
                        <div className='portfolio-details-slider swiper'>
                            <div className='swiper-wrapper align-items-center'>
                                <div className='swiper-slide'>
                                    <img
                                        src={
                                            data.img
                                                ? '../images/' + data.img
                                                : '../images/undraw_remotely_2j6y.svg'
                                        }
                                        alt=''
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='portfolio-info'>
                            <h3>User's Information</h3>
                            <ul>
                                <li>
                                    <strong>Full Name</strong>:{' '}
                                    {data.first_name +
                                        ' ' +
                                        data.middle_name +
                                        ' ' +
                                        data.last_name}
                                </li>
                                <li>
                                    <strong>Email</strong>: {data.email}
                                </li>
                                <li>
                                    <strong>Date Created</strong>:{' '}
                                    {data.created_at}
                                </li>
                            </ul>
                        </div>
                        <div className='portfolio-description'>
                            <h2>Bio</h2>
                            <p>{data.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage
