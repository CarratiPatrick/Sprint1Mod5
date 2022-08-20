const Button = ({texto,css,onClick}) => {
    return (
      <button onClick={onClick} className={css} >{texto}</button>
    )
  }
  
  export default Button
  