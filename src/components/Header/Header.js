import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Rancid Tomatillos</h1>
      <SearchBar />
      <button className='login-button'>Login</button>
    </div>
  );
}