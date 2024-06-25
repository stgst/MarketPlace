<template>
    <br>
    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">購物車</h2>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">商品名稱</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">單項價格</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td class="py-2 px-4 border-b border-gray-200">{{ item.name }}</td>
              <td class="py-2 px-4 border-b border-gray-200">${{ item.price }}</td>
              <td class="py-2 px-4 border-b border-gray-200">
                <button @click="removeFromCart(item)" class="bg-red-500 text-white px-4 py-2 rounded">
                  <i class="fas fa-trash"></i> 移除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-6">
        <div class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-bold text-gray-800">總金額: ${{ totalAmount }}</h3>
          <button class="bg-green-500 text-white px-4 py-2 rounded mt-4">結帳</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array
    },
    computed: {
      totalAmount() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      removeFromCart(item) {
        this.$emit('remove-from-cart', item);
      }
    }
  };
  </script>