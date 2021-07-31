<template>
<div class="row">
  <div class="col-lg-4 mt-3" v-for="(produk, index) in produks" :key="index">
      <div class="card">
  <div class="card-header">{{produk.kode_barang}}</div>
  <div class="card-body">
    <h5 class="card-title">{{produk.nama_supplier}}</h5>
    <p class="card-text">{{produk.nama_barang}}</p>
    <p class="card-text">{{produk.rasa}}</p>
    <p class="card-text">{{produk.jumlah_barang}}</p>
  </div>
  <div class="card-footer text-muted"> <router-link 
  class="btn btn-primary" 
  :to="{name:'Detailproduks', params:{id:
            produk.id}}" 
            >Detail</router-link
             >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["produks"],
};
</script>

<style>

</style>