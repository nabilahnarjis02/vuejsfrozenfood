<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createproduks"
      >Add produks</router-link>

    <Cardproduks :produks="produks"/>





    <table class="table">
  <thead>
    <tr>
      <th scope="col">Kode Barang</th>
      <th scope="col">Nama Supplier</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Rasa</th>
      <th scope="col">Jumlah Barang</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(produk, index) in produks" :key="index">
      <td>{{ produk.kode_barang }}</td>
      <td>{{ produk.nama_supplier }}</td>
      <td>{{ produk.nama_barang }}</td>
      <td>{{ produk.rasa }}</td>
      <td>{{ produk.jumlah_barang }}</td>
      <td>
       <router-link class="btn btn-success" :to="{name:'Editproduks', params:{id:
            produk.id}}" 
            >Edit</router-link
             >
        <button @click.prevent="produkDelete(produk.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardproduks from "@/components/Cardproduks.vue";
import { ref, onMounted } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Cardproduks,
  },
  setup(){
    let produks = ref([])

    onMounted(() => {
      axios.get(`http://127.0.0.1:8000/api/produks`)
      .then(response => {
        produks.value = response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
    });

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produks/${id}`)
      .then(()=>{
        let z = this.produks.map((produks) => produks.id).indexOf(id);
        this.produks.splice(z, 1);
      }).catch((error) => {
        console.log(error);
      });
    }

      return {
      produks,
      produkDelete
    };
  },
};
</script>