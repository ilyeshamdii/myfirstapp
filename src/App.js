import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from './component/Form';
import Address from './component/profil/Address';
import FullName from './component/profil/Fullname';
import ProfilePhoto from './component/profil/Profilphoto';


function App() {
  return (
   <>

  <FullName name='ILYES HAMDI'/>
  <ProfilePhoto/>
  <Address address='CENTRE VILLE'/>
  

   </>
   
  );
}

export default App;
