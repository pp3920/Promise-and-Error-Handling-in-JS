import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";


fetchProductCatalog()
  .then((products) => {
    console.log("Fetched products:", products);

    // fetch reviews for all products by using map as the data is in form of array.
    return Promise.all(
      products.map((p) => fetchProductReviews(p.id))
    );  //
  })
  .then((reviews) => {
    console.log("Product Reviews:", reviews);

    // fetch sales report
    return fetchSalesReport();
  })
  .then((sales) => {
    console.log("Product Sales:", sales);
  });

