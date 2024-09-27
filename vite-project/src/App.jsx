// src/EmailValidator.js
import React, { useState } from 'react';
import axios from 'axios';

const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/validate-email', { email });
      setMessage(response.data.message);
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors[0].msg);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Email Validator</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={styles.button} type="submit">Validate</button>
      </form>
      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default EmailValidator;
