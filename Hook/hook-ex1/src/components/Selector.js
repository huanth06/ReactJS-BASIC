import {useState} from 'react'

export default function Selector() {
    let [selectedCar, setSelectedCar] = useState({
        car: 'Pagani',
        color: 'Black'
    });
    let choice = e =>{
        setSelectedCar({...selectedCar,[e.target.name]:e.target.value});
    }
  return (
    <>
     Select a car :
      <select name='car'
        onChange={e => {
          choice(e);
        }}
      >
        <option value="Pagani">Pagani</option>
        <option value="Bugatti">Bugatti</option>
        <option value="Spyros Panopoulos Automotive">Spyros Panopoulos Automotive</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Rolls-Royce">Rolls-Royce</option>
      </select>
      Select a color :
      <select name='color'
        onChange={e => {
          choice(e);
        }}
      >
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
      <h2>You selected a: {selectedCar.car} - {selectedCar.color}</h2>
    </>
  )
}
