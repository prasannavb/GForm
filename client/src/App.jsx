import Course from "./course.jsx"
import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Final from "./final.jsx"
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
const App=()=>
{
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>} />
    <Route path="/Final" element={<Final/>} />

  </Routes>
  </BrowserRouter>
  )
}

export default App;