
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  // const movieNumber = 1;
  
  return (

    <>
     

      <MovieProvider>

        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favourites" element={<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>

    </>
  )
}

export default App



 {/* {movieNumber === 2 ? (
          <MovieCard movie={{title:"Tim's Film", release_date:"2024"}}/>
        ): (<MovieCard movie={{title:"Joes's Film", release_date:"2020"}}/>)
      }  */}

      {/* {movieNumber === 1 && <MovieCard movie={{title:"Joes's Film", release_date:"2020"}}/>} */}
      
      {/* <Home /> */}