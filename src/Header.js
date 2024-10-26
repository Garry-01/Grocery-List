import React from 'react'

const Header = ({title}) => {
  const headerStyle = {
    backgroundColor : 'royalblue',
    color : '#fff'
  };
  return (
    <header style={headerStyle} >
        {title}
    </header>
  )
}

export default Header