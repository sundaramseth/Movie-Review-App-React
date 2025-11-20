import React, { useEffect, useState } from 'react'
import { BsArrowDown, BsArrowUp, BsBoxArrowDown, BsSearch, BsTrash } from "react-icons/bs";
import genreID from '../utils/genre';
function WatchList({watchlist, handleRemoveToWatchlist, setWatchList}) {


  const [search,setSearch] = useState('');
  const [genreList,setGeneryList] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('All Genre');


  let handleShortIncresing = () =>{
    let sortedIncreasing = watchlist.sort((a,b)=>{
      return b.rating - a.rating;

    })
    setWatchList([...sortedIncreasing]);
  }
    let handleShortDecresing = () =>{
    let sortedDecreasing = watchlist.sort((a,b)=>{
      return a.rating - b.rating;

    })
    setWatchList([...sortedDecreasing]);
  }


  let handleGenere = (list) =>{
    setCurrentGenre(list);
    console.log(currentGenre)
  }


  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      console.log(movieObj.genre[0])
      const firstGenery = movieObj.genre[0];
      const genreName =
      Object.values(genreID).includes(firstGenery) ? firstGenery : 'Unknown';
      return genreName;
    })
    const uniqueGenres = ['All Genre', ...new Set(temp)];
    setGeneryList(uniqueGenres);

  },[watchlist])


  return (
   <>
    <div className="bg-[#0f0f0f] min-h-screen text-white px-6 py-10">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Your Watchlist
        </h1>
      </div>

      <div className="flex flex-row items-center justify-start gap-6">
             <div className="flex items-center bg-[#1a1a1a] h-[2rem] w-[18rem] rounded-md px-3 py-1 border border-gray-700 focus-within:border-[#f5c518] transition-all duration-300">
                <BsSearch className="text-gray-400 w-4 h-4 mr-2" />
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Movies' className='w-full bg-transparent outline-none text-sm placeholder-gray-400 ' />
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          {genreList.map((list,index)=>(
          <div key={index} onClick={()=>handleGenere(list)} className={currentGenre == list?"bg-yellow-400 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer text-black":"font-semibold bg-gray-800 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300"}>
            {list}
          </div>
          ))

          }
        </div>
      </div>

         <div className="flex justify-center items-center border border-gray-700 rounded-md px-3 py-1 w-full my-5">
          <table className='overflow-hidden w-full text-center'>
            <thead className='border-b border-b-gray-600'>
              <tr>
                <th className="px-6 py-3 text-left text-gray-400">Movie Title</th>
                <th className="px-6 py-3 text-center text-gray-400 flex gap-2 justify-center items-center"><BsArrowUp onClick={handleShortIncresing} className="cursor-pointer"/>Ratings<BsArrowDown onClick={handleShortDecresing} className="cursor-pointer"/></th>
                <th className="px-6 py-3 text-center text-gray-400">Genre</th>
                <th className="px-6 py-3 text-center text-gray-400">Description</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.filter((movie)=>{
                if(currentGenre == "All Genre"){
                  return true;
                }else{
                  return Object.values(genreID).includes(movie.genre[0])?true:false;
                }
              }).filter((movie)=>{
                return movie.title.toLowerCase().includes(search.toLocaleLowerCase())

              }).map((movie)=>(
              <tr key={movie.id} className='text-center border-b border-b-gray-700 hover:bg-[#141414] transition-all duration-300'>
                <td>
                  <tr>
                    <td className='flex align-middle justify-center items-center gap-4 py-4'>
                      <img className='w-24 h-[150px] rounded-md' src={movie.poster} />  
                        {movie.title}
                    </td>
                  </tr>
                    </td>
                <td>
                    {movie.rating}
                </td>
                   <td>
                       {movie.genre[0]}
                </td>
                    <td className='text-left overflow-hidden max-w-40 text-sm px-2.5'>
                     {movie.description}
                </td>

                   <td className='text-red-600 font-bold cursor-pointer hover:scale-110 transition-all duration-300'>
                   <BsTrash onClick={()=>{handleRemoveToWatchlist(movie.id)}} />
                </td>
              </tr>
              ))}
        

            </tbody>
          </table>
    
          </div>  
      </div>
   </>
  )
}

export default WatchList
