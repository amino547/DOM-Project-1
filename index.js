document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const rows = document.querySelectorAll('.row, .lastrow');
    const totalElement = document.getElementById('totalp');
  
    // Initialize total
    var total = 0;
  
    // Function to update total
    function updateTotal() {
      totalElement.textContent = `Shopping Bag total: $${total.toFixed(2)}`;
    }
  
    // Function to update quantity and price
    function updateQuantityAndPrice(button, operation) {
      const row = button.closest('.row, .lastrow');
      const quantityElement = row.querySelector('.qte');
      const priceElement = row.querySelector('.price');
      const price = parseFloat(priceElement.textContent);
      //quantity
      var quantity = parseInt(quantityElement.textContent);
      if (operation === 'add') {
        quantity += 1;
      } else if (operation === 'subtract') {
        if (quantity > 0) {
          quantity -= 1;
        }
        else closest.disabled = true;
      }
  
      quantityElement.textContent = quantity;
      total += operation === 'add' ? price : -price;
      updateTotal();
    }
  
    // Add event listeners for add and subtract buttons
    rows.forEach(row => {
      const addButton = row.querySelector('.add');
      const subtractButton = row.querySelector('.minus');
      
      addButton.addEventListener('click', () => updateQuantityAndPrice(addButton, 'add'));
      subtractButton.addEventListener('click', () => updateQuantityAndPrice(subtractButton, 'subtract'));
    });
  });
  