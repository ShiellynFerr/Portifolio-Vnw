import React, { useState } from 'react'
import { Header } from './style';

const Menu = () => {

  return (
    <>
     <Header>
      <h1>Porti<span>folio</span></h1>
      <nav>
        <ul>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
        </ul>
      </nav>
     </Header>
    </>
  )
}

export default Menu;