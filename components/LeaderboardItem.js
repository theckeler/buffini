import LeaderboardProfile from "./LeaderboardProfile";
import PodiumProfile from "./PodiumProfile";

const LeaderboardItem = ({ item, index, startIndex, podiumData }) => {
  let ranking = startIndex + index + 1;
  // if (podiumData) {
  //   switch (ranking) {
  //     case 1:
  //       ranking = 2;
  //       // code block
  //       break;
  //     case 2:
  //       ranking = 1;
  //       // code block
  //       break;
  //     case 3:
  //       ranking = 3;
  //       // code block
  //       break;
  //     default:
  //     // code block
  //   }
  // }

  return (
    <>
      {podiumData ? (
        <PodiumProfile {...{ item, index, ranking }} />
      ) : (
        <LeaderboardProfile {...{ item, index, ranking }} />
      )}
    </>
  );
};

export default LeaderboardItem;
