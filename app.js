const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
    quantity: 0,
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0,
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0,
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0,
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0,
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0,
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0,
  }]

  
function drawIceCream() {
  let iceCream_div = document.getElementById('icecream')
  let template = ''
  iceCream.forEach(flavor => {
    template += `
  <div class="card mx-1" style="width: 10rem;">
  <img src="${flavor.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${flavor.name}</p>
    <p class="card-text">${flavor.price}</p>
    <a href="#" onclick="addFlavorToCart('${flavor.name}')" class="btn btn-light">Buy</a>
  </div>
</div>
`
  }
  )
  // @ts-ignore
iceCream_div.innerHTML = template
}

function drawVessels() {
  let vessels_div = document.getElementById('vessels')
  let template = ''
 vessels.forEach(vessels => {
   template += `
   <div class="card mx-1" style="width: 10rem;">
  <img src="${vessels.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${vessels.name}</p>
    <p class="card-text">${vessels.price}</p>
    <a href="#" onclick="addVesselToCart('${vessels.name}')" class="btn btn-light">Buy</a>
    </div>
</div>
`
  }
  )
  // @ts-ignore
vessels_div.innerHTML = template
}

function drawToppings() {
let toppings_div = document.getElementById('toppings')
  let template = ''
 toppings.forEach(toppings => {
    template += `
  <div class="card mx-1" style="width: 10rem;">
  <img src="${toppings.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${toppings.name}</p>
    <p class="card-text">${toppings.price}</p>
    <a href="#" onclick="addToppingToCart('${toppings.name}')" class="btn btn-light">Buy</a>
  </div>
</div>
`
  }
  )
  // @ts-ignore
toppings_div.innerHTML = template
}

function addFlavorToCart(name) {
  let flavor = iceCream.find(flavor => flavor.name == name)
  console.log(flavor.name);
  // @ts-ignore
  flavor.quantity++
  drawCart()
}

function addVesselToCart(name) {
    let flavor = vessels.find(flavor => flavor.name == name)
  console.log(flavor.name);
  // @ts-ignore
  flavor.quantity++
  drawCart()
}

function addToppingToCart(name) {
    let flavor = toppings.find(flavor => flavor.name == name)
  console.log(flavor.name);
  // @ts-ignore
  flavor.quantity++
  drawCart()
}

function drawCart() {
  let cart = document.getElementById('cart')
  let template = ''
  iceCream.forEach((flavor) => {
    if (flavor.quantity > 0) {
      template +=` <div class="d-flex justify-content-between bg-info rounded px-2 border-bottom border-1 border-dark">
      <p class ="col-4 ">${flavor.name}</p>
      <p class ="col-4 text-center">x${flavor.quantity}</p>
      <p class ="col-4 text-end">$${flavor.price}</p>
    </div>`;
    }
    
  });
  
  vessels.forEach((vessels) => {
    if (vessels.quantity > 0) {
      template += ` <div class="d-flex justify-content-between bg-info rounded px-2 border-bottom border-1 border-dark">
      <p class ="col-4 ">${vessels.name}</p>
      <p class ="col-4 text-center">x${vessels.quantity}</p>
      <p class ="col-4 text-end">$${vessels.price}</p>
    </div>`;
    }
  });
  
  toppings.forEach((toppings) => {
    if (toppings.quantity > 0) {
      template += ` <div class="d-flex justify-content-between bg-info rounded px-2 border-bottom border-1 border-dark">
      <p class ="col-4 ">${toppings.name}</p>
      <p class ="col-4 text-center">x${toppings.quantity}</p>
      <p class ="col-4 text-end">$${toppings.price}</p>
    </div>`;
    }
  });
  cart.innerHTML = template
  // NOTE make sure to put drawtotal here, as we will be doing that every time we draw the cart.
  drawTotal()
}

function drawTotal() {
  let total = 0
  iceCream.forEach(flavor => {
    total += flavor.price * flavor.quantity
  })
   vessels.forEach(vessels => {
    total += vessels.price * vessels.quantity
   })
   toppings.forEach(toppings => {
    total += toppings.price * toppings.quantity
  })
  console.log('cart total', total);
  // @ts-ignore
  document.getElementById('total').innerText = (total * 1.06).toFixed(2)
}

function checkOut() {
  iceCream.forEach(iceCream => {
    iceCream.quantity=0
  })
  vessels.forEach(vessels => {
    vessels.quantity=0
  })
  toppings.forEach(toppings => {
    toppings.quantity=0
  })
  drawCart()
  
}

drawIceCream()
drawVessels()
drawToppings()