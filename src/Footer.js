import React from 'react'

const Footer = ( {lenght}) => {
    const today = new Date();
  return (
    <footer>
        <p> 
            {lenght} items in List
        </p>
    </footer>
  )
}

export default Footer