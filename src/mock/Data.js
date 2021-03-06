import React, { useState, createContext } from "react";

export const FoodContext = createContext();

export const FoodProvider = (props) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Uzbek Osh",
      category: "lunch",
      price: 15000,
      count: 0,
      img:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/93/ef/b2.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 2,
      title: "Qozon Kebab",
      category: "lunch",
      price: 13000,
      count: 0,
      img:
        "https://i.pinimg.com/564x/97/d5/4a/97d54a8a3fc606ac706a9a92c6206621.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 3,
      title: "Bliss",
      category: "shakes",
      price: 6000,
      count: 0,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriVzSer5qZZ7wAgWQMbT4SXwD6GdaiKjzephb-i6HHMrcAQpY15ya3_UFX3wLnYljYdI&usqp=CAU",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 4,
      title: "Lagmon",
      category: "breakfast",
      price: 20000,
      count: 0,
      img: "https://images.megapixl.com/4217/42177113.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 5,
      title: "Set Table for 5 People",
      category: "lunch",
      price: 120000,
      count: 0,
      img:
        "https://fastly.4sqi.net/img/general/600x600/92913240_JAC0AZHXTfvX-QUjPQNYC4rPoYK5qlAwitWZGwBLGzM.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 6,
      title: "Lemon Juice",
      category: "shakes",
      price: 7000,
      count: 0,
      img:
        "https://5.imimg.com/data5/YG/DV/AS/SELLER-2955518/lemon-juice-for-industrial-use--500x500.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 7,
      title: "BreakFast Set Table For 5 People",
      category: "breakfast",
      price: 55000,
      count: 0,
      img:
        "https://c8.alamy.com/comp/2ABN6RN/traditional-uzbek-breakfast-served-on-the-terrace-2ABN6RN.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 8,
      title: "Shashlik",
      category: "lunch",
      price: 13000,
      count: 0,
      img: "https://pbs.twimg.com/media/DoGrGTXXoAEagiY.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 9,
      title: "Somsa",
      category: "lunch",
      price: 5000,
      count: 0,
      img:
        "https://media.istockphoto.com/photos/puff-pastries-with-meat-traditional-uzbek-and-indian-pasrty-picture-id876663356?k=6&m=876663356&s=612x612&w=0&h=L5WYwQwH-ik5_50r2RRniDmt2XViB3HF_kUkTbg0u-s=",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
    {
      id: 10,
      title: "Black Tea",
      category: "shakes",
      price: 3200,
      count: 0,
      img:
        "https://t3.ftcdn.net/jpg/01/59/96/32/360_F_159963245_7M8ZVwOTIYg6MFmH2WXX4E5BNWDtrqSp.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium vel cum suscipit cumque hic dolore ut ab odio, aspernatur quo repellat dicta autem minima molestias atque quis? Eos, voluptatibus. `,
    },
  ]);

  return (
    <FoodContext.Provider value={[menuItems, setMenuItems]}>
      {props.children}
    </FoodContext.Provider>
  );
};
