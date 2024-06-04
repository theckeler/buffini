"use client";
import Image from "next/image";

const ProfileCard = ({ user, placement, goToRanking }) => {
  const handleClick = () => {
    goToRanking(placement);
  };
  return (
    <div className="bg-blue-100 rounded p-4">
      <h3 className="text-xl font-bold text-center mb-4">Welcome</h3>
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full relative">
          <Image
            src={user.photo}
            alt={user.name}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-lg font-medium text-gray-800">{user.name}</p>
          <p className="text-gray-600">Points: {user.points}</p>
          <p className="text-gray-600">Placement: {placement}</p>
        </div>
        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          My Ranking
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
