
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from "react-router-dom"

function App() {
  return (
   <>
   <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/" element ={<Landing />}/> */}
      <Route path="/satish" element= {<Satish />}/>
      <Route path="/sapana" element= {<Sapana />}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

function Layout(){
  return <div style={{background: "green"}}>
       <Header />
       <div style={{background: "gray", height: "70vh"}}>
       this is landing page !!! <br />
       <Outlet/>
       </div>
       Footer is here
  </div>
}

function Header(){
  return <div>
  {/* <Link to= "/"> Landing </Link><br /> */}
  <Link to= "/satish"> satish </Link> <br />
  <Link to= "/sapana"> sapana </Link> <br />
  </div>
}

function Error(){
  return <div>
    error loading page
  </div>
}

function Satish(){

  const navigate = useNavigate();
  function redirectUser(){
    navigate("/")
  }

  return <div>
    satish here
    <button onClick={redirectUser}>Go back to Landing page</button>
  </div>
}

function Sapana(){

  const navigate = useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>
   Sapana Here !!!!
   <button onClick={redirectUser}>Go back to Landing page</button>
  </div>
}

// function Landing(){
//   return <div>
//     this is landing page
//   </div>
// }

export default App
