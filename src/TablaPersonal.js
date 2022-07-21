import React from 'react'

export const TablaPersonal = () => {
  return (
    <div className="table-responsive">

<table className="table table-dark table-striped mt-5 container">
  <thead>
  <tr>
    <th colspan="2" className="table-active fs-1 ">Datos Personales</th>
  </tr>
  <tr>
    <th className="fs-5" scope="col">Nombre:</th>
    <td>Rodolfo</td>
  </tr>
  </thead>
  <tbody>
    <tr>
      <th className="fs-5 " scope="col">Apellido:</th>
      <td>Villegas Quevedo</td>
    </tr>
    <tr>
      <th className="fs-5" scope="col">Lugar de Nacimiento:</th>
      <td>Tenexpa Guerrero</td>
    </tr>
    <tr >
      <th className="fs-5 " scope="col">Direccion:</th>
      <td>Bocote Esq. Oyamel #19 <br />Col. El Hujal C.P. 40880</td>
    </tr>
    <tr>
      <th className="fs-5" scope="col">CURP:</th>
      <td>VIQR540927HGRLVD04</td>
    </tr>
    <tr >
      <th className="fs-5 " scope="col">Telefono:</th>
      <td>755-109-5267</td>
    </tr>
    <tr>
      <th className="fs-5" scope="col">Email:</th>
      <td>pavimentancion_1@hotmail.com</td>
    </tr>
    <tr >
      <th className="fs-5 " scope="col">Tipo de Sangre:</th>
      <td>RH O Negativo</td>
    </tr>
    <tr>
      <th className="fs-5" scope="col">Fecha de Nacimiento:</th>
      <td>27 de Septiembre de 1954</td>
    </tr>
    <tr >
      <th className="fs-5 " scope="col">Estado Civil:</th>
      <td>Casado</td>
    </tr>
    <tr>
      <th className="fs-5" scope="col">Escolaridad:</th>
      <td>Ingenieria Civil</td>
    </tr>
    <tr >
      <th className="fs-5 " scope="col">Datos de Cedula:</th>
      <td>9034326. Libro 1098. Hoja 449. Numero 6. Tipo C1 <br/>www.gob.mx/cedulaprofesional </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
