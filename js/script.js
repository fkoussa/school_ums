let webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Fruit Shop",
    page: "products",
    products: products,
    showProducts: true,
    cart: [],
    checkout: [],
    order: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      state: [],
    },
  },
  methods: {
    // Add product to cart
    addToCart(product) {
      // this.$emit("addItemToCart", product);
      // console.log(product.id);
      if (!this.cart.includes(product)) {
        this.cart.push(product);
        console.log("cart doesnt contain product");
      } else {
        console.log("cart contains product");
        product.cartquantity += 1;
        product.quantity--;
      }
    },
    showCart() {
      // Toggle
      this.showProducts = this.showProducts ? false : true;
    },

    // Decrease the quantity of the product by one (1)
    decreaseCartQuantity(product) {
      product.cartquantity -= 1;
    },

    // Remove product from cart in the cart page
    removeFromCart(product) {
      this.cart.splice(product, 1);
      product.cartquantity = 0;
    },

    // Show or Hide Quantity Decreaser button in the cart page
    checkProductQuantity(product) {
      if (product.cartquantity > 0) {
        return true;
      } else {
        this.cart.splice(product, 1);
      }
    },

    // Change page
    navigator(page) {
      this.page = page;
    },

    cartQuantity(product) {
      return product.cartquantity;
    },

    initiatecheckout() {
      if (
        this.order.firstName &&
        this.order.lastName &&
        this.order.address &&
        this.order.city &&
        this.order.email &&
        this.order.phone &&
        this.order.state
      ) {
        this.checkout.push(this.order);
        this.order = {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          email: "",
          phone: "",
          state: "",
        };
        this.navigator("products");
      } else {
        alert("Validate info please");
        this.page = "checkout";
      }
    },
  },
  computed: {
    cartItemCount: function () {
      return this.cart.length || "";
    },
    canAdd() {
      return this.products.quantity != 0;
    },
  },
});
