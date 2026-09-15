const ProductsContainer = document.querySelector("#Product")

async function getProduct(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!response.ok){
            throw new Error("Failed to fetch Api")
        }

        const products = await response.json()
        products.forEach((product) => {
            ProductsContainer.innerHTML += `
            <div class="card">
                <h1 class="title">${product.title}</h1>
                <p class="body">${product.body}</p>
            </div>`
        })
    }

    catch(error){
        console.log(error.message);
    }
}
getProduct()



const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});