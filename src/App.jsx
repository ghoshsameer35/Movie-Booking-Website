import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ParentRout from './Components/Routs/Parentrout'
import MovieDetails from './Components/MovieDetails'
import Footer from './Components/Routs/Footer'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer/>
      <ParentRout/>
      <Footer/>
    </>
  )
}

export default App
