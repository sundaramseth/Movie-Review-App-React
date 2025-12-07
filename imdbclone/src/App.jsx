
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MovieContext } from './components/MovieContext'

function App() {

  const [watchlist,setWatchList] = useState([]);

  let handleWatchList= (movieObj) =>{
    const newmovielist = [...watchlist, movieObj]
    localStorage.setItem('movieApp',JSON.stringify(newmovielist))
    setWatchList(newmovielist);
    console.log(watchlist);
  }

  let handleRemoveToWatchlist = (movieId) =>{
    const filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieId
    })
    localStorage.setItem('movieApp',JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList);
    console.log(watchlist)
  }
 
  useEffect(()=>{
    let getMovie = localStorage.getItem("movieApp")
    if(!getMovie)
      return;
    setWatchList(JSON.parse(getMovie))
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={
        <>
        <Banner/>
        <MovieContext.Provider
        value={{
          handleWatchList,
          handleRemoveToWatchlist,
          watchlist,
        }}
      >
        <Movie />
      </MovieContext.Provider>

        {/* <Movie handleWatchList={handleWatchList} handleRemoveToWatchlist={handleRemoveToWatchlist} watchlist={watchlist}/> */}
        </>
      } />
        <Route path="/watchlist" element={
          <MovieContext.Provider value={{watchlist,setWatchList,handleRemoveToWatchlist}}>
          <WatchList />
          </MovieContext.Provider>
          } />
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
