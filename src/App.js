import './App.css';
import Index from './pages/index/Index'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage';
import GesifanJunche from './pages/MainPage4/GesifanJunche';
import CctvBig from './pages/Box5/CctvBig';
import Join from './Login/Join'
import Login from './Login/Login'
import Register from './Login/Register'



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/MainPage" element={<Mainpage />}/>
      <Route path="/GesifanJunche" element={<GesifanJunche />}/>
      <Route path="/CctvBig" element={<CctvBig />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
