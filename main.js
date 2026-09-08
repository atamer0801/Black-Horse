fetch("https://fakestoreapi.com/products")

.then(response => response.json())
.then(data => {
    const products = document.getElementById("products")
    data.forEach(product=>{
        products.innerHTML+=`
        <div class="card">
            <img style="background-color:blue:" class="image" src="${product.image}" alt="">
            <div class="body-text-1">
                <h1 class="header">${product.title}</h1>
                <p class="price">$${product.price}</p>
                <button class="btn-1">Add To Cart</button>
            </div>
        </div>
        `
    })
})