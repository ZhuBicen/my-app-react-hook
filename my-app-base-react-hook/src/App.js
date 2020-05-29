import React, { useState, useEffect } from 'react';
import './App.css';
import TokenForm from './TokenForm'



export default function App() {

  const [token, setToken]  = useState(sessionStorage.getItem("token"));

  useEffect(()=> {
    sessionStorage.setItem("token", token);
  })

  return (
    <div>
      <h1>Starrry Eyed</h1>
      {token ? token : <TokenForm setToken={setToken} />}
    </div>
  )

}
