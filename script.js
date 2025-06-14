document.addEventListener('DOMContentLoaded', () => {
    // 1. Image Gallery Functionality (Main Product Image)
    const mainProductImage = document.querySelector('.main-image img');
    const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove 'active' class from all thumbnails
            thumbnailImages.forEach(thumb => thumb.classList.remove('active'));

            // Add 'active' class to the clicked thumbnail
            thumbnail.classList.add('active');

            // Change the main product image source to the clicked thumbnail's source
            mainProductImage.src = thumbnail.src;
        });
    });

    // Set the first thumbnail as active by default (if any exist)
    if (thumbnailImages.length > 0) {
        thumbnailImages[0].classList.add('active');
        mainProductImage.src = thumbnailImages[0].src; // Ensure main image matches first thumbnail
    }


    // 2. Size Selection Functionality
    const sizeBoxes = document.querySelectorAll('.size-box');

    sizeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove 'active' class from all size boxes
            sizeBoxes.forEach(s => s.classList.remove('active'));

            // Add 'active' class to the clicked size box
            box.classList.add('active');
        });
    });

    // Set 'M' as active by default (as per design)
    const defaultSize = document.querySelector('.size-box.active');
    if (!defaultSize && sizeBoxes.length > 0) {
        // If no default active size is set in HTML, set the first one or a specific one
        // For this design, 'M' is active, so we can find it
        const mSizeBox = Array.from(sizeBoxes).find(box => box.textContent.trim() === 'M');
        if (mSizeBox) {
            mSizeBox.classList.add('active');
        } else {
            sizeBoxes[0].classList.add('active'); // Fallback to first if 'M' not found
        }
    }


    // 3. Color Selection Functionality
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove 'active' class from all color boxes
            colorBoxes.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked color box
            box.classList.add('active');
        });
    });


    // 4. Quantity Selector Functionality
    const quantitySelector = document.querySelector('.quantity-selector');
    const quantityDisplay = quantitySelector ? quantitySelector.querySelector('span') : null;
    const decreaseBtn = quantitySelector ? quantitySelector.querySelector('button:first-child') : null;
    const increaseBtn = quantitySelector ? quantitySelector.querySelector('button:last-child') : null;

    if (quantityDisplay && decreaseBtn && increaseBtn) {
        let currentQuantity = parseInt(quantityDisplay.textContent);

        decreaseBtn.addEventListener('click', () => {
            if (currentQuantity > 1) { // Prevent quantity from going below 1
                currentQuantity--;
                quantityDisplay.textContent = currentQuantity;
            }
        });

        increaseBtn.addEventListener('click', () => {
            currentQuantity++;
            quantityDisplay.textContent = currentQuantity;
        });
    }

    // 5. Basic functionality for "Add To Cart" buttons on related products
    const addToCartButtons = document.querySelectorAll('.product-actions .add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior if button is inside <a>
            alert('Товар додано до кошика! (Це демонстрація JavaScript)');
            // Here you would typically add logic to add the item to a shopping cart
            // e.g., send data to a backend, update a cart icon, etc.
        });
    });

    // You can add more JavaScript functionality here as needed,
    // for example, form validation for the subscription,
    // or more complex navigation menus if they were dynamic.
});