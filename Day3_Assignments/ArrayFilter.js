const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 15, stock: 20 },
    { name: "Scale", category: "Stationery", price: 15, stock: 20 },
    { name: "Pen", category: "Stationery", price: 12, stock: 20 },
    { name: "Pencil Box", category: "Stationery", price: 30, stock: 10 },
   ];


//Array Filter method to filter the product with category Electronics
   var FilteredArray = products.filter(function(product)
   {
       return product.category ="Electronics";
   }
   );

   console.log(FilteredArray);
