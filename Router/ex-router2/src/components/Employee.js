import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Employee() {
    let navigate = useNavigate();
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
  return (
    <>
        <h2>Employee List</h2>
        <table className='table'>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col"></th>
            </tr>
            {employees.map(item=>(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><button type="" onClick={()=>{
                        navigate('/employee/employee-detail/'+ item.id, {state:{obj:item}})
                    }}>Detail</button></td>
                </tr>
            ))}
        </table>
    </>
  )
}
