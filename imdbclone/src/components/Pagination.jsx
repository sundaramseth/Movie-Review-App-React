import React from 'react'

function Pagination({page, setPage}) {
  return (
        <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-md font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>

        <span className="text-gray-300 text-sm">
          Page <span className="font-bold text-yellow-400">{page}</span>
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-5 py-2 rounded-md font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          Next
        </button>
      </div>
  )
}

export default Pagination
