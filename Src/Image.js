function Images() {
  const image =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuLrF8ZUZBz1hYpaB9uxUGmzzupx0WHf6QpE2MYVLUw&s';

  const handleClick = (e) => {
    e.target.style.display = "none"; // Correctly set the display style
  };

  return <img onClick={handleClick} src={image} alt="Logo" />;
}

export default Images;