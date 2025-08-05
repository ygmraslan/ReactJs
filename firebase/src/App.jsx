import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from "./components/Navbar";
import 'react-toastify/ReactToastify.css'

function App() {

  return (

    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2000} />
    </div>

  )
}

export default App
