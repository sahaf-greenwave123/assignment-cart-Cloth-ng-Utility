import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./assets/login/login"; // Import your existing login component
import About from "./assets/about/about"; // Import the About component
import Contact from "./assets/contact/contact"; // Import the Contact component
import LEGAL from "./assets/legal/legal";
import Header from "./assets/header/header"; // Import the Header component

// Mock product data (replace with your JSON file or API call)
const products = [





















































 









  

  {
    "id": "qwertyuiop",
    "name": "Black Jacket",
    "price": 60,
    "category": "Comfortable Jacket for everyday wear.",
   "img": "/images/jacket one.png"
  },
  {
    "id": "asdfghjklz",
    "name": "Leather Jacket",
    "price": 200,
    "category": "Premium leather jacket for a classy look.",
   "img": "/images/jacket two.jpg"
  },
  {
    "id": "jfhgbvnscs",
    "name": "Casual Shirt",
    "price": 45,
    "category": "High-quality casual shirt for everyday wear.",
   "img": "/images/img-1.jpg"
  },
  {
    "id": "ioytrhndcv",
   "name": "Office Shirt",
    "price": 100,
    "category": "Perfect office wear for a professional look.",
   "img": "/images/img-2.jpg"
  },
  {
    "id": "wuefbncxbsn",
   "name": "T-Shirt",
    "price": 25,
   "category": "Stylish T-shirt for casual outings.",
   "img": "/images/img-3.png"
  },
  {
    "id": "thyfhcbcv",
    "name": "Men's Suit",
    "price": 300,
   "category": "Premium men's suit for formal occasions.",
    "img": "/images/img-4.jpg"
  },

































































  {
    "id": "e1d2f3a4-b5c6-7890-d1e2-f3a4b5c67890",
    "category": "Men's Sneaker",
    "name": "ADIDAS SAMBA SNEAKER",
    "seller": "Adidas",
    "price": 100,
    "stock": 15,
    "ratings": 5,
    "ratingsCount": 5240,
    "img": "https://tse2.mm.bing.net/th?id=OIP.3yHK_fd1hORjB16MqUzFeQHaFP&pid=Api",
    "shipping": 10,
    "quantity": 0
  },
  {
    "id": "f4b5c6d7-e8f9-0123-a4b5-c6d7e8f90123",
    "category": "Men's Sneaker",
    "name": "ADIDAS GALAXY 7",
    "seller": "Adidas",
    "price": 37,
    "stock": 20,
    "ratings": 4,
    "ratingsCount": 3120,
    "img": "https://tse3.mm.bing.net/th?id=OIP.mtjYQfhcjs6mEGzzP5HJvgHaHa&pid=Api",
    "shipping": 8,
    "quantity": 0
  },
  {
    "id": "g8h9i0j1-k2l3-4567-m8n9-o0p1q2r34567",
    "category": "Men's Sneaker",
    "name": "ADIDAS SUPERSTAR",
    "seller": "Adidas",
    "price": 120,
    "stock": 10,
    "ratings": 5,
    "ratingsCount": 8450,
    "img": "https://tse2.mm.bing.net/th?id=OIP.ulPK0B51KTeS9q6VbgagKAHaJT&pid=Api",
    "shipping": 15,
    "quantity": 0
  },
  {
    "id": "r3s4t5u6-v7w8-9101-x2y3-z4a5b6c78901",
    "category": "Men's Sneaker",
    "name": "ADIDAS STAN SMITH",
    "seller": "Adidas",
    "price": 110,
    "stock": 5,
    "ratings": 4,
    "ratingsCount": 6720,
    "img": "https://tse2.mm.bing.net/th?id=OIP.FnAJC3PTNXZwi0vQsSy2pQHaJT&pid=Api",
    "shipping": 12,
    "quantity": 0
  },
  {
    "id": "b7c8d9e0-f1g2-3456-h7i8-j9k0l1m23456",
    "category": "Men's Sneaker",
    "name": "ADIDAS GAZELLE",
    "seller": "Adidas",
    "price": 130,
    "stock": 8,
    "ratings": 5,
    "ratingsCount": 4900,
    "img": "https://tse2.mm.bing.net/th?id=OIP.ilC7ltdlnW3hgEZTJ3gjQgHaHa&pid=Api",
    "shipping": 14,
    "quantity": 0
  },

































































  {
    "id": "4d5e6f7g-4567-8901-2345-def678901234",
    "category": "Tablet",
    "name": "Apple iPad Mini 6th Gen",
    "seller": "Apple",
    "price": 499,
    "stock": 30,
    "ratings": 4.6,
    "ratingsCount": 60,
    "img": "https://tse3.mm.bing.net/th?id=OIP.I8MDrJY_2VTrl4d65q2qEQHaHp&w=474&h=474&c=7",
    "shipping": 10,
    "quantity": 0
  },











    
    
    
          
          //m//
          

          {
            "id": "toaster-002",
            "category": "Appliance",
            "name": "Microwave Oven Toaster",
            "seller": "Cuisinart",
            "price": 345,
            "stock": 25,
            "ratings": 4.3,
            "ratingsCount": 120,
            "img": "https://static.vecteezy.com/system/resources/previews/037/228/516/non_2x/ai-generated-an-example-of-a-home-kitchen-microwave-free-photo.jpg",
            "shipping": 10,
            "quantity": 0
          },
          {
            "id": "blender-003",
            "category": "Appliance",
            "name": "High-Speed Blender",
            "seller": "Ninja",
            "price": 99,
            "stock": 15,
            "ratings": 4.7,
            "ratingsCount": 200,
            "img": "https://t4.ftcdn.net/jpg/06/28/69/67/360_F_628696774_BaSZiatX7F2axV0eei6tOnl8q1jCOSWF.jpg",
            "shipping": 12,
            "quantity": 0
          },
          {
            "id": "airfryer-004",
            "category": "Appliance",
            "name": "Digital Air Fryer",
            "seller": "Philips",
            "price": 150,
            "stock": 8,
            "ratings": 4.6,
            "ratingsCount": 90,
            "img": "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c1f9208d-1e5e-45b2-b720-007f049fc0c8._SL480_.jpg",
            "shipping": 18,
            "quantity": 0
          },
       














































































































          {
            "id": "02871edc-272b-4e20-bcc2-b32681213b3d",
            "category": "Appliance",
            "name": "Digital Microwave Oven",
            "seller": "Samsung",
            "price": 120,
            "stock": 10,
            "ratings": 4.5,
            "ratingsCount": 85,
            "img": "https://t4.ftcdn.net/jpg/06/12/88/81/360_F_612888121_ZQYOrYHkuPBvRp7C9oc3TKWmsiOMd3ad.jpg",
            "shipping": 15,
            "quantity": 0
          },





















  {
    "id": "microwave-001",
    "category": "Appliance",
    "name": "Digital Microwave Oven",
    "seller": "Samsung",
    "price": 120,
    "stock": 10,
    "ratings": 4.5,
    "ratingsCount": 85,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSv-42nt1vij3Lmtb6q5ViDSN9RcagRsFYlgC6gN_mPKMrGtuh1LPiCY&s",
    "shipping": 15,
    "quantity": 0
  },
  {
    "id": "microwave-002",
    "category": "Appliance",
    "name": "Compact Countertop Microwave",
    "seller": "Panasonic",
    "price": 99,
    "stock": 15,
    "ratings": 4.3,
    "ratingsCount": 60,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojX6A6tBfj0kNjqxl-wTK3aPLX72V_kTB7lyFWsTfQ2bHKQSchoU_6NE&s",
    "shipping": 10,
    "quantity": 0
  },
  {
    "id": "microwave-003",
    "category": "Appliance",
    "name": "Stainless Steel Microwave",
    "seller": "LG",
    "price": 135,
    "stock": 8,
    "ratings": 4.6,
    "ratingsCount": 95,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNN5sAptDW7t3PBRFe8PdvV5Ml-Z8B4g0uRmOtYGVZZt-1TMIvwBEdcE&s",
    "shipping": 12,
    "quantity": 0
  },
  {
    "id": "microwave-004",
    "category": "Appliance",
    "name": "Smart Inverter Microwave",
    "seller": "LG",
    "price": 150,
    "stock": 6,
    "ratings": 4.7,
    "ratingsCount": 110,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuSgv4TFZwvlncGskTdvnxj3t2rJngZqr-6yKlcnzVSj2KYsx6fM5W2k&s",
    "shipping": 18,
    "quantity": 0
  },
  {
    "id": "microwave-005",
    "category": "Appliance",
    "name": "Retro Style Microwave",
    "seller": "Galanz",
    "price": 80,
    "stock": 20,
    "ratings": 4.2,
    "ratingsCount": 55,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3V4His0UUk5yv2ajfUSMiEgawI9BREhjn_9YnZc6P8IU_yoBPCLOFbvg&s",
    "shipping": 8,
    "quantity": 0
  },
  {
    "id": "microwave-006",
    "category": "Appliance",
    "name": "Grill Microwave Oven",
    "seller": "Sharp",
    "price": 140,
    "stock": 7,
    "ratings": 4.4,
    "ratingsCount": 70,
    "img": "https://static.vecteezy.com/system/resources/previews/030/401/116/non_2x/modern-microwave-in-house-kitchen-generative-ai-photo.jpeg",
    "shipping": 16,
    "quantity": 0
  },
  {
    "id": "microwave-007",
    "category": "Appliance",
    "name": "Convection Microwave",
    "seller": "Whirlpool",
    "price": 160,
    "stock": 5,
    "ratings": 4.8,
    "ratingsCount": 120,
    "img": "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    "shipping": 20,
    "quantity": 0
  },





  {
    "id": "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
    "category": "Earphones",
    "name": "adidas Z.N.E. 01 Wireless Earbuds",
    "seller": "Addidas",
    "price": 142,
    "stock": 11,
    "ratings": 5,
    "ratingsCount": 22,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
    "shipping": 23,
    "quantity": 0
  },
  {
    "id": "b278e667-ca17-465c-b603-af1af4319b7b",
    "category": "Earphones",
    "name": "adidas Z.N.E.01 Wireless buds",
    "seller": "Addidas",
    "price": 135,
    "stock": 16,
    "ratings": 5,
    "ratingsCount": 51,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg",
    "shipping": 30,
    "quantity": 0
  },
  {
    "id": "1f56c0e5-4407-44bf-9225-90f592d2924a",
    "category": "Earphones",
    "name": "FWD-01 Sport Headphones",
    "seller": "Addidas",
    "price": 185,
    "stock": 8,
    "ratings": 4,
    "ratingsCount": 66,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2cdb8652aa2340369ba2aa79010062d1_9366/FWD-01_Sport_In-Ear_Headphones_Black_CM5016_01_standard.jpg",
    "shipping": 15,
    "quantity": 0
  },
  {
    "id": "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
    "category": "Earphones",
    "name": "adidas FWD-02 Wireless Earbuds",
    "seller": "Addidas",
    "price": 162,
    "stock": 14,
    "ratings": 4,
    "ratingsCount": 6,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg",
    "shipping": 29,
    "quantity": 0
  },
  {
    "id": "9e7cda87-8160-458f-bd32-ecf253a2d86a",
    "category": "Bottle",
    "name": "Steel Metal Bottle 1L",
    "seller": "Addidas",
    "price": 33,
    "stock": 7,
    "ratings": 4,
    "ratingsCount": 62,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
    "shipping": 15,
    "quantity": 0
  },
  {
    "id": "eaff8921-f7eb-446f-b072-d96559685de0",
    "category": "Bottle",
    "name": "Steel Metal Bottle 1L White",
    "seller": "Addidas",
    "price": 40,
    "stock": 14,
    "ratings": 5,
    "ratingsCount": 58,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg",
    "shipping": 17,
    "quantity": 0
  },
  {
    "id": "96fd22a5-f22f-4ad8-b7b5-f1cfd0852553",
    "category": "Bottle",
    "name": "Steel Metal Bottle 1 L Purple",
    "seller": "Addidas",
    "price": 46,
    "stock": 2,
    "ratings": 5,
    "ratingsCount": 73,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c670a94f6388451a868fad440014460d_9366/Steel_Metal_Bottle_1_L_Purple_EY5529_01_standard.jpg",
    "shipping": 45,
    "quantity": 0
  },
  {
    "id": "02871edc-272b-4e20-bcc2-b32681213b3c",
    "category": "Bottle",
    "name": "Steel Metal Bottle 2L",
    "seller": "Addidas",
    "price": 37,
    "stock": 14,
    "ratings": 4,
    "ratingsCount": 68,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg",
    "shipping": 27,
    "quantity": 0
  },
  {
    "id": "afc5d640-9943-437a-b644-ba1f6f12baa9",
    "category": "Bottle",
    "name": "Steel Straw Metal Bottle 600 ML",
    "seller": "Addidas",
    "price": 43,
    "stock": 10,
    "ratings": 3,
    "ratingsCount": 15,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
    "shipping": 46,
    "quantity": 0
  },
  {
    "id": "5b5c43d9-950d-4b9a-b7d9-ca489224a7b2",
    "category": "Bottle",
    "name": "Steel Metal Bottle 600 ML Yellow",
    "seller": "Addidas",
    "price": 26,
    "stock": 20,
    "ratings": 5,
    "ratingsCount": 83,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
    "shipping": 6,
    "quantity": 0
  },






  
    
    
    
    
    
    
    
    
    
    
    
    
        
        
 
  {
    "id": "b357e19b-4dd9-4fc7-b5c0-9ed5255464ba",
    "category": "Men's Pants",
    "name": "PRIMEBLUE SST TRACK PANTS",
    "seller": "Addidas",
    "price": 63,
    "stock": 46,
    "ratings": 4,
    "ratingsCount": 50,
    "img": "/images/Animation - 1739275103515.gif", 
    "shipping": 20,
    "quantity": 0
  },
   
    












  


        
        
  
  {
    "id": "ae69f0e4-559c-4b24-8032-80b63f9b5073",
    "category": "Men's Pants",
    "name": "TIRO TRACK PANTS RED",
    "seller": "Addidas",
    "price": 122,
    "stock": 43,
    "ratings": 4,
    "ratingsCount": 1239,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 27,
    "quantity": 0
  },
  {
    "id": "dbf7ab3f-b383-4d95-8ab7-f55fcf6fa5f2",
    "category": "Men's Pants",
    "name": "TIRO PANTS BLACK GOLD",
    "seller": "Addidas",
    "price": 115,
    "stock": 26,
    "ratings": 5,
    "ratingsCount": 4557,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 33,
    "quantity": 0
  },
  {
    "id": "ed6a7ac3-7e67-4e3f-8461-bceb5178be42",
    "category": "Men's Pants",
    "name": "TAPERED-CUFF 3-STRIPES PANTS",
    "seller": "Addidas",
    "price": 108,
    "stock": 5,
    "ratings": 3,
    "ratingsCount": 3383,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 26,
    "quantity": 0
  },
  {
    "id": "fd52819a-cb78-4510-ad2f-c5bdd888ae78",
    "category": "Men's Pants",
    "name": "FRENCH TERRY TAPERED CUFF PANTS",
    "seller": "Addidas",
    "price": 189,
    "stock": 27,
    "ratings": 3,
    "ratingsCount": 1974,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 20,
    "quantity": 0
  },
  {
    "id": "c667d3ff-41eb-4cf7-a433-819d959ea768",
    "category": "Men's Pants",
    "name": "FRENCH OPEN HEM 3-STRIPES TRACK PANTS",
    "seller": "Addidas",
    "price": 58,
    "stock": 41,
    "ratings": 5,
    "ratingsCount": 2140,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 49,
    "quantity": 0
  },
  {
    "id": "e1dbc7fe-be17-4e0f-9e2d-6ad5dbc102fc",
    "category": "Men's Pants",
    "name": "FRENCH ESSENTIALS4GAMEDAY PANTS",
    "seller": "Addidas",
    "price": 185,
    "stock": 43,
    "ratings": 5,
    "ratingsCount": 2676,
    "img": "/images/Animation - 1739275103515.gif",
    "shipping": 27,
    "quantity": 0
  },
 
    
    
    




































































































      {
        "id": "1d54fd83-83df-42f8-ae2b-f5ef9d4987ea",
        "category": "Men's Sneaker",
        "name": "MOVE FEELREADY SPORT TEE",
        "seller": "Addidas",
        "price": 14,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4041,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 5,
        "quantity": 0
      },
      {
        "id": "1ce97e0e-3611-4406-8788-7b413640f59e",
        "category": "Men's Sneaker",
        "name": "ADIDAS CAMO BOX GRAPHIC TEE",
        "seller": "Addidas",
        "price": 16,
        "stock": 10,
        "ratings": 3,
        "ratingsCount": 4505,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 11,
        "quantity": 0
      },
      {
        "id": "f088beb8-d664-4166-99f8-6995c2f08465",
        "category": "Men's Sneaker",
        "name": "ADICOLOR CLASSICS TREFOIL TEE",
        "seller": "Addidas",
        "price": 20,
        "stock": 12,
        "ratings": 4,
        "ratingsCount": 41,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 38,
        "quantity": 0
      },
      {
        "id": "26dd7da8-c854-4bab-aaf5-32cc964da2ec",
        "category": "Men's Sneaker",
        "name": "LNY TREFOIL FILL TEE",
        "seller": "Addidas",
        "price": 16,
        "stock": 17,
        "ratings": 4,
        "ratingsCount": 4985,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 35,
        "quantity": 0
      },
      {
        "id": "a2615943-7eeb-4d6a-ab1b-78fb51ce39da",
        "category": "Men's Sneaker",
        "name": "CREATOR 365 TEE",
        "seller": "Addidas",
        "price": 34,
        "stock": 20,
        "ratings": 3,
        "ratingsCount": 4727,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 2,
        "quantity": 0
      },
      {
        "id": "27cf3efa-7352-4889-85c4-44a4de2aa93a",
        "category": "Men's Sneaker",
        "name": "OWN THE RUN LONG SLEEVE TEE",
        "seller": "Addidas",
        "price": 23,
        "stock": 17,
        "ratings": 3,
        "ratingsCount": 4003,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 2,
        "quantity": 0
      },
      {
        "id": "6add9d60-1339-4115-b2ac-00d4886f4ad7",
        "category": "Men's Sneaker",
        "name": "NYC BADGE SPORT LOGO GRAPHIC TEE",
        "seller": "Addidas",
        "price": 29,
        "stock": 6,
        "ratings": 3,
        "ratingsCount": 805,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 6,
        "quantity": 0
      },
      {
        "id": "1b6f1af1-2103-4838-932d-2b98dfdb6c1f",
        "category": "Men's Sneaker",
        "name": "RUNNER TEE",
        "seller": "Addidas",
        "price": 20,
        "stock": 7,
        "ratings": 5,
        "ratingsCount": 3343,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 48,
        "quantity": 0
      },
      {
        "id": "c6cb80a7-3542-4270-bd2b-920efd5f3f85",
        "category": "Men's Sneaker",
        "name": "V-DAY TEE (GENDER NEUTRAL)",
        "seller": "Addidas",
        "price": 18,
        "stock": 2,
        "ratings": 4,
        "ratingsCount": 1590,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 13,
        "quantity": 0
      },
      {
        "id": "f54a4763-b8c2-4922-ba8d-80652a64f5bc",
        "category": "Men's Sneaker",
        "name": "ESSENTIALS COLORBLOCK TEE",
        "seller": "Addidas",
        "price": 35,
        "stock": 6,
        "ratings": 3,
        "ratingsCount": 2680,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 39,
        "quantity": 0
      },
     




































































    
            
            
            
            
            
            
            
              
            
            
            
            
            
            
            
            
            
            
            
            
            
              
      {
        "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        "category": "Men's Sneaker",
        "name": "ULTRABOOST 22 SHOES",
        "seller": "Addidas",
        "price": 420,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3725,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
      },
      {
        "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        "category": "Men's Sneaker",
        "name": "LUNAR ULTRABOOST SHOES",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
      },
      {
        "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        "category": "Men's Sneaker",
        "name": "SUPERNOVA SHOES",
        "seller": "Addidas",
        "price": 245,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3972,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
      },
      {
        "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        "category": "Men's Sneaker",
        "name": "LITE RACER ADAPT 3.0 SHOES",
        "seller": "Addidas",
        "price": 229,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 1764,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        "shipping": 32,
        "quantity": 0
      },
      {
        "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        "category": "Men's Sneaker",
        "name": "4DFWD SHOES",
        "seller": "Addidas",
        "price": 287,
        "stock": 11,
        "ratings": 4,
        "ratingsCount": 799,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
        "shipping": 49,
        "quantity": 0
      },
      {
        "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        "category": "Men's Sneaker",
        "name": "KAPTIR 2.0 SHOES",
        "seller": "Addidas",
        "price": 138,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4372,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
        "shipping": 19,
        "quantity": 0
      },
    
    
      {
        "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
        "category": "Men's Sneaker",
        "name": "4DFWD PULSE SHOES",
        "seller": "Addidas",
        "price": 226,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 2870,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
        "shipping": 15,
        "quantity": 0
      },
      {
        "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
        "category": "Men's Sneaker",
        "name": "ZX 1K BOOST SHOES",
        "seller": "Addidas",
        "price": 319,
        "stock": 7,
        "ratings": 4,
        "ratingsCount": 1360,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
        "shipping": 50,
        "quantity": 0
      },
      {
        "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
        "category": "Men's Sneaker",
        "name": "NMD_R1 V2 SHOES",
        "seller": "Addidas",
        "price": 260,
        "stock": 4,
        "ratings": 5,
        "ratingsCount": 1976,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
        "shipping": 46,
        "quantity": 0
      },
      {
        "id": "ac44095f-230e-4502-8816-dea3eaae8320",
        "category": "Men's Sneaker",
        "name": "NMD_R1 PRIMEBLUE SHOES",
        "seller": "Addidas",
        "price": 437,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 565,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
        "shipping": 36,
        "quantity": 0
      },
      {
        "id": "d0803f97-966f-4296-ad31-a7f70fc86fab",
        "category": "Men's Pants",
        "name": "TIRO TRACK PANTS",
        "seller": "Addidas",
        "price": 146,
        "stock": 15,
        "ratings": 5,
        "ratingsCount": 3702,
        "img": "/images/Animation - 1739275103515.gif", 
        "shipping": 29,
        "quantity": 0
      },
      {
        "id": "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
        "category": "Men's Pants",
        "name": "TIRO 21 TRACK PANTS",
        "seller": "Addidas",
        "price": 109,
        "stock": 6,
        "ratings": 5,
        "ratingsCount": 1688,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
        "shipping": 48,
        "quantity": 0
      },














      {
        "id": "0298e695-1f9b-49b1-9961-8a8460f95b1c",
        "category": "Men's Boot",
        "name": "TERREX FREE HIKER GORE-TEX HIKING SHOES",
        "seller": "Addidas",
        "price": 132,
        "stock": 1,
        "ratings": 3,
        "ratingsCount": 128,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12cf12ac1c8e484ea487ad6400ee3444_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Black_GZ0355_01_standard.jpg",
        "shipping": 13,
        "quantity": 0
      },
      {
        "id": "3cfe9adc-c27f-4be4-a859-a5c98ce88a27",
        "category": "Men's Boot",
        "name": "TERREX AX4 MID GORE-TEX HIKING SHOES",
        "seller": "Addidas",
        "price": 111,
        "stock": 19,
        "ratings": 4,
        "ratingsCount": 894,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfa8c9a7d2864065b27fad7400b2e05e_9366/Terrex_AX4_Mid_GORE-TEX_Hiking_shoes_Black_FY9638_01_standard.jpg",
        "shipping": 27,
        "quantity": 0
      },
      {
        "id": "6602468a-a3a8-4c2c-9d3a-fd54e2c5daf7",
        "category": "Men's Boot",
        "name": "FRENCH RESPONSE LEXICON 3MC ADV BOOTS",
        "seller": "Addidas",
        "price": 104,
        "stock": 6,
        "ratings": 5,
        "ratingsCount": 354,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b513f2cec8b440978d60ab6d014ad452_9366/Response_3MC_ADV_Boots_Black_EG9391_01_standard.jpg",
        "shipping": 26,
        "quantity": 0
      },
      {
        "id": "5db3ee2f-2eb7-4764-942d-894f72198e86",
        "category": "Men's Boot",
        "name": "FRENCH TACTICAL LEXICON ADV BOOTS",
        "seller": "Addidas",
        "price": 151,
        "stock": 3,
        "ratings": 4,
        "ratingsCount": 584,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5350f3d583c46038534ab6d01445e2a_9366/Tactical_Lexicon_ADV_Boots_Grey_EG9386_01_standard.jpg",
        "shipping": 33,
        "quantity": 0
      },
      {
        "id": "9b169efb-0966-40f3-b9c2-79b16cb96388",
        "category": "Men's Boot",
        "name": "Superstar Boots",
        "seller": "Addidas",
        "price": 151,
        "stock": 13,
        "ratings": 3,
        "ratingsCount": 1010,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6853ac5565a9407bae19ac080120d9d7_9366/Superstar_Boots_Red_FZ2642_01_standard.jpg",
        "shipping": 4,
        "quantity": 0
      },
      {
        "id": "fb1f9913-d903-498c-9e4a-16d363aa2eba",
        "category": "Men's Boot",
        "name": "TACTICAL LEXICON ADV BOOTS",
        "seller": "Addidas",
        "price": 199,
        "stock": 14,
        "ratings": 4,
        "ratingsCount": 2422,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a819de9f29c498fae13ab6d01473c4d_9366/Tactical_Lexicon_ADV_Boots_White_EG9385_01_standard.jpg",
        "shipping": 39,
        "quantity": 0
      },
      {
        "id": "fe48e340-4dc9-44b3-911b-9308b4f530b3",
        "category": "Men's Boot",
        "name": "MID COLD.RDY HIKING SHOES",
        "seller": "Addidas",
        "price": 110,
        "stock": 16,
        "ratings": 3,
        "ratingsCount": 1533,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ee4c27eba64258bcbaad5100e5d998_9366/Terrex_Trailmaker_Mid_COLD.RDY_Hiking_Shoes_Brown_FZ3370_01_standard.jpg",
        "shipping": 33,
        "quantity": 0
      },
      {
        "id": "2e06fa90-2961-4867-8322-6fdcca2f086a",
        "category": "Men's Boot",
        "name": "TERREX FREE HIKER GORE-TEX HIKING SHOES",
        "seller": "Addidas",
        "price": 155,
        "stock": 4,
        "ratings": 5,
        "ratingsCount": 1351,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/efbedb26b92e4affa103ad6b008a789a_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Grey_GZ0356_01_standard.jpg",
        "shipping": 38,
        "quantity": 0
      },
      {
        "id": "008c06dd-04e4-4923-b840-927bd6b4c2de",
        "category": "Men's Boot",
        "name": "TERREX AGRAVIC TECH PRO TRAIL RUNNING SHOES",
        "seller": "Addidas",
        "price": 118,
        "stock": 8,
        "ratings": 3,
        "ratingsCount": 1798,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg",
        "shipping": 37,
        "quantity": 0
      },
      {
        "id": "b4d83415-d20a-4bba-8629-22b2780b6e93",
        "category": "Men's Boot",
        "name": "TERREX FREE HIKER COLD.RDY HIKING BOOTS",
        "seller": "Addidas",
        "price": 169,
        "stock": 17,
        "ratings": 5,
        "ratingsCount": 2833,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ded0bee28b249bbb19cad5000818b77_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Black_FZ3364_01_standard.jpg",
        "shipping": 10,
        "quantity": 0
      },
    
      {
        "id": "e4220958-06d2-4d50-96fa-0163a563f43d",
        "category": "Men's Pants",
        "name": "TIRO 21 TRACK PANTS",
        "seller": "Addidas",
        "price": 148,
        "stock": 41,
        "ratings": 3,
        "ratingsCount": 4483,
        "img": "/images/Animation - 1739275103515.gif",
        "shipping": 8,
        "quantity": 0
      },
    
    























      {
        "id": "4a0090e7-b65d-4f6e-a42b-5603a3f51883",
        "category": "Bag",
        "name": "3-Stripes Backpack 2.0",
        "seller": "Addidas",
        "price": 74,
        "stock": 7,
        "ratings": 5,
        "ratingsCount": 365,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba79ccb861fd4fd49e3aac9f006a6407_9366/3-Stripes_Backpack_2.0_Grey_EX6735_01_standard.jpg",
        "shipping": 23,
        "quantity": 0
      },
      {
        "id": "0ac76ee7-53f1-45ba-b5ca-81ff6063bc1a",
        "category": "Bag",
        "name": "Trefoil Backpack",
        "seller": "Addidas",
        "price": 65,
        "stock": 3,
        "ratings": 4,
        "ratingsCount": 465,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a520df1b51384c00af9caca100489f04_9366/Trefoil_Backpack_Black_EX6752_01_standard.jpg",
        "shipping": 36,
        "quantity": 0
      },
      {
        "id": "1770549a-571b-4baf-bc58-7bae7a228dcb",
        "category": "Bag",
        "name": "Santiago Lunch Bag",
        "seller": "Addidas",
        "price": 63,
        "stock": 10,
        "ratings": 3,
        "ratingsCount": 346,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg",
        "shipping": 42,
        "quantity": 0
      },
      {
        "id": "24b20ba6-9024-4b0a-b8a9-cf937521cede",
        "category": "Bag",
        "name": "Blue Version Backpack",
        "seller": "Addidas",
        "price": 87,
        "stock": 15,
        "ratings": 5,
        "ratingsCount": 234,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9e0c5635057425daab5ad0b0089194b_9366/Blue_Version_Backpack_Black_H22735_01_standard.jpg",
        "shipping": 21,
        "quantity": 0
      },
      {
        "id": "a7231186-0316-4cc0-94bf-4f496a382346",
        "category": "Bag",
        "name": "Defender Backpack",
        "seller": "Addidas",
        "price": 96,
        "stock": 10,
        "ratings": 4,
        "ratingsCount": 241,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg",
        "shipping": 15,
        "quantity": 0
      },
      {
        "id": "35ac57f9-870a-4299-aac8-e5d8d2716b31",
        "category": "Bag",
        "name": "Excel Backpack",
        "seller": "Addidas",
        "price": 62,
        "stock": 18,
        "ratings": 5,
        "ratingsCount": 168,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
      },
      {
        "id": "c50bebaf-2633-4674-aba2-25be34bfdbba",
        "category": "Bag",
        "name": "Alliance Sackpack",
        "seller": "Addidas",
        "price": 99,
        "stock": 16,
        "ratings": 3,
        "ratingsCount": 311,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e8a6f09838d49c3b00fad4f0017f753_9366/Alliance_Sackpack_White_FZ6823_01_standard.jpg",
        "shipping": 40,
        "quantity": 0
      },
      {
        "id": "ff5bf372-7ed1-4904-aac5-7a2ce98e70ef",
        "category": "Bag",
        "name": "R.Y.V. Toploader Backpack",
        "seller": "Addidas",
        "price": 56,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 471,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1c87c940836e4628852bad130101e5c6_9366/R.Y.V._Toploader_Backpack_Black_H32458_01_standard.jpg",
        "shipping": 20,
        "quantity": 0
      },
      {
        "id": "83ef9902-0224-48d3-ba7c-eeff3e678d13",
        "category": "Bag",
        "name": "Adicolor Archive Backpack",
        "seller": "Addidas",
        "price": 84,
        "stock": 5,
        "ratings": 4,
        "ratingsCount": 445,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0bb325f9cc174ea4bed7ad9e0101b682_9366/Adicolor_Archive_Backpack_Green_HE9804_01_standard.jpg",
        "shipping": 19,
        "quantity": 0
      },
      {
        "id": "7490b4c8-8242-4de5-b161-b8ac96ea0e0b",
        "category": "Bag",
        "name": "R.Y.V. Backpack",
        "seller": "Addidas",
        "price": 67,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 83,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc7dca21df62473ea518ade101251809_9366/R.Y.V._Backpack_Black_HD9650_01_standard.jpg",
        "shipping": 24,
        "quantity": 0
      },
      {
        "id": "b1872b25-ba91-48ed-9468-1822df0637b9",
        "category": "Cap",
        "name": "Relaxed Strap-Back Hat",
        "seller": "Addidas",
        "price": 30,
        "stock": 6,
        "ratings": 4,
        "ratingsCount": 4,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4feb20f4d990407cb4f1a88a0040b212_9366/Relaxed_Strap-Back_Hat_Black_BH7137_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
      },
      {
        "id": "ea028038-4e9d-42bf-b033-88aa5e6cc477",
        "category": "Cap",
        "name": "Icon Snapback Hat",
        "seller": "Addidas",
        "price": 21,
        "stock": 13,
        "ratings": 4,
        "ratingsCount": 1,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e27ae8bbfb647489261ac8e015d181f_9366/Icon_Snapback_Hat_Grey_EX6798_01_standard.jpg",
        "shipping": 26,
        "quantity": 0
      },
      {
        "id": "d48e0fcb-904c-499e-93a0-312d77e6dbf9",
        "category": "Cap",
        "name": "Superlite Hat",
        "seller": "Addidas",
        "price": 11,
        "stock": 18,
        "ratings": 3,
        "ratingsCount": 39,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ae141db6fce44999337ac8e015954ea_9366/Superlite_Hat_Grey_EX7054_01_standard.jpg",
        "shipping": 32,
        "quantity": 0
      },
      {
        "id": "71dfc7f9-844b-4be7-816f-891a5cbaa0f1",
        "category": "Cap",
        "name": "Superlite Hat",
        "seller": "Addidas",
        "price": 10,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 47,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/272d5d9cb7b74415a6c9ac8e015a4ccc_9366/Superlite_Hat_Black_EX7048_01_standard.jpg",
        "shipping": 24,
        "quantity": 0
      },
      {
        "id": "a9d89eac-7418-4bca-a484-c8238c356270",
        "category": "Cap",
        "name": "Tee Time 5-Panel Hat",
        "seller": "Addidas",
        "price": 24,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 14,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/df67ab60b5574c368b76adf9010f2d2d_9366/Tee_Time_5-Panel_Hat_Black_HA9254_01_standard.jpg",
        "shipping": 48,
        "quantity": 0
      },
      {
        "id": "f6a5e6c0-5aec-4f10-84d7-bde9b6199045",
        "category": "Cap",
        "name": "Baseball Cap",
        "seller": "Addidas",
        "price": 17,
        "stock": 7,
        "ratings": 5,
        "ratingsCount": 37,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ce5f49aa0914deabf16adc600d09e60_9366/Baseball_Cap_Black_HD7039_01_standard.jpg",
        "shipping": 48,
        "quantity": 0
      },
      {
        "id": "625b4b60-611c-490c-ac0a-f3c2d2afd05c",
        "category": "Cap",
        "name": "Relaxed Strap-Back Hat",
        "seller": "Addidas",
        "price": 24,
        "stock": 9,
        "ratings": 5,
        "ratingsCount": 15,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aaa5ae549c624178bc25a740012dd61f_9366/Relaxed_Strap-Back_Hat_White_BH7135_01_standard.jpg",
        "shipping": 6,
        "quantity": 0
      },
      {
        "id": "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
        "category": "Cap",
        "name": "UNISEX ORIGINALS WASHED BUCKET",
        "seller": "Addidas",
        "price": 27,
        "stock": 14,
        "ratings": 4,
        "ratingsCount": 3,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1e758585df14bbbb7d8aaf000c95bd7_9366/UNISEX_ORIGINALS_WASHED_BUCKET_White_CM3933_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
      },
      {
        "id": "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
        "category": "Cap",
        "name": "SST Plus Strap-Back Hat",
        "seller": "Addidas",
        "price": 23,
        "stock": 14,
        "ratings": 4,
        "ratingsCount": 32,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92e77a8d84d845d19171ad50003f2ea1_9366/SST_Plus_Strap-Back_Hat_White_FZ8569_01_standard.jpg",
        "shipping": 47,
        "quantity": 0
      },
      {
        "id": "5690e579-a943-4b42-9ffe-dfc65b71c560",
        "category": "Cap",
        "name": "Dispatch Trucker Hat",
        "seller": "Addidas",
        "price": 28,
        "stock": 16,
        "ratings": 4,
        "ratingsCount": 30,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
      },
      {
        "id": "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
        "category": "Earphones",
        "name": "adidas Z.N.E. 01 Wireless Earbuds",
        "seller": "Addidas",
        "price": 142,
        "stock": 11,
        "ratings": 5,
        "ratingsCount": 22,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
        "shipping": 23,
        "quantity": 0
      },
      {
        "id": "b278e667-ca17-465c-b603-af1af4319b7b",
        "category": "Earphones",
        "name": "adidas Z.N.E. 01 ANC Wireless Earbuds",
        "seller": "Addidas",
        "price": 135,
        "stock": 16,
        "ratings": 5,
        "ratingsCount": 51,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg",
        "shipping": 30,
        "quantity": 0
      },
      {
        "id": "1f56c0e5-4407-44bf-9225-90f592d2924a",
        "category": "Earphones",
        "name": "FWD-01 Sport In-Ear Headphones",
        "seller": "Addidas",
        "price": 185,
        "stock": 8,
        "ratings": 4,
        "ratingsCount": 66,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2cdb8652aa2340369ba2aa79010062d1_9366/FWD-01_Sport_In-Ear_Headphones_Black_CM5016_01_standard.jpg",
        "shipping": 15,
        "quantity": 0
      },
      {
        "id": "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
        "category": "Earphones",
        "name": "adidas FWD-02 Sport True Wireless Earbuds",
        "seller": "Addidas",
        "price": 162,
        "stock": 14,
        "ratings": 4,
        "ratingsCount": 6,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg",
        "shipping": 29,
        "quantity": 0
      },
      {
        "id": "d1116075-10f2-49c4-985e-0d41e19ce1b3",
        "category": "Earphones",
        "name": "adidas Z.N.E. 01 ANC True Wireless Earbuds",
        "seller": "Addidas",
        "price": 110,
        "stock": 15,
        "ratings": 5,
        "ratingsCount": 9,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg",
        "shipping": 48,
        "quantity": 0
      },
      {
        "id": "d1116075-10f2-49c4-985e-fg41e19dc1b8",
        "category": "Earphones",
        "name": "traditional RPT-01 Sport On-Ear Headphones",
        "seller": "Addidas",
        "price": 170,
        "stock": 15,
        "ratings": 5,
        "ratingsCount": 55,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c697ceddb0c2469aaa2eaa7101121d10_9366/RPT-01_Sport_On-Ear_Headphones_Black_CM5015_01_standard.jpg",
        "shipping": 48,
        "quantity": 0
      },
      {
        "id": "9e7cda87-8160-458f-bd32-ecf253a2d86a",
        "category": "Bottle",
        "name": "Steel Metal Bottle 1L",
        "seller": "Addidas",
        "price": 33,
        "stock": 7,
        "ratings": 4,
        "ratingsCount": 62,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
        "shipping": 15,
        "quantity": 0
      },
      {
        "id": "eaff8921-f7eb-446f-b072-d96559685de0",
        "category": "Bottle",
        "name": "Steel Metal Bottle 1L",
        "seller": "Addidas",
        "price": 40,
        "stock": 14,
        "ratings": 5,
        "ratingsCount": 58,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg",
        "shipping": 17,
        "quantity": 0
      },
      {
        "id": "96fd22a5-f22f-4ad8-b7b5-f1cfd0852553",
        "category": "Bottle",
        "name": "Steel Metal Bottle 1 L",
        "seller": "Addidas",
        "price": 46,
        "stock": 2,
        "ratings": 5,
        "ratingsCount": 73,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c670a94f6388451a868fad440014460d_9366/Steel_Metal_Bottle_1_L_Purple_EY5529_01_standard.jpg",
        "shipping": 45,
        "quantity": 0
      },
      {
        "id": "e1a7c529-f91b-4ef5-a661-c2317c5c314e",
        "category": "Bottle",
        "name": "Steel Metal Bottle 1L",
        "seller": "Addidas",
        "price": 20,
        "stock": 14,
        "ratings": 5,
        "ratingsCount": 63,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/29ef510920b54492a721aa1c01782cb2_9366/Steel_Metal_Bottle_1L_White_CL6092_01_standard.jpg",
        "shipping": 21,
        "quantity": 0
      },
      {
        "id": "e912ad01-2551-48dc-a709-4054cbfbcbbc",
        "category": "Bottle",
        "name": "Steel Metal Bottle 600 ML",
        "seller": "Addidas",
        "price": 43,
        "stock": 19,
        "ratings": 4,
        "ratingsCount": 64,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
        "shipping": 43,
        "quantity": 0
      },
      {
        "id": "afc5d640-9943-437a-b644-ba1f6f12baa9",
        "category": "Bottle",
        "name": "Steel Straw Metal Bottle 600 ML",
        "seller": "Addidas",
        "price": 43,
        "stock": 10,
        "ratings": 3,
        "ratingsCount": 15,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
        "shipping": 46,
        "quantity": 0
      },
      {
        "id": "5b5c43d9-950d-4b9a-b7d9-ca489224a7b2",
        "category": "Bottle",
        "name": "Steel Metal Bottle 600 ML",
        "seller": "Addidas",
        "price": 26,
        "stock": 20,
        "ratings": 5,
        "ratingsCount": 83,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
        "shipping": 6,
        "quantity": 0
      },
      {
        "id": "96239c09-8b1c-4c81-99f9-f43e7613eab3",
        "category": "Bottle",
        "name": "Squad Glass Bottle 720 ML",
        "seller": "Addidas",
        "price": 39,
        "stock": 20,
        "ratings": 3,
        "ratingsCount": 1,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/77ad16764abf4e828560ad44001cd640_9366/Squad_Glass_Bottle_720_ML_Black_FZ7115_01_standard.jpg",
        "shipping": 5,
        "quantity": 0
      },
     
                
            
            
];

// Home Component (Main Shop Page)
const Home = () => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [shopItemsData, setShopItemsData] = useState(products);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(basket));
  }, [basket]);

  const increment = (id) => {
    const updatedBasket = [...basket];
    const item = updatedBasket.find((x) => x.id === id);
    if (item) {
      item.quantity += 1;
    } else {
      updatedBasket.push({ id, quantity: 1 });
    }
    setBasket(updatedBasket);
  };

  const decrement = (id) => {
    let updatedBasket = [...basket];
    const item = updatedBasket.find((x) => x.id === id);
    if (item) {
      if (item.quantity === 1) {
        updatedBasket = updatedBasket.filter((x) => x.id !== id);
      } else {
        item.quantity -= 1;
      }
      setBasket(updatedBasket);
    }
  };

  const removeItem = (id) => {
    const updatedBasket = basket.filter((x) => x.id !== id);
    setBasket(updatedBasket);
  };

  const clearCart = () => {
    setBasket([]);
  };

  const getQuantity = (id) => {
    const item = basket.find((x) => x.id === id);
    return item ? item.quantity : 0;
  };

  const calculateSubtotal = () => {
    return basket
      .map((x) => {
        const item = shopItemsData.find((y) => y.id === x.id);
        return item ? x.quantity * item.price : 0;
      })
      .reduce((x, y) => x + y, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.1;
    const shippingCost = 15;
    const tax = subtotal * taxRate;
    return subtotal + tax + shippingCost;
  };

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Shop Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {shopItemsData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 p-4 rounded-md flex flex-col justify-between h-full"
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-4"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200 mb-4">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.category}</p>
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <h2 className="text-xl font-semibold">${item.price}</h2>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </button>
                  <span>{getQuantity(item.id)}</span>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/4">
          {basket.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-center">Cart</h2>
              <h3 className="text-xl font-bold mt-4">
                Subtotal: ${calculateSubtotal()}
              </h3>
              <h3 className="text-lg mt-2">
                Tax (10%): ${(calculateSubtotal() * 0.1).toFixed(2)}
              </h3>
              <h3 className="text-lg mt-2">Shipping: $15</h3>
              <h3 className="text-xl font-bold mt-4">
                Total: ${calculateTotal()}
              </h3>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition duration-200"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-green-600 transition duration-200"
                onClick={() => alert("Proceeding to checkout...")}
              >
                Buy Now
              </button>

              <div className="mt-6 max-h-96 overflow-y-auto">
                {basket.map((x) => {
                  const item = shopItemsData.find((y) => y.id === x.id);
                  return (
                    <div
                      key={x.id}
                      className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded"
                    >
                      <div>
                        <h4 className="font-semibold">{item?.name}</h4>
                        <p className="text-sm text-gray-600">
                          ${item?.price} x {x.quantity} = $
                          {x.quantity * item?.price}
                        </p>
                      </div>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                        onClick={() => removeItem(x.id)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <h2 className="text-2xl font-bold text-center">Your cart is empty!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-4">
              <Link to="/contact">CONTACT</Link>
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300">Branding</li>
              <li className="hover:text-blue-300">Design</li>
              <li className="hover:text-blue-300">Marketing</li>
              <li className="hover:text-blue-300">Advertisement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-4">
              <Link to="/about">COMPANY</Link>
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-red-300">About us</li>
              <li className="hover:text-red-300">Services</li>
              <li className="hover:text-red-300">Jobs</li>
              <li className="hover:text-red-300">Press kit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-4">
              <Link to="/lEGAL">LEGAL</Link>
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-green-300">Terms of use</li>
              <li className="hover:text-green-300">Privacy policy</li>
              <li className="hover:text-green-300">Cookie policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lEGAL" element={<LEGAL />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;