import React from 'react'
import { Container, Section } from './style';

const Sobre = () => {
  return (
    <Container>
      <h1>Sobre mi</h1>
      <Section>
        <img src="./images/shi.png" alt="" />
        <div>
        <p>Mi nombre es Shiellyn Bruna Ferreira y soy de Guarulhos - SP. Desde niña siempre he tenido pasión por los animales, por cuidarlos y rescatarlos y esto me ha llevado a querer ser veterinaria durante la mayor parte de mi vida, pero todo cambió cuando descubrí el mundo de los códigos. Me sumergí en bootcamps y tenía más afinidad con el Desarrollo Frontend y es mi foco de estudios actual. Me gradué como Desarrollador Java Junior por Generation Brasil y Desarrollador Web Fullstack por Resilia Educação y pronto me graduaré como Desarrollador Frontend por Vai na Web.</p>
        </div>
      </Section>
    </Container>
  )
}

export default Sobre;