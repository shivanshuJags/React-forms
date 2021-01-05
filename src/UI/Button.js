const Button = (props) => {
  return (
    <button style={props.style} onClick={props.action} type={props.type}>
      {props.title}
    </button>
  );
};

export default Button;
