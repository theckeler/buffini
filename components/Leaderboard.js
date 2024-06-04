"use client";
import { useState } from "react";
import LeaderboardItem from "./LeaderboardItem";
import ProfileCard from "./ProfileCard";

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

  let startIndex = (currentPage - 1) * itemsPerPage;
  let currentData = data.slice(startIndex, startIndex + itemsPerPage);
  let podiumData = data.slice(0, 3);

  //podiumData = [{ ...data[1] }, { ...data[0] }, { ...data[2] }];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // if (currentPage === 1) {
  //   currentData = currentData.slice(3, -1);
  //    startIndex = 3;
  // }

  return (
    <div className="flex flex-col gap-4">
      {currentUser && (
        <ul className="grid lg:grid-cols-[400px_1fr] gap-4">
          <li className="bg-white rounded p-4 flex flex-col items-center justify-center">
            <ProfileCard
              user={currentUser}
              placement={currentUserIndex}
              goToRanking={goToRanking}
            />
          </li>
          <li className="bg-white rounded p-8 flex flex-col items-center justify-center">
            <h1 className="font-bold text-center mb-4 text-2xl">
              Welcome to the Leaderboard!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet elementum odio, vitae mollis purus dictum ut. In ultrices
              eros eu accumsan facilisis. Phasellus porttitor lectus ut
              facilisis dictum. Duis feugiat ipsum sit amet lectus mollis, ac
              tincidunt velit consectetur. Nulla ullamcorper pulvinar ex a
              posuere. Proin sapien erat, ultricies a laoreet id, tincidunt quis
              libero. Pellentesque et scelerisque diam, sed faucibus orci.
            </p>
          </li>
        </ul>
      )}

      <div className="bg-white rounded p-4">
        <h2 className="font-bold text-center mb-4 text-xl">Current Leaders:</h2>

        <div className="flex flex-col lg:flex-row gap-4 items-center lg:mt-12">
          {podiumData.map((item, index) => (
            <LeaderboardItem
              key={index}
              item={item}
              index={index}
              startIndex={0}
              podiumData
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded p-4">
        <ul className="grid lg:grid-cols-2 gap-4">
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

        <hr className="my-8" />

        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded ${
              currentPage === 1
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-neutral-700 text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={`w-8 h-8 ${
                currentPage === 1 ? "fill-black/10" : "fill-white"
              }`}
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-[#145cc7] text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-neutral-700 text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={`w-8 h-8 ${
                currentPage === totalPages ? "fill-black/10" : "fill-white"
              }`}
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
