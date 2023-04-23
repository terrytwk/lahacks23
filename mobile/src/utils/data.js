const profilePosts1 = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hollywood_sign_%288485145044%29.jpg",
    title: "LA Hacks 2023",
    location: "Los Angeles, USA",
    date: "April 21, 2023 - April 23, 2023",
    price: "0",
    length: "3",
    likes: "1038",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.jpg?b=1&s=170667a&w=0&k=20&c=ILkxevFi52FO-3P8fcWCXJmwiu8F0OZTtabHY-P0MMM=",
    title: "Beach Trip",
    location: "Hawaii, USA",
    date: "May 21, 2022 - December 5 2022",
    price: "6,000",
    length: "197",
    likes: "283",
  },
  {
    id: 1,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
    title: "Japanese Fashion",
    location: "Tokyo, Japan",
    date: "June 19, 2021 - July 6 2021",
    price: 50,
    length: 18,
    hops: 92,
  },
  {
    id: 1,
    image:
      "https://theplanetd.com/images/Where-to-Stay-in-Paris-Neighborhoods.jpg",
    title: "French Eats",
    location: "Paris, France",
    date: "July 9, 2020 - July 23, 2021",
    price: 400,
    length: 14,
    hops: 492,
  },
];

const user1 = {
  id: 1,
  username: "kennywan",
  backgroundImage: "https://images8.alphacoders.com/117/1171898.jpg",
  profilePicture:
    "https://media.licdn.com/dms/image/D5603AQHL80r1eHfwsw/profile-displayphoto-shrink_800_800/0/1664473729287?e=1687392000&v=beta&t=SmnHhFTlmhBGVQRUoDdCK8uCcDzskX7eB7-puT8w5Ww",
  name: "Kenny Wan",
  followerCount: "228K",
  followingCount: "134",
  bio: "LA, 23 y/o, creative mind. Loves traveling on a budget as a student. Message me for recs of places to go :)",
  website: "http://studenttravel.com/",
};

const feedPosts1 = [
  {
    user: {
      name: "Sam",
      profile:
        "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/296896628_1004714266880006_6489686864833512444_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=jf4i82d4YhAAX_rUxpb&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCowUBKq3ZQYO8VXSzBajactx6g4eVmElgV-6xpeKPvVA&oe=644A72E3&_nc_sid=8fd12b",
    },
    title: "Party at Vegas",
    location: "Las Vegas, USA",
    date: "March 20, 2023 - March 24, 2023 ",
    image:
      "https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-1920x1280.jpg",
    likes: 120,
    shares: 67,
    comments: 18,
    length: 5,
    price: "1,270",
    forkFrom: "Terry",
  },
  {
    user: {
      name: "Terry",
      profile:
        "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/322731857_821345912294838_5909768784222420288_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Au-oQPCRwOQAX9bPRZi&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCJkDHZOs7xkLUE0qnWwtqt32n_Ek9Egte8Tz5xHsPn6A&oe=644A1A1A&_nc_sid=8fd12b",
    },
    title: "Hot Winter in Palm Springs",
    location: "Palm Springs, USA",
    date: "February 2, 2023 - February 8, 2023",
    image:
      "https://i.natgeofe.com/n/4610a3ad-fe3c-423e-a5c6-19425bde0d19/golf-palmsprings-california_3x2.jpg",
    likes: 458,
    shares: 182,
    comments: 46,
    length: 7,
    price: "936",
    forkFrom: "Sam",
  },
  {
    user: {
      name: "Krish",
      profile:
        "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/317863835_805851673812096_4454015443692105360_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=EO__GAuYAGIAX_k_ZAZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAAw_tL0y-gqHNJuc5CCJcpgqwRlif2EryygRVqEKL3tA&oe=644A11D1&_nc_sid=8fd12b",
    },
    title: "Powder Mammoth",
    location: "Mammoth Mountain, USA",
    date: "January 27, 2023 - February 2, 2023",
    image:
      "https://www.visitmammoth.com/wp-content/uploads/listing_247-1726.jpg",
    likes: 82,
    shares: 23,
    comments: 6,
    length: 7,
    price: "2,438",
    forkFrom: "Kenny",
  },
];

export { profilePosts1, user1, feedPosts1 };
