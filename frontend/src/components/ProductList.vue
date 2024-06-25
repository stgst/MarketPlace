<template>
    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">商品列表</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="../assets/package.png" alt="商品圖片" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
            <p class="text-gray-600 mt-2">{{ product.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-gray-800 font-bold">${{ product.price }}</span>
              <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: []
      };
    },
    methods: {
      fetchProducts() {
        axios.get('http://localhost:3000/api/products')
          .then(response => {
            this.products = response.data.products;
          })
          .catch(error => {
            console.error(error);
          });
      },
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>