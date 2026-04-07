//Fetch Product Catalog

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
}

//fetchProductReviews(productId: number)

export const fetchProductReviews = (productId: number): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8)
                if (productId === 1) {
                    resolve(["laptop  is in  good condition "]);
                }
                else if (productId === 2)
                    resolve(["Headphones are best here"])

                else {
                    reject("Failed to fetch product catalog");
                }
        }, 1000);
    });
}
//Fetch Sales Report

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { totalSales: 10, unitsSold: 10, averagePrice: 1200 },
                    { totalSales: 20, unitsSold: 12, averagePrice: 200 },
                ]);
            } else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};

