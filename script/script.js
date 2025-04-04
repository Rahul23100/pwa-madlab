$(document).on("pagecreate", function () {
        let cart = [];
    
        function updateCartView() {
            const $cartItems = $("#cart-items");
            $cartItems.empty();
    
            if (cart.length === 0) {
                $cartItems.append("<li>Your cart is empty.</li>");
            } else {
                cart.forEach((item) => {
                    $cartItems.append(`<li>${item.name} - $${item.price}</li>`);
                });
            }
    
            $cartItems.listview("refresh");
        }
    
        $(".add-to-cart").on("click", function () {
            const name = $(this).data("name");
            const price = $(this).data("price");
            cart.push({ name, price });
            alert(`${name} added to cart!`);
        });
    
        $(document).on("pageshow", "#cart", updateCartView);
    });
    