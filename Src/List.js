import PropTypes from 'prop-types';
import './List.css';

function List(props) {
  
  let category = props.category;
  
  let itemlist = props.list;

  const listItems = itemlist.map(fruit => 
    <li key={fruit.id}>
       {fruit.name}: <b>{fruit.cal}</b> calories
    </li>
  );

  return (
    <div>
      <h2 className="category">{category}</h2>
      <ul className="list">{listItems}</ul>
    </div>
  );
}

// Define PropTypes (optional, but included since PropTypes is imported)
List.propTypes = {};

export default List;