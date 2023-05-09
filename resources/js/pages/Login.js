import React, { useState } from 'react'
// import '../../css/login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const form_data = new FormData()
        if (!email || !password)
            return alert('Please fill up the required fields')
        const res = await axios.post('/login')
    }

    return (
        <div className='content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            src='images/undraw_remotely_2j6y.svg'
                            alt='Image'
                            className='img-fluid'
                        />
                    </div>
                    <div className='col-md-6 contents'>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                                <div className='mb-4'>
                                    <h3>Sign In</h3>
                                </div>
                                <div className='form-group first'>
                                    <input
                                        className='form-control'
                                        id='email'
                                        type='email'
                                        placeholder='Username *'
                                        value={email}
                                        name='email'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div
                                    className='form-group last mb-4'
                                    style={{ marginTop: 10 + 'px' }}
                                >
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        placeholder='Password *'
                                        name='password'
                                        value={password}
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='d-flex mb-5 align-items-center'>
                                    <label className='control control--checkbox mb-0'>
                                        <span className='caption'>
                                            Remember me
                                        </span>
                                        <input
                                            type='checkbox'
                                            checked={true}
                                            onChange={e => console.log(e)}
                                        />
                                        <div className='control__indicator'></div>
                                    </label>
                                    <span className='ml-auto'>
                                        <a href='#' className='forgot-pass'>
                                            Forgot Password
                                        </a>
                                    </span>
                                </div>

                                <input
                                    type='submit'
                                    value='Log In'
                                    className='btn btn-block btn-primary'
                                    id='btn-submit'
                                    onClick={() => handleSubmit()}
                                />

                                <span className='d-block text-left my-4 text-muted'>
                                    &mdash; or login with &mdash;
                                </span>

                                <div className='social-login'>
                                    <a href='#' className='facebook'>
                                        <span className='icon-facebook mr-3'></span>
                                    </a>
                                    <a href='#' className='twitter'>
                                        <span className='icon-twitter mr-3'></span>
                                    </a>
                                    <a href='#' className='google'>
                                        <span className='icon-google mr-3'></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
