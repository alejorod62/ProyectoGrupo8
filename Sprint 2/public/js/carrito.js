console.log ('anda')

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer' );

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item') ;

    const itemPrecio = item.querySelector('.precio').textContent;
    const itemTitle = item.querySelector('.titulares').textContent;
    const itemCuotas = item.querySelector('.cuotas').textContent;
    const itemImage = item.querySelector('.imagenescurso').src;
    
    addItemToShoppingCart(itemTitle, itemPrecio, itemImage, itemCuotas);
}

function addItemToShoppingCart(itemTitle, itemPrecio, itemImage, itemCuotas) {
    const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="itemPrecio mb-0 shoppingCartItemPrecio">${itemPrecio}</p>
            </div>
        </div>
        <div class="col-3">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="itemCuotas mb-0 shoppingCartItemCuotas">${itemCuotas}</p>
        </div>
    </div>
    
        <div class="col-4">
            <br>
            <br>
            
            <button class="btn btn-danger buttonDelete" type="button">Borrar</button> </div>
    </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

    updateShoppingCartTotal();
}

/* agregar shoppingCartContent al localstorage y leer desde el otro js */

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.itemPrecio'
    );
    console.log(shoppingCartItemPriceElement)
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    
    total = total + shoppingCartItemPrice ;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
} 

    

