import Leaderboard from "@/components/Leaderboard";

const data = [
  {
    photo: "https://i.pravatar.cc/300?u=asdasdasd?u=6",
    name: "Alice Smith",
    points: 1250,
  },
  {
    photo: "https://i.pravatar.cc/300?u=asdasdasd?u=1",
    name: "Bob Johnson",
    points: 1180,
  },
  {
    photo: "https://i.pravatar.cc/300?u=2",
    name: "Charlie Brown",
    points: 1020,
  },
  {
    photo: "https://i.pravatar.cc/300?u=p3f2r8n7k1",
    name: "Diana Davis",
    points: 975,
  },
  {
    photo: "https://i.pravatar.cc/300?u=v2d6n4l3r1",
    name: "Ethan Evans",
    points: 890,
  },
  {
    photo: "https://i.pravatar.cc/300?u=r5m7k2c3d1",
    name: "Fiona Fernandez",
    points: 845,
  },
  {
    photo: "https://i.pravatar.cc/300?u=l9p2f5t3n8",
    name: "Gabriel Garcia",
    points: 780,
  },
  {
    photo: "https://i.pravatar.cc/300?u=z8w5r1k3d2",
    name: "Hannah Hernandez",
    points: 725,
  },
  {
    photo: "https://i.pravatar.cc/300?u=n7k2m9d5t4",
    name: "Isaac Ibrahim",
    points: 690,
  },
  {
    photo: "https://i.pravatar.cc/300?u=7",
    name: "Jessica Jackson",
    points: 655,
  },
  {
    photo: "https://i.pravatar.cc/300?u=k8r3d7n2f1",
    name: "Kevin Kelly",
    points: 620,
  },
  {
    photo: "https://i.pravatar.cc/300?u=4567",
    name: "Liam Lee",
    points: 585,
    active: true,
  },
  {
    photo: "https://i.pravatar.cc/300?u=v2n7d3l4k5",
    name: "Mia Martinez",
    points: 550,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f3d2l8n5k7",
    name: "Noah Miller",
    points: 515,
  },
  {
    photo: "https://i.pravatar.cc/300?u=m7k5l2d9f3",
    name: "Olivia Mitchell",
    points: 480,
  },
  {
    photo: "https://i.pravatar.cc/300?u=n2r8d5k3f7",
    name: "Peter Parker",
    points: 445,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f9l3d2k5r8",
    name: "Quinn Robinson",
    points: 410,
  },
  {
    photo: "https://i.pravatar.cc/300?u=p2n7d5k3l8",
    name: "Ruby Rodriguez",
    points: 375,
  },
  {
    photo: "https://i.pravatar.cc/300?u=555",
    name: "Samuel Sanchez",
    points: 340,
  },
  {
    photo: "https://i.pravatar.cc/300?u=456456",
    name: "Taylor Taylor",
    points: 305,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f2d9k3l5n7",
    name: "Victoria Vargas",
    points: 270,
  },
  {
    photo: "https://i.pravatar.cc/300?u=p3k7d2f5l8",
    name: "William Wilson",
    points: 235,
  },
  {
    photo: "https://i.pravatar.cc/300?u=n9d5k3f2l7",
    name: "Xavier Hernandez",
    points: 200,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f8k2d5n3l7",
    name: "Yolanda Young",
    points: 165,
  },
  {
    photo: "https://i.pravatar.cc/300?u=k3d9n2f5l8",
    name: "Zachary Zhao",
    points: 130,
  },
  {
    photo: "https://i.pravatar.cc/300?u=n5d3k2f8l7",
    name: "Alice Baker",
    points: 1285,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f2k8d3n5l7",
    name: "Bob Carter",
    points: 1150,
  },
  {
    photo: "https://i.pravatar.cc/300?u=k9d3n5f2l7",
    name: "Charlie Davis",
    points: 1005,
  },
  {
    photo: "https://i.pravatar.cc/300?u=d7n2k3f5l8",
    name: "Diana Edwards",
    points: 960,
  },
  {
    photo: "https://i.pravatar.cc/300?u=f3k2n9d5l7",
    name: "Ethan Fernandez",
    points: 875,
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Leaderboard data={data} />
    </div>
  );
};

export default Home;
