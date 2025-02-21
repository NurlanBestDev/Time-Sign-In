import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  function SendName(event) {
    event.preventDefault();
    if (name === '' || password === '') {
      console.log('Please fill in all fields.');
    } else {
      console.log('Name:', name);
      console.log('Password:', password);
      if (termsAccepted) {
        console.log('Terms Accepted: Yes');
      } else {
        console.log('Terms Accepted: No');
      }
    }
    console.log('');
  }
  return (
    <form onSubmit={SendName} className='form'>
      <h1>Log in</h1>
      <input name='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='password' name='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>
        <input type='checkbox' checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
        Terms And Conditions
      </label>
      <button type='submit'>Sign in</button>
    </form>
  );
}

export default Login;
