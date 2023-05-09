import React, { useState, useEffect } from 'react'
import { Pencil, Trash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [data, setData] = useState([])
    const [tempData, setTempData] = useState([])
    const [search, setSearch] = useState('')
    const fetchData = async () => {
        try {
            const res = await axios.get('/api/get_all_users')
            if (res.status == 200) {
                setData(res.data.data)
                setTempData(res.data.data)
                console.log(res.data.data)
            } else {
                return alert(res.data.message)
            }
        } catch (e) {
            return alert(e)
        }
    }

    const handleSearch = search => {
        setSearch(search)
        const columns = ['email', 'first_name', 'last_name', 'about']
        const newData = tempData.filter(val =>
            search
                .toLowerCase()
                .split(' ')
                .every(d => {
                    for (var i = 0; i < columns.length; i++) {
                        if (
                            typeof val[columns[i]] !== 'undefined' &&
                            val[columns[i]].toLowerCase().includes(d)
                        ) {
                            return true
                        }
                    }
                })
        )
        setData(newData)
    }

    const removeUser = async id => {
        try {
            const res = await axios.get('/api/delete/' + id)
            if (res.status == 200) {
                alert(res.data.message)
                fetchData()
            } else return alert(res.message)
        } catch (e) {
            return alert(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='mt-5'>
            <div className='container'>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-md-6'></div>
                        <div className='col-md-5'>
                            <input
                                type='text'
                                placeholder='Search keyword'
                                onChange={e => handleSearch(e.target.value)}
                                value={search}
                                className='form-control'
                            />
                        </div>
                        <div className='col-md-1'>
                            <button type='button' className='btn btn-primary'>
                                Add
                            </button>
                        </div>
                    </div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Full Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>About</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map(val => (
                                    <tr key={val.id}>
                                        <td>
                                            <Link to={'/view/' + val.id}>
                                                {val.last_name}
                                                {', ' + val.first_name + ' '}
                                                {val.middle_name
                                                    ? val.middle_name
                                                    : ''}
                                            </Link>
                                        </td>
                                        <td>{val.email}</td>
                                        <td>
                                            {val.about.length > 50
                                                ? val.about.slice(0, 50 - 1) +
                                                  '...'
                                                : val.about}
                                        </td>
                                        <td>
                                            <a href={'/update/' + val.id}>
                                                <Pencil />
                                            </a>
                                            <a
                                                href='#'
                                                onClick={() =>
                                                    removeUser(val.id)
                                                }
                                            >
                                                <Trash />
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>No Results Found </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
