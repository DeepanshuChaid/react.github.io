function Button() {
  const handleClick = (e) => {
    e.target.textContent = "ouch";
  };

  return (
    <div>
      <button onDoubleClick={(e) => handleClick(e)} >what cgksavch</button>
    </div>
  );
}

export default Button