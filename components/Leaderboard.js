"use client";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentUser = data.find((user) => user.active);
  const currentUserIndex = data.findIndex((user) => user.active) + 1;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const goToRanking = (placement) => {
    const page = Math.ceil(placement / itemsPerPage);
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-2">
      {currentUser && (
        <ProfileCard user={currentUser} placement={currentUserIndex} goToRanking={goToRanking} />
      )}
      <div className="bg-white rounded p-4">
        <h2 className="text-xl font-bold text-center mb-4">Leaderboard</h2>
        <ul className="flex flex-col gap-4">
          {currentData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 rounded-md ${
                item.active ? "bg-blue-100" : ""
              }`}
            >
              <LeaderboardItem {...{ item, index, startIndex }} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            &lt; Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
