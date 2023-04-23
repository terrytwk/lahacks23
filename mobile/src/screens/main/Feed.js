import { ScrollView } from "react-native";

import FeedPost from "../../components/FeedPost";

const Feed = ({ navigation }) => {
  const post = [
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
  return (
    <ScrollView>
      {post.map((p, i) => (
        <FeedPost navigation={navigation} post={p} />
      ))}
    </ScrollView>
  );
};

export default Feed;
