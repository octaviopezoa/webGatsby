import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const NosotrosPage = () => (
  <Layout>
  <div>
    <h1>Hola desde nosotros</h1>
    <p>Bienvenido a la página de nosotros</p>
    <Link to="/">Regresa al inicio</Link>
  </div>
  <Layout/>
)
export default NosotrosPage