<template>
  <div class="card text-center mt-4" v-for="f in produk" :key="f.id">
  <div class="card-header">Detail produk</div>
  <div class="card-body">
    <h5 class="card-title">{{ f.kode_barang }}</h5>
    <p class="card-text">{{ f.nama_supplier }}</p>
    <p class="card-text">{{ f.nama_barang }}</p>
    <p class="card-text">{{ f.rasa }}</p>
    <p class="card-text">{{ f.jumlah_barang }}</p>

  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editproduks', params:{id:
            f.id}}" 
            >Edit</router-link
             >
        <button @click.prevent="produkDelete(f.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {

      let produk = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produks/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.kode_barang);

        produk.value = response.data.data;
      })
      .catch((error) =>{
        console.log(error.response.data)
      });
    });

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produks/${id}`)
      .then(()=>{
          router.go(-1)
      }).catch((error) => {
        console.log(error);
      });
    }
    return {
      produk,
      router, 
      produkDelete,
      route,
    };
  },
};
</script>

<style>

</style>