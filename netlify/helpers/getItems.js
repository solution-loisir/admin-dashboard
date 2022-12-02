const fetch = require("node-fetch");

module.exports = async (token, url) => {
  let allItems = [];

  while(url) {
    const apiResult = await fetch(url, {
      headers: {
        "X-Amilia-Origin": process.env.X_AMILIA_ORIGIN,
        "Authorization": `Bearer ${token}`
      } 
    })
    .then(response => response.json())
    .catch(error => console.error("Error with Amilia getItems", error));
    
    apiResult.Items.forEach(item => allItems.push(item));

    url = apiResult.Paging.Next;
  }

  let allItemsSortedByDate;

  if(allItems[0].StartDate) {
    allItemsSortedByDate = allItems.sort((a, b) =>  new Date(a.StartDate) - new Date(b.StartDate));
  }

  if(allItems[0].Start) {
    allItemsSortedByDate = allItems.sort((a, b) => new Date(b.Start) - new Date(a.Start));
  }

  if(allItems[0].DateCreated) {
    allItemsSortedByDate = allItems.sort((a, b) => new Date(b.DateCreated) - new Date(a.DateCreated));
  }

  return allItemsSortedByDate || allItems;
};