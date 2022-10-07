import { getProducts } from "./database.js"

const products = getProducts();

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("product")) {
            const [,productPrimaryKey] = itemClicked.id.split("--");
            let matchingProduct = null;
            for(const product of products) {
                if(product.id === parseInt(productPrimaryKey)) {
                    matchingProduct = product;
                }
            }

            window.alert(`${matchingProduct.name} costs $${matchingProduct.price}.`)
        }
    }
)


export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += `<ul>`

    return html
}

