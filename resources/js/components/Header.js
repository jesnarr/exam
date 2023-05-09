import React from 'react'

const Header = () => {
    return (
        <div>
            <header id='header' className='header fixed-top'>
                <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
                    <a href='/' className='logo d-flex align-items-center'>
                        <img src='' alt='' />
                        <span>Home</span>
                    </a>
                    <nav id='navbar' className='navbar'>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <a href='/dashboard' className=''>
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
