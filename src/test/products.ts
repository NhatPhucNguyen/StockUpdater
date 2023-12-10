export type Product = {
    id: number;
    name: string;
    category: string;
    quantity: number;
    price: number;
    supplier: string;
    imgUrl: string;
};

const testProducts: Product[] = [
    {
        id: 1,
        name: "Quant trident shirts",
        category: "Clothes",
        quantity: 100,
        price: 13.99,
        supplier: "Fast Supp",
        imgUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp",
    },
    {
        id: 2,
        name: "HP Notebook",
        category: "Electronic",
        quantity: 6,
        price: 999,
        supplier: "HP",
        imgUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    },
    {
        id: 3,
        name: "Apple Monitor",
        category: "Electronic",
        quantity: 10,
        price: 5999,
        supplier: "Apple",
        imgUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
    },
];

const productToAdd = localStorage.getItem("productToAdd");
if (productToAdd) {
    testProducts.push(JSON.parse(productToAdd));
}
const productToUpdate = localStorage.getItem("productToUpdate");
if (productToUpdate) {
    const parsedProduct = JSON.parse(productToUpdate) as Product;
    for (const item of testProducts) {
        if (item.id == parsedProduct.id) {
            item.price = parsedProduct.price;
            item.quantity = parsedProduct.quantity;
        }
    }
}
export default testProducts;
