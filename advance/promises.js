function fetchData() {
  return new Promise((resolve, rejeect) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched Successfully"); //Can pass any type of Data Object,Json.Array
      } else rejeect("Error");
    }, 4000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return "Arpit"; //Can pass any type of Data Object,Json.Array
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
