import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: '', phone: '', email: '' },
      isValid: false,
      indexSelected: -1
    };
  }
  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkInvalidForm())
  }
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index
    })
  }
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }
  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = this.state.studentList
      if (this.state.indexSelected > -1) {

      } else {
        newList.push(this.state.form);
      }
      this.setState({
        form: { name: '', phone: '', email: '' }
      })
      console.log(this.state);
    }
  }
  handleDelete = (index) => {
  }
  render() {
    const { studentList, form } = this.state
    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={this.state.form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input type="number" value={this.state.form.phone} name="phone"  onChange={this.handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" value={this.state.form.email}  onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <table>
            <thead>
              <tr>
                {/* Tạo Table header Name, Phone, Email, Action */}
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {/* Sử dụng phương thức map() để in danh sách student
                    Tạo button Edit với onClick gọi tới hàm handleSelect
                    Tạo button Delete với onClick gọi tới hàm handleDelete
                */ }
                {
                  this.state.studentList.map((item,i)=>(
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td><button onClick={this.handleSelect()}>Edit</button></td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
