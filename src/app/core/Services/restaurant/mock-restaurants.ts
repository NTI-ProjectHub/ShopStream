// mock-restaurants.ts
export const MOCK_RESTAURANTS = {
  "success": true,
  "message": "Restaurants retrieved successfully",
  "result": 100, // بدل 50
  "meta": {
    "page": 1,
    "limit": 10,
    "totalPages": 10, // بدل 5
    "count": 100
  },
  "data": [
    // ======= أول 5 أساسيين =======
    {
      "_id": "68af5e25915bb92fab004a25",
      "userId": "68af5e25915bb92fab004a17",
      "name": "Pizza Palace",
      "username": "pizzapalace",
      "description": "Best pizza in town with fresh ingredients.",
      "address": "123 Pizza Street, Food City",
      "phone": "49659582445",
      "coverImage": "https://via.placeholder.com/300x200.png?text=Pizza+Palace",
      "type": ["Food"],
      "rating": 0,
      "completedOrders": 0,
      "status": "pending",
      "__v": 0,
      "createdAt": "2025-08-27T19:36:05.699Z",
      "updatedAt": "2025-08-27T19:36:05.699Z"
    },
    {
      "_id": "68af5e25915bb92fab004a26",
      "userId": "68af5e25915bb92fab004a19",
      "name": "Burger House",
      "username": "burgerhouse",
      "description": "Delicious burgers and fries served daily.",
      "address": "456 Burger Avenue, Snack Town",
      "phone": "71837676384",
      "coverImage": "https://via.placeholder.com/300x200.png?text=Burger+House",
      "type": ["Grocery"],
      "rating": 0,
      "completedOrders": 0,
      "status": "pending",
      "__v": 0,
      "createdAt": "2025-08-27T19:36:05.700Z",
      "updatedAt": "2025-08-27T19:36:05.700Z"
    },
    {
      "_id": "68af5e25915bb92fab004a27",
      "userId": "68af5e25915bb92fab004a1b",
      "name": "Sushi Spot",
      "username": "sushispot",
      "description": "Authentic sushi and Japanese cuisine.",
      "address": "789 Sushi Road, Ocean City",
      "phone": "92707337375",
      "coverImage": "https://via.placeholder.com/300x200.png?text=Sushi+Spot",
      "type": ["Convenience"],
      "rating": 0,
      "completedOrders": 0,
      "status": "pending",
      "__v": 0,
      "createdAt": "2025-08-27T19:36:05.700Z",
      "updatedAt": "2025-08-27T19:36:05.700Z"
    },
    {
      "_id": "68af5e25915bb92fab004a28",
      "userId": "68af5e25915bb92fab004a1d",
      "name": "Taco Town",
      "username": "tacotown",
      "description": "Spicy tacos with fresh salsa and guac.",
      "address": "101 Taco Lane, Fiesta City",
      "phone": "52242863443",
      "coverImage": "https://via.placeholder.com/300x200.png?text=Taco+Town",
      "type": ["Alcohol"],
      "rating": 0,
      "completedOrders": 0,
      "status": "pending",
      "__v": 0,
      "createdAt": "2025-08-27T19:36:05.700Z",
      "updatedAt": "2025-08-27T19:36:05.700Z"
    },
    {
      "_id": "68af5e25915bb92fab004a29",
      "userId": "68af5e25915bb92fab004a15",
      "name": "Pasta Place",
      "username": "pastaplace",
      "description": "Italian pasta made with love.",
      "address": "202 Pasta Blvd, Italy Town",
      "phone": "84356533334",
      "coverImage": "https://via.placeholder.com/300x200.png?text=Pasta+Place",
      "type": ["Health"],
      "rating": 0,
      "completedOrders": 0,
      "status": "pending",
      "__v": 0,
      "createdAt": "2025-08-27T19:36:05.700Z",
      "updatedAt": "2025-08-27T19:36:05.700Z"
    },

    // ======= 45 auto-generated بالـ 10 categories =======
    ...Array.from({ length: 45 }, (_, i) => {
      const index = i % 5;
      const categories = [
        "Food", "Grocery", "Convenience", "Alcohol", "Health",
        "Retail", "Pet", "Flowers", "Personal Care", "Electronics"
      ];
      const names = ["Pizza Palace", "Burger House", "Sushi Spot", "Taco Town", "Pasta Place"];
      return {
        _id: `mock-id-${i + 1}`,
        userId: `mock-user-${i + 1}`,
        name: `${names[index]} ${i + 6}`,
        username: `${names[index].toLowerCase().replace(/\s/g, "")}${i + 6}`,
        description: `Description for ${names[index]} ${i + 6}`,
        address: `${i + 100} Street, City`,
        phone: `${Math.floor(Math.random() * 10000000000)}`,
        coverImage: `https://via.placeholder.com/300x200.png?text=${names[index]}`,
        type: [categories[Math.floor(i / 10)]],
        rating: 0,
        completedOrders: 0,
        status: "pending",
        __v: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    }),

    // ======= 50 مطعم إضافي بأنواع "Food" متنوعة =======
    ...Array.from({ length: 50 }, (_, i) => {
      const foodTypes = [
        "Pizza", "Burger", "Shawarma", "Kebab", "Fried Chicken",
        "Seafood", "BBQ", "Vegan", "Salads", "Sandwiches",
        "Ice Cream", "Desserts", "Coffee", "Bakery", "Juice",
        "Steakhouse", "Ramen", "Dimsum", "Falafel", "Donuts",
        "Tacos", "Nachos", "Hotdog", "Crepes", "Pancakes",
        "Waffles", "Paella", "Samosa", "Biryani", "Curry",
        "Sushi", "Tempura", "Pho", "Spring Rolls", "Dumplings",
        "Churros", "Quesadilla", "Cheesecake", "Brownies", "Cupcakes",
        "Smoothies", "Milkshake", "Bubble Tea", "Frozen Yogurt", "Chocolate",
        "Empanadas", "Pierogi", "Goulash", "Koshary", "Molokhia"
      ];
      const typeName = foodTypes[i % foodTypes.length];
      return {
        _id: `food-id-${i + 1}`,
        userId: `food-user-${i + 1}`,
        name: `${typeName} House ${i + 1}`,
        username: `${typeName.toLowerCase().replace(/\s/g, "")}${i + 1}`,
        description: `Specialized in ${typeName} dishes.`,
        address: `${i + 200} Food Street, Gourmet City`,
        phone: `${Math.floor(Math.random() * 10000000000)}`,
        coverImage: `https://via.placeholder.com/300x200.png?text=${typeName}`,
        type: ["Food"], // كلهم نوع أكل
        rating: 0,
        completedOrders: 0,
        status: "pending",
        __v: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    })
  ]
};
