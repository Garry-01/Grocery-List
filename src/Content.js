import React from 'react'
import { useState } from 'react';
import Itemlist from './itemlist';

const Content = ({ items , handleCheck , handleDelete}) => {
  // const [name, setName] = useState('priyanshu');

  // const handleNameChange = () => {
  //   const names = ["priyanshu", "priya", "Garry", "lisa"];
  //   const int = Math.floor(Math.random() * 4);
  //   setName(names[int]);
  // }
  // const handleclick = () => {
  //   console.log('you clicked it')
  // }
  // const handleclick2 = (name) => {
  //   console.log(`${name} clicked it`)
  // }
  // const handleclick3 = (e) => {
  //   console.log(e.target.innerText)
  // }
  return (
    <>
      {/* <p onDoubleClick={handleNameChange}>Hello {name}!</p>
      <button onClick={handleNameChange} >change name</button>
      <button onClick={() => handleclick2('Pri')} >click it</button>
      <button onClick={(e) => handleclick3(e)} >click it</button> */}
      {items.length ? (
        <Itemlist
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
      ): (
        <p style={{marginTop:'2rem'}}>Your list is empty</p>
      )}
    </>
  )
}

export default Content