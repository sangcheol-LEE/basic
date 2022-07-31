import React from 'react'
import propTypes from "prop-types"
import Say from './Say'

const MyComponent = ({name,children}) => {
  return (
    <div>
      내 이름은 {name} 입니다. <br />
      내 차일드는 {children}

      <Say />
    </div>
  )
}

MyComponent.defaultProps = {
  name : "Ian"
}

MyComponent.propTypes = {
  name : propTypes.string
}

export default MyComponent
