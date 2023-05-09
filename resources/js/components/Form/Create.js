import React, { useState } from 'react'
import '../../../css/create.css'

const Create = () => {
    const [img, setImg] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [bio, setBio] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleChangeImage = e => {
        setImgURL(URL.createObjectURL(e.target.files[0]))
        setImg(e.target.files[0])
    }

    const handleSubmit = async () => {
        const data = new FormData()
        if (!firstName || !lastName || !email || !password || !bio || !img)
            return alert('Please fill up the required fields')

        data.append('first_name', firstName)
        data.append('middle_name', middleName)
        data.append('last_name', lastName)
        data.append('email', email)
        data.append('password', password)
        data.append('bio', bio)
        data.append('img', img)

        console.log(data)
        try {
            const res = await axios.post('/api/add_user', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if (res.status == 200) return (window.location.href = '/dashboard')
            else return alert(res.data.message)
        } catch (e) {
            return alert(e)
        }
    }

    return (
        <section id='contact' className='contact'>
            <div className='container' data-aos='fade-up'>
                <header className='section-header'>
                    <p>Create new User</p>
                </header>

                <div className='row gy-4'>
                    <div className='col-lg-6'>
                        <div className='row gy-4'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6'>
                                <div className='info-box'>
                                    <img
                                        src={
                                            imgURL
                                                ? imgURL
                                                : '/images/undraw_remotely_2j6y.svg'
                                        }
                                        alt='Photo'
                                        style={{
                                            width: 100 + '%',
                                            height: 100 + '%'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='row gy-4'>
                            <div className='col-md-4'>
                                <input
                                    type='text'
                                    name='first_name'
                                    className='form-control'
                                    placeholder='First Name *'
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='col-md-4'>
                                <input
                                    type='text'
                                    name='middle_name'
                                    className='form-control'
                                    placeholder='Middle Name'
                                    value={middleName}
                                    onChange={e =>
                                        setMiddleName(e.target.value)
                                    }
                                />
                            </div>
                            <div className='col-md-4'>
                                <input
                                    type='text'
                                    name='last_name'
                                    className='form-control'
                                    placeholder='Last Name *'
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='col-md-6 '>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Email *'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='col-md-6 '>
                                <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Password *'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='col-md-12'>
                                <textarea
                                    className='form-control'
                                    name='bio'
                                    rows='6'
                                    placeholder='Bio *'
                                    value={bio}
                                    onChange={e => setBio(e.target.value)}
                                ></textarea>
                            </div>
                            <label>Image</label>
                            <form>
                                <input
                                    type='file'
                                    id='img'
                                    name='img'
                                    accept='image/*'
                                    multiple={false}
                                    onChange={e => handleChangeImage(e)}
                                />
                            </form>
                            <div className='col-md-12 text-center'>
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                    onClick={() => handleSubmit()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Create
