const goToDetail = (id) => {
  window.location.href = `./detail.html?id=${id}`;
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const getLocalStore = () => {
  let valueLocalStore = JSON.parse(localStorage.getItem('shoseData'));
  return valueLocalStore;
};

const findProductById = (list, id) => {
  return list.find(item => item.id == id);
};

const showProductDetail = () => {
  let list = getLocalStore();
  let product = findProductById(list, productId);

  console.log(product);

  let sizes = JSON.parse(product.size);
  let sizeContent = sizes.map(size => `<p>${size}</p>`).join("");

  let quantity = 1;

  let content = `
    <div id="image-product-detail" class="p-5">
      <img src="${product.image}" alt="">
    </div>

    <div id="content-product-detail">
      <h1 class="text-capitalize">${product.name}</h1>
      <p>${product.description}</p>
      <span>Available Size</span>
      <div class="d-flex" id="size-product">
        ${sizeContent} <!-- Hiển thị size ở đây -->
      </div>
      <h2 id="price">${product.price * quantity}$</h2>
      <div class="d-flex" id="quantityBtn">
        <button id="decreaseBtn">-</button>
        <p id="quantityDisplay" class="">${quantity}</p>
        <button id="increaseBtn">+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  `;

  document.getElementById('product-detail').innerHTML = content;

  document.getElementById('increaseBtn').addEventListener('click', () => {
    quantity++;
    updateDisplay();
  });

  document.getElementById('decreaseBtn').addEventListener('click', () => {
    if (quantity > 1) { 
      quantity--;
      updateDisplay();
    }
  });

  const updateDisplay = () => {
    document.getElementById('quantityDisplay').innerText = quantity; 
    document.getElementById('price').innerText = (product.price * quantity) + '$'; 
  };
};

const showProduct = (list) => {
  let contentproduct = "";
  list.slice(0, 6).map((item, index) => {
      contentproduct += `
       <div class="grid-item d-flex flex-column" style="border:none;background-color:#F8F8F8">
          <a href="javascript:void(0)" onclick="goToDetail(${item.id})">
            <img src="${item.image}" alt="" style="height: 250px; width: 250px;">
          </a>
          <div class="name ml-3">
            <p class="text-capitalize">${item.name}</p>
            <p style="color:#CBC9C9">${item.shortDescription}</p>
          </div>
          <div class="d-flex align-item-center" style="width:100%">
            <button class="btnBuy text-dark" style="width:50%; height:50px; background-color:#F8B653" onclick="goToDetail(${item.id})">
              Buy
            </button>
            <p class="text-right pr-4" style="width:50%; margin:0; line-height:50px; font-weight: 500; background-color:#DEDDDC">${item.price}$</p>
          </div>
        </div>
      `;
  });

  document.getElementById('product-container').innerHTML = contentproduct;
}

showProductDetail();
showProduct(getLocalStore())


