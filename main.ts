import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";
import { DataError } from "./DataError.js";
import { networkError } from "./networkError.js";


fetchProductCatalog()
  .then((products) => {
    console.log("Fetched products:", products);

    // fetch reviews for all products by using map as the data is in form of array.
    return Promise.all(
      products.map((p) => fetchProductReviews(p.id))
    );  
  })
  .then((reviews) => {
    console.log("Product Reviews:", reviews);

    // fetch sales report
    return fetchSalesReport();
  })
  .then((sales) => {
    console.log("Product Sales:", sales);
  }) //catch as try is not used in case of promises
  .catch((error) => {
    if (error instanceof DataError) {
      console.error("Data Error:", error.message);
    } else if (error instanceof networkError) {
      console.error("Network Error:", error.message);
    }
    else {
      console.error("Error is out of scope");
    }
  })
  .finally(() => {
    console.log("Everything looks good.");
  });