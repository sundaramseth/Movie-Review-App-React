import { BsBookmarkCheckFill, BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";

function MovieCard({ poster_path, title, rating, handleWatchList, movie, handleRemoveToWatchlist, watchlist }) {

  function doesContain(movie){

    for(let i=0; i<watchlist.length; i++){
      if(watchlist[i].id == movie.id)
        return true;
    }

    return false;

  }

  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[200px]">
      <div className="relative">
        <img
          src={poster_path}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          INDb {rating || (7 + Math.random() * 2).toFixed(1)}
        </div>

        <div className="absolute right-2 top-2">
          {doesContain(movie)
          ?
          <BsBookmarkCheckFill size={20} className="hover:scale-110 transition-all duration-200 cursor-pointer" onClick={()=>(handleRemoveToWatchlist(movie.id))} color="#fdc700"/>
          :
          <BsBookmarkPlusFill size={20} className="hover:scale-110 transition-all duration-200 cursor-pointer" onClick={()=>(handleWatchList(movie))}/>
          }


        </div>
      </div>
      <div className="p-3 text-white text-sm md:text-base font-semibold truncate text-center">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
