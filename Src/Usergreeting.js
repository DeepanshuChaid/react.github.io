import PropTypes from 'prop-types';

function Usergreeting({ isloggedin }) { // Destructuring for cleaner code
      if (isloggedin) {
        return <h2>Welcome home</h2>;
      }
      return <h2>wtf lil bro, who's gonna sign in, your mom?</h2>;
    }
  
    Usergreeting.propTypes = {
    isloggedin: PropTypes.bool // Define prop type for isloggedin
  };
  
    Usergreeting.defaultProps = {
    isloggedin: true // Default to false if prop is not provided
  };

export default Usergreeting;