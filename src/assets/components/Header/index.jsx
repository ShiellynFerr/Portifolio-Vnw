import React, { useState } from 'react'
import { Header } from './style';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <>
     <Header>
      <h1>Porti<span>folio</span></h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="sobre">Sobre</Link>
          <Link to="proyectos">Proyectos</Link>
          <Link to="ods">ODS</Link>
        </ul>
      </nav>
     </Header>
    </>
  )
}

export default Menu;