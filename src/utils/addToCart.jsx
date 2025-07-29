export const handleAddToCart = (product, quantity) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
        existingProduct.quantity += quantity;
        } else {
        cart.push({ ...product, quantity: quantity });
        }
        // toast('Product added to cart!');
        localStorage.setItem('cart', JSON.stringify(cart));
        // window.dispatchEvent(new Event("cartUpdated"));

    }