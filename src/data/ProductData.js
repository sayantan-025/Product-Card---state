const ProductData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679913796054-fc4e44f35b40?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality wireless headphones with noise cancellation.",
    features: [
      "Bluetooth 5.0 connectivity",
      "20-hour battery life",
      "Built-in microphone for calls",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Adjustable stand for all smartphone models.",
    features: [
      "360-degree rotation",
      "Non-slip rubber base",
      "Lightweight aluminum build",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 3,
    name: "Portable Charger",
    price: "$29.99",
    image:
      "https://plus.unsplash.com/premium_photo-1678865183651-ef7d83d50b8f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Compact and fast-charging power bank for your devices.",
    features: [
      "10,000mAh capacity",
      "Dual USB-A and USB-C ports",
      "LED battery level indicator",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$45.99",
    image:
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Crystal-clear sound with a long-lasting battery.",
    features: [
      "IPX7 waterproof rating",
      "12-hour playtime",
      "Bass boost technology",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 5,
    name: "Smartwatch",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1650043079035-a97c338caa6a?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Track your fitness goals with this stylish smartwatch.",
    features: [
      "Heart rate and sleep monitoring",
      "Built-in GPS",
      "Water resistance up to 50 meters",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1662323861979-0538474387e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ergonomic wireless mouse for comfortable use.",
    features: [
      "2.4 GHz wireless connection",
      "Adjustable DPI",
      "Battery life of up to 6 months",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 7,
    name: "Smart LED Bulb",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Smart LED bulb with adjustable color and brightness.",
    features: [
      "Works with Alexa and Google Assistant",
      "16 million colors",
      "Energy-efficient",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 8,
    name: "Fitness Tracker",
    price: "$39.99",
    image:
      "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Track your daily activities and health metrics.",
    features: [
      "Step and calorie counting",
      "Heart rate monitoring",
      "Sleep tracking",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 9,
    name: "Gaming Headset",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEdhbWluZyUyMEhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    description: "Premium gaming headset with noise cancellation.",
    features: [
      "7.1 surround sound",
      "Adjustable headband",
      "Detachable microphone",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 10,
    name: "Laptop Stand",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1623251609314-97cc1f84e3ed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Portable stand for ergonomic laptop use.Extra comfortable",
    features: [
      "Foldable design",
      "Non-slip surface",
      "Lightweight and durable",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 11,
    name: "Electric Kettle",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1633450083431-a111627f6df2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Quick boiling electric kettle for tea and coffee.",
    features: [
      "1.7-liter capacity",
      "Auto shut-off safety feature",
      "Boils water in 3-5 minutes",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 12,
    name: "Mini Projector",
    price: "$119.99",
    image:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Portable mini projector for home theater experience.",
    features: [
      "Supports 1080p resolution",
      "Built-in speakers",
      "Up to 100-inch screen size",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1597961509090-45101abfa9cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Advanced electric toothbrush for a deeper clean.",
    features: [
      "2-minute timer",
      "Multiple cleaning modes",
      "Rechargeable battery",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 14,
    name: "Laptop Backpack",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1667411424771-cadd97150827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish and functional backpack for laptops.",
    features: [
      "Water-resistant fabric",
      "Multiple compartments",
      "Padded laptop sleeve",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 15,
    name: " Vacuum Cleaner",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFZhY3V1bSUyMENsZWFuZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Lightweight and powerful cordless vacuum cleaner.",
    features: [
      "Up to 60 minutes runtime",
      "Multiple suction modes",
      "Easy-to-empty dustbin",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 16,
    name: "Smart Thermostat",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Wi-Fi-enabled thermostat for home automation.",
    features: [
      "Voice control with Alexa and Google Assistant",
      "Energy-saving mode",
      "Remote control via app",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 17,
    name: "Action Camera",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1686226043803-51aea0da1c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWN0aW9uJTIwQ2FtZXJhfGVufDB8fDB8fHww",
    description: "Capture high-quality action shots with this camera.",
    features: ["4K video recording", "Waterproof", "Wide-angle lens"],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 18,
    name: "Electric Grill",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1523139348426-081681667818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indoor electric grill for perfect grilling.Low voltage.",
    features: [
      "Non-stick cooking surface",
      "Adjustable temperature control",
      "Cool-touch handles",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 19,
    name: "Bluetooth Earbuds",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?q=80&w=1667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "True wireless earbuds for all-day comfort. Perfect Fit",
    features: [
      "Touch controls",
      "Water-resistant",
      "Up to 8 hours battery life",
    ],
    isFavourite: false,
    isExpanded: false,
  },
  {
    id: 20,
    name: "Portable Speaker",
    price: "$69.99",
    image:
      "https://images.unsplash.com/photo-1608223652565-63abae6cf733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Portable speaker for outdoor use with great sound.",
    features: ["Bluetooth 5.0", "Waterproof", "10-hour battery life"],
    isFavourite: false,
    isExpanded: false,
  },
];

export default ProductData;
