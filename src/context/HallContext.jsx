import React, { createContext, useContext, useState, useMemo } from "react";
import Hall1 from "../Assets/Hall1.png";
import Hall2 from "../Assets/Hall2.png";
import Hall3 from "../Assets/Hall3.png";
import Hall4 from "../Assets/Hall4.png";

const HallContext = createContext();

export const HallProvider = ({ children }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedHallId, setSelectedHallId] = useState(1);

  const cateringMenu = useMemo(() => [
    "Chicken Biryani",
    "Mutton Karahi",
    "Grilled Seekh Kabab",
    "Vegetable Pulao",
    "Naan & Sheermal Bread",
    "Raita & Fresh Salad",
    "Kheer & Gulab Jamun",
  ], []);

  const hallsData = useMemo(() => [
    { 
      id: 1, 
      name: "The Grand Pavilion",  
      place: "Royal Gardens, Karachi",      
      rooms: 4, 
      images: [Hall1, Hall2, Hall3, Hall4],
      rating: 4.9,
      reviewCount: 128,
      reviews: [
        { name: "Aisha & Bilal", text: "Absolutely stunning venue. The management took care of everything seamlessly. The aesthetics are unmatched.", role: "Married Feb 2026", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Mrs. Khan", text: "We hosted our daughter's reception here. The food was incredible and the ambiance left all our guests speechless.", role: "Event Host", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "Zainab R.", text: "The grand chandelier and floral arrangements were straight out of a fairy tale. Highly recommended!", role: "Guest", photo: "https://randomuser.me/api/portraits/women/12.jpg" }
      ]
    },
    { 
      id: 2, 
      name: "Emerald Ballroom",    
      place: "Crystal Plaza, Lahore",        
      rooms: 4, 
      images: [Hall2, Hall3, Hall4, Hall1],
      rating: 4.8,
      reviewCount: 94,
      reviews: [
        { name: "Sara & Omer", text: "The detailing in the hall decor is exquisite. The catering team is extremely professional and accommodating.", role: "Married Jan 2026", photo: "https://randomuser.me/api/portraits/women/24.jpg" },
        { name: "Ali M.", text: "Spacious parking and beautiful entrance. The food quality was premium.", role: "Guest", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Fatima S.", text: "Perfect for intimate yet grand events. The lighting setup is perfect for photography.", role: "Wedding Photographer", photo: "https://randomuser.me/api/portraits/women/55.jpg" }
      ]
    },
    { 
      id: 3, 
      name: "Golden Oasis",        
      place: "Sunset Boulevard, Islamabad",  
      rooms: 6, 
      images: [Hall3, Hall4, Hall1, Hall2],
      rating: 4.7,
      reviewCount: 156,
      reviews: [
        { name: "Hassan Family", text: "Breathtaking views and gorgeous interior. Best hall in Islamabad by far.", role: "Event Host", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
        { name: "Nadia & Usman", text: "Our valima was hosted here and it was flawless. Thank you to the incredible staff.", role: "Married Nov 2025", photo: "https://randomuser.me/api/portraits/women/94.jpg" }
      ]
    },
    { 
      id: 4, 
      name: "Pearl Sanctuary",     
      place: "Heritage Hill, Multan",        
      rooms: 6, 
      images: [Hall4, Hall1, Hall2, Hall3],
      rating: 4.9,
      reviewCount: 204,
      reviews: [
        { name: "Zara Sheikh", text: "An absolute masterpiece of a venue. The blend of modern and traditional aesthetic is beautiful.", role: "Event Planner", photo: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Hussain Rizvi", text: "The free catering package is a game changer. Exceptional taste and presentation.", role: "Married Dec 2025", photo: "https://randomuser.me/api/portraits/men/51.jpg" },
        { name: "Mariam", text: "Loved every second of my sister's wedding here. 10/10 experience.", role: "Bridesmaid", photo: "https://randomuser.me/api/portraits/women/33.jpg" }
      ]
    },
  ], []);


  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const value = {
    hallsData,
    cateringMenu,
    openMenuId,
    toggleMenu,
    selectedHallId,
    setSelectedHallId
  };

  return <HallContext.Provider value={value}>{children}</HallContext.Provider>;
};

export const useHallContext = () => {
  const context = useContext(HallContext);
  if (!context) {
    throw new Error("useHallContext must be used within a HallProvider");
  }
  return context;
};
