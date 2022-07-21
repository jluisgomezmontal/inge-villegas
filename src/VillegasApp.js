import './App.css';
import profile from './assets/profile.jpeg'
import { TablaPersonal } from './TablaPersonal';

function VillegasApp() {
  return (
    <div className="container">
      <h1 className="secretaria">Secretaria de educacion publica</h1>
      <h2 className="cedula">Direccion general de profesiones</h2>
      <h2 className="cedula">Cedula <em>#9034326</em></h2>

      <img className="profilePhoto" src={profile} alt="imagen de perfil" />
      <h2 className="cedula">En virtud de:</h2>
      <h1 className="secretaria">Rodolfo Villegas Quevedo</h1>
      <h2 className="cedula">curp: <em>viqr540927hgrlvd04</em></h2>
      <p className="parrafo">CUMPLIO CON LOS REQUISITOS EXIGIDOS POR LA LEY REGLAMENTARIA DEL ARTICULO 5°. CONSTITUCIONAL RELATIVO AL EJERCICIO DE LAS PROFESIÓNES EN EL DISTRITO FEDERAL Y SU REGLAMENTO SE LE EXPIDE <em> EN EDUCACIÓN DE TIPO SUPERIOR LA </em></p>
      <h1 className="secretaria"  >CÉDULA</h1>
      <p className="parrafo">PERSONAL CON EFECTOS DE PATENTE PARA EJERCER PROFESIONALMENTE EN EL NIVEL DE ING. CIVIL</p>


      <TablaPersonal/>
     <br />
     <div class="d-grid gap-2">
     <a class="btn btn-success btn-lg" type="button" href="tel:+527551095267">LLAMAR</a>
    </div>

     <br />
     <br />
     <br />
    </div>
  );
}

export default VillegasApp;
