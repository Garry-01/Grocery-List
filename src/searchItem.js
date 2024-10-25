import React from 'react'

const searchItem = ({search,newsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>{e.preventDefault();}}>
        <label htmlFor='search'>Search</label>
        <input 
            id = 'search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e)=>newsearch(e.target.value)}
        />
    </form>
  )
}

export default searchItem