import React from 'react';
import { FaPlus } from 'react-icons/fa';

const additem = ({newItem,setnewItem,handlesubmit}) => {

  
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='additem'>Add Item</label>
        <input
            autoFocus

            placeholder='add Item'
            required
            type='text'
            id='additem'
            value={newItem}
            onChange={(e)=>setnewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='add Item'

        ><FaPlus/></button>
    </form>
  )
}

export default additem