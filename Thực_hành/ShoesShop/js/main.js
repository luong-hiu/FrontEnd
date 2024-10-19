const goToDetail = (id) => {
  window.location.href = `./detail.html?id=${id}`;
}

const setLocalStore = (list) => {
  localStorage.setItem('shoseData', JSON.stringify(list))
}

const callAPI = () => {
  axios({
      method: 'get',
      url: 'https://shop.cyberlearn.vn/api/Product',
    }).then(function(response){
      let list = response.data.content
      console.log(list)
      showSlide(list)
      showProduct(list)
      setLocalStore(list)
    })
}

const showSlide = (list) => {
  let content = "";
  list.slice(0, 3).map((item, index) => {
      content += `
        <div class="slide-content d-flex justify-content-around align-items-center">
          <div class="slide-image">
            <a href="javascript:void(0)" onclick="goToDetail(${item.id})">
              <img src="${item.image}" alt="">
            </a>
          </div>
          <div class="slide-button">
            <h1 class="text-capitalize">${item.name}</h1>
            <p>${item.description}</p>
            <button class="btn text-white" style="background-color:#F8B653" onclick="goToDetail(${item.id})">Buy Now</button>
          </div>
        </div>
      `;
  });

  document.getElementById('slide-container').innerHTML = content;

  $('.slide-container').slick({
    dots: true,
  });
}


const showProduct = (list) => {
  let contentproduct = "";
  list.slice(0, 18).map((item, index) => {
      contentproduct += `
       <div class="grid-item d-flex flex-column " style="border:none;background-color:#F8F8F8">
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


callAPI()