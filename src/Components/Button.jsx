import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
const styles={
    dark:{color:"white",background:"black"},
    light:{color:"black", background:'white'}
}
export const Button = ({children, onClick}) => 
{
    const [theme]= useContext(AppContext)
  return (
    <div>Button

        <button style={styles[theme]} onClick={onClick}>{children}</button>
    </div>
  )
}
