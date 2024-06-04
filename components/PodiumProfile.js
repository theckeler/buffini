import Image from "next/image";

const PodiumProfile = ({ item, index, ranking }) => {
  let css;

  switch (ranking) {
    case 2:
      css = `p-2 text-lg bg-gray-100 order-2 lg:order-1`;
      break;
    case 3:
      css = `p-2 text-lg bg-orange-100 order-3 lg:order-3`;
      break;
    default:
      css = `p-6 text-2xl bg-yellow-100 order-1 lg:order-2`;
  }

  return (
    <ul className={`flex flex-col items-center gap-2 rounded w-full ${css}`}>
      <li className="rounded-full relative lg:-mt-12 shadow-xl">
        <Image
          src={item.photo}
          alt={item.name}
          width={300}
          height={300}
          loading="eager"
          sizes="300px"
          priority
          className="rounded-full w-24 h-24"
        />
      </li>
      <li className="font-medium text-gray-800 flex flex-col text-center">
        <span className="font-bold">{item.name}</span>
        <span>{item.points}</span>
      </li>
      <li className="font-medium text-gray-800 h-full">
        <div className="py-3 px-2 flex items-center justify-center w-10 text-sm border bg-black text-white font-bold">
          {ranking}
        </div>
      </li>
    </ul>
  );
};

export default PodiumProfile;
