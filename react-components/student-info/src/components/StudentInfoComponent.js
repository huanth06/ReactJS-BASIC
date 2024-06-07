import React, { Component } from 'react'
const students = [
    {
        id: 1,
        name: 'A',
        age: 18,
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'B',
        age: 19,
        address: 'Hue'
    },
    {
        id: 3,
        name: 'C',
        age: 20,
        address: 'Da Nang'
    },
    {
        id: 4,
        name: 'C',
        age: 21,
        address: 'TPHCM'
    },
]
export default class StudentInfoComponent extends Component {
 
  render() {
    return (
        <div>
            <table>
                <caption>Students</caption>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {students.map(student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
  }
}
