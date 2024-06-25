<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <div class="text-xl font-bold text-gray-800">MaketPlace 購物</div>
      </div>
    </header>
    <main class="container mx-auto px-6 py-8">
      <ProductList @add-to-cart="addToCart" />
      <Cart :cart="cart" @remove-from-cart="removeFromCart" />
    </main>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/ShoppingCart.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    Cart
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    }
  }
};
</script>