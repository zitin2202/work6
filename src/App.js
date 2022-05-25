import React from 'react';
import Profile from "./pages/profile";
import Search from "./pages/search";
import Editpet from "./pages/editpet";
import Foundpet from "./pages/foundpet";
import Registration from "./pages/registration";
import Pet from "./pages/pet";
import AddPets from "./pages/addPets";
import Auth from "./pages/auth";
import {Routes, Route} from "react-router-dom";
import Index from "./pages";
import Orders from "./pages/orders";



function App() {
  return (
        <div>
            <Routes>
            <Route path={'/'} element={<Index/>}/>
              <Route path={'/addPets'} element={<AddPets/>}/>
              <Route path={'/auth'} element={<Auth/>}/>
              <Route path={'/editpet'} element={<Editpet/>}/>
              <Route path={'/foundpet'} element={<Foundpet/>}/>
              <Route path={'/index'} element={<Index/>}/>
              <Route path={'/pet'} element={<Pet/>}/>
              <Route path={'/profile'} element={<Profile/>}/>
              <Route path={'/registration'} element={<Registration/>}/>
              <Route path={'/search'} element={<Search/>}/>
                <Route path={'/orders'} element={<Orders/>}/>
            </Routes>
        </div>
  );
}

export default App;
