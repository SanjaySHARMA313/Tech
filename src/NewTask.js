import React, { useState } from 'react';
import Newtask from './Newtask.css'

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    website: '',
    contactPerson: '',
    phoneNumber: '',
  });
  const see=()=>{
    setShow(true);
  }

  const [data, setData] = useState([]);

  const [errors, setErrors] = useState({
    name: '',
    address: '',
  });
  const[show,setShow]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'name' && value.length > 120) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name cannot be more than 120 characters' }));
    } else if (name === 'address' && value.length > 1000) {
      setErrors((prevErrors) => ({ ...prevErrors, address: 'Address cannot be more than 1000 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    alert("Data store Successfully");
    
    e.preventDefault();

    setData((prevData) => [...prevData, formData]);


    setFormData({
      name: '',
      address: '',
      email: '',
      website: '',
      contactPerson: '',
      phoneNumber: '',
    });
  };

  return (
    <div className='hello'>
      <h2 className='business'>Create Business</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label className='style2' htmlFor="name">Name:</label>
          <input className='style1'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
    
        <div>
          <label className='style2' htmlFor="address">Address:</label>
          <textarea className='style1'
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
        </div>
        <div>
          <label className='style2' htmlFor="email">Email:</label>
          <input className='style1'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='style2' htmlFor="website">Website:</label>
          <input className='style1'
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='style2' htmlFor="contactPerson">Contact Person:</label>
          <input className='style1'
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='style2' htmlFor="phoneNumber">Phone Number:</label>
          <input className='style1'
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className='btn'>
        <button className='btn1' type="submit">Submit</button>
        <button className='btn2' onClick={see}>Show Contact</button></div>
      </form>
    
      {show?
      <table>
        <thead >
          <tr className='thead' >
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Website</th>
            <th>Contact Person</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className='td' key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              <td>{item.contactPerson}</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>: <></>}
    </div>
  );
};

 export default BusinessForm;