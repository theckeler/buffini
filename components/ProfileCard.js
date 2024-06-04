"use client";
import Image from "next/image";

const ProfileCard = ({ user, placement, goToRanking }) => {
  const handleClick = () => {
    goToRanking(placement);
  };
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full relative shadow-xl">
          <Image
            src={user.photo}
            alt={user.name}
            width={400}
            height={400}
            loading="eager"
            sizes="400px"
            priority
            className="rounded-full w-32 h-32"
          />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">{user.name}</p>
          <p className="text-gray-600">
            <span className="font-bold">Points:</span> {user.points}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Ranking:</span> {placement}
          </p>

          <button
            onClick={handleClick}
            className="mt-4 bg-[#145cc7] text-sm text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            My Ranking
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
