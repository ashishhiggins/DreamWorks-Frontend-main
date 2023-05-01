import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StaffForm from './Pages/StaffForm';
import PropertyForm from './Pages/PropertyForm';
import ClientForm from './Pages/ClientForm';
import LeaseForm from './Pages/LeaseForm';
import Home from './Pages/Home';
import Page404 from "./Pages/Page404";
import OwnerForm from "./Pages/OwnerForm";
import BranchForm from "./Pages/BranchForm";
import BranchView from "./Pages/BranchView";
import PropertyView from "./Pages/PropertyView";
import StaffView from "./Pages/StaffView";
import PropertyDetail from "./Pages/PropertyDetail";
import CommentForm from './Pages/CommentForm';
import LeaseView from './Pages/LeaseView';

function App() {
  return (

<>
<Router>
<ToastContainer />
<Routes>
 {/* Done */}
        <Route path="/branch-view" element={<BranchView />} />
        <Route path="/staff-view" element={<StaffView />} />

        <Route path="/property-view" element={<PropertyView />} />
        <Route path="/lease-view" element={<LeaseView />} />
        <Route path="/property-detail" element={<PropertyDetail />} /> 

        <Route path="/staff" element={<StaffForm />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/branch" element={<BranchForm />} />
        <Route path="/property" element={<PropertyForm />} />
        <Route path="/lease" element={<LeaseForm />} />
        <Route path="/comments" element={<CommentForm />} />

        
         
        
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
</Routes>
</Router>
</>
)
}



export default App;

