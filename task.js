/* Reset default margin and padding */
const styles = {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    /* Set a background color for the body */
    body: {
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
    },
    /* Center the content */
    container: {
      maxWidth: 800,
      margin: '0 auto',
      padding: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    /* Style the title */
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    /* Style the form */
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    /* Style the input fields */
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 20,
      border: '1px solid #ccc',
      borderRadius: 5,
      fontSize: 16,
    },
    /* Style the submit button */
    submitButton: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      cursor: 'pointer',
    },
    /* Style the link */
    a: {
      color: '#007bff',
      textDecoration: 'none',
    },
    /* Style the footer */
    footer: {
      textAlign: 'center',
      marginTop: 20,
      color: '#777',
    },
  };
  
  export default styles;
  