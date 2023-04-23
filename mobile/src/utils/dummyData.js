import {
  walk_of_fame_image,
  korean_bbq_image,
  ucla_image,
  deneve_image,
  getty_image,
} from "./imageLinks";

const itinerary1 = {
  0: [
    {
      time: "10:00",
      location: "Griffith Observatory",
      price: "$20",
      image_url:
        "https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-PiqHSHYO3Uw-unsplash_noCautionTape_web-1600x800-1638571193.jpg",
      category: "Nature",
    },
    {
      time: "1:00",
      location: "Hollywood In N Out",
      price: "$15",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuP7VXem9-hFfl0UeoJ1LTp0z84OhXyhNbxOqSgd4KrA&usqp=CAU&ec=48665701",
      category: "Food",
    },
    {
      time: "2:30",
      location: "Hollywood Walk of Fame",
      price: "Free",
      image_url: walk_of_fame_image,
      category: "Entertainment",
    },
    {
      time: "6:00",
      location: "Korean BBQ Restaurant",
      price: "$30",
      image_url: korean_bbq_image,
      category: "Food",
    },
  ],
  1: [
    {
      time: "9:00",
      location: "UClA",
      price: "$10",
      image_url: ucla_image,
      category: "Architecture",
    },
    {
      time: "12:00",
      location: "De Neve Dining",
      price: "$15",
      image_url: deneve_image,
      category: "Food",
    },
    {
      time: "3:00",
      location: "The Getty Center",
      price: "Free",
      image_url: getty_image,
      category: "Art",
    },
  ],
};

export { itinerary1 };
