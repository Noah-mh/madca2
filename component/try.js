// const data = {
//   budget: 500,
//   subscriptions: [
//     {
//       category: "Entertainment ",
//       cost: "19.99",
//       description: "Music App",
//       subName: "YouTube Premium",
//     },
//     {
//       category: "Entertainment",
//       cost: "39.99",
//       description: "Movie App",
//       subName: "Netflix",
//     },
//     {
//       category: "Entertainment",
//       cost: "29.99",
//       description: "Music App",
//       subName: "Spotify",
//     },
//     {
//       category: "Education",
//       cost: "29.99",
//       description: " App",
//       subName: "Microsoft One Drive",
//     },
//     {
//       category: "Entertainment",
//       cost: "9.99",
//       description: "Movie App",
//       subName: "HBO Go",
//     },
//   ],
//   username: "Moe Htet",
// };

// /*  function getTotalCostByCategory(subscriptions, category) {
//     return subscriptions
//       .filter(subscription => subscription.category.toLowerCase().trim() === category.toLowerCase().trim())
//       .reduce((totalCost, subscription) => totalCost + parseFloat(subscription.cost), 0)
//       .toFixed(2);
//   } */

// const extractCategoryAndCost = (data) => {
//   const subscriptions = data.subscriptions;
//   let categories = [];
//   subscriptions.forEach((sub) => {
//     let found = false;
//     for (let i = 0; i < categories.length; i++) {
//       if (categories[i].category === sub.category.trim()) {
//         categories[i].cost = (
//           parseFloat(categories[i].cost) + parseFloat(sub.cost)
//         ).toString();
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       categories.push({
//         category: sub.category.trim(),
//         cost: sub.cost,
//       });
//     }
//   });
//   return categories;
// };

// const sortedCostData = extractCategoryAndCost(data).sort(
//   (a, b) => a.cost - b.cost
// );
// // console.log(sortedCostData);

// const costForCircularProgressBar = sortedCostData.reduce((acc, curr, index) => {
//   acc.push({
//     id: index + 1,
//     category: curr.category,
//     cost: curr.cost,
//     linearCostStrength: (parseFloat(curr.cost) / data.budget).toFixed(2),
//     CircularCostStrength:
//       (acc[index - 1] ? acc[index - 1].CircularCostStrength : 0) +
//       parseFloat(curr.cost),
//   });

//   return acc;
// }, []);

// console.log(costForCircularProgressBar);
// // const data = {"budget": "500", "subscriptions": [{"category": "Entertainment ", "cost": "19.99", "description": "Music App", "subName": "YouTube Premium"}, {"category": "Entertainment", "cost": "39.99", "description": "Movie App", "subName": "Netflix"}, {"category": "Entertainment", "cost": "29.99", "description": "Music App", "subName": "Spotify"}, {"category": "Education", "cost": "29.99", "description": " App", "subName": "Microsoft One Drive"}, {"category": "Entertainment", "cost": "9.99", "description": "Movie App", "subName": "HBO Go"}], "username": "Moe Htet"};

// const categories = {};
// data.subscriptions.forEach((subscription) => {
//   const category = subscription.category.trim();
//   if (!categories[category]) {
//     categories[category] = parseFloat(subscription.cost);
//   } else {
//     categories[category] += parseFloat(subscription.cost);
//   }
// });
// // console.log(categories);

// const costArray = Object.entries(categories).map(([category, cost]) => ({
//   category,
//   cost,
// }));
// costArray.sort((a, b) => a.cost - b.cost);

// // console.log(costArray)
// const costStrength = [];
// let totalCost = 0;
// for (let i = costArray.length - 1; i >= 0; i--) {
//   totalCost += costArray[i].cost;
//   costStrength[costArray.length - 1 - i] = {
//     category: costArray[i].category,
//     cost: costArray[i].cost,
//     costStrength: (totalCost / data.budget).toFixed(2),
//     costLineStrength: (costArray[i].cost / data.budget).toFixed(2),
//   };
// }

// console.log(costStrength);
const data = {"budget": "500", "subscriptions": [{"category": "Entertainment", "cost": "39.99", "description": "Movie", "subName": "HBO Go", "timestamp": [st]}, {"category": "Transportation", "cost": "15.99", "description": "movie", "subName": "Netflix", "timestamp": [st]}, {"category": "Security", "cost": "18.99", "description": "YT", "subName": "YouTube Premium", "timestamp": [st]}, {"category": "Education", "cost": "9.99", "description": "Edu", "subName": "Microsoft One Drive", "timestamp": [st]}], "username": "Moe Htet"};

const calendarMonth = new Date().getMonth();

const matchingSubscriptions = data.subscriptions.filter(subscription => {
  return calendarMonth === new Date(subscription.timestamp).getMonth();
});

console.log(matchingSubscriptions);



