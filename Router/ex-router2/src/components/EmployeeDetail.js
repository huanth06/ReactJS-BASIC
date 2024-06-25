import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export default function EmployeeDetail() {
    let navigate = useNavigate();
    let data = useLocation();
    let employee = data.state.obj;
    return (
        <>
            <h2>Employee Detail</h2>
            <table className='table'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col"></th>
                </tr>
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td><button type="" onClick={() => {
                        navigate('/employee')
                    }}>Back To List</button></td>
                </tr>
            </table>
        </>
    )
}
