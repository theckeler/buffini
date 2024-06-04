import Image from "next/image";

const LeaderboardItem = ({ item, index, startIndex }) => {
  return (
    <ul className="flex items-center gap-2">
      <li className="font-medium text-gray-800 h-full">
        <div className="bg-white shadow rounded p-2 flex items-center justify-center w-12 text-sm">
          {startIndex + index + 1}
        </div>
      </li>
      <li className="w-12 h-12 rounded-full relative">
        <Image
          src={item.photo}
          alt={item.name}
          layout="fill"
          className={`rounded-full ${index < 3 ? "w-16 h-16" : ""}`}
        />
        {item.active && (
          <div className="absolute -top-2 -right-2 bg-blue-500 p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.786 5.462a1 1 0 00.95.69h5.598c.969 0 1.372 1.24.588 1.81l-4.527 3.296a1 1 0 00-.364 1.118l1.786 5.462c.3.921-.755 1.688-1.54 1.118l-4.527-3.296a1 1 0 00-1.176 0l-4.527 3.296c-.785.57-1.84-.197-1.54-1.118l1.786-5.462a1 1 0 00-.364-1.118L2.617 10.89c-.784-.57-.38-1.81.588-1.81h5.598a1 1 0 00.95-.69l1.786-5.462z"
              />
            </svg>
          </div>
        )}
      </li>
      <li
        className={`font-medium text-gray-800 flex flex-col ${
          index < 3 ? "text-lg" : ""
        }`}
      >
        <span>{item.name}</span>
        <span>{item.points}</span>
      </li>
    </ul>
  );
};

export default LeaderboardItem;
