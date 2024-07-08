let client = "Marry";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = (arr) => {
  for (let x of arr) {
    console.log(x);
  }
};

// displayGroceries(groceries["fruits"]);
// displayGroceries(groceries.vegetables);
// displayGroceries(groceries.other.meansOfPayment);

const cloneGroceries = () => {
  let user = client;
  user = "Betty";
  console.log(user, client);


  let shopping = { ...groceries };
  shopping.other = { ...groceries.other };
  
  console.log(shopping, groceries);
  shopping.totalPrice = "35$";

  shopping.other.paid = false;

  console.log(shopping, groceries);
};

cloneGroceries();
