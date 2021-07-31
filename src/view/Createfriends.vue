<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Produk</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Kode Barang</label>
    <input type="string" class="form-control" id="inputEmail4" 
    v-model="produk.kode_barang" />
      <div class="alert alert-danger" v-if="validation.kode_barang">
        {{ validation.kode_barang[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nama Supplier</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="produk.nama_supplier"/>
    <div class="alert alert-danger" v-if="validation.nama_supplier">
        {{ validation.nama_supplier[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Nama Barang</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="produk.nama_barang" />
    <div class="alert alert-danger" v-if="validation.nama_barang">
        {{ validation.nama_barang[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Rasa</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="produk.rasa" />
    <div class="alert alert-danger" v-if="validation.rasa">
        {{ validation.rasa[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Jumlah Barang</label>
    <input type="string" class="form-control" id="inputAddress" 
    v-model="produk.jumlah_barang" />
    <div class="alert alert-danger" v-if="validation.jumlah_barang">
        {{ validation.jumlah_barang[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { reactive,ref,onMounted } from "vue";
import { useRouter } from "vue-router"
import axios from "axios"
export default {
  setup() {

    const produk = reactive({
     kode_barang: "",
      nama_supplier: "",
      nama_barang: "",
      rasa: "",
      jumlah_barang: "",
    });
    const validation = ref([]);

    const router = useRouter();



    function store(){
     let kode_barang = produk.kode_barang;
      let nama_supplier = produk.nama_supplier;
      let nama_barang = produk.nama_barang;
      let rasa = produk.rasa;
      let jumlah_barang = produk.jumlah_barang;

      axios
      .post("http://127.0.0.1:8000/api/produks/", {
        kode_barang: kode_barang,
        nama_supplier: nama_supplier,
        nama_barang: nama_barang,
        rasa: rasa,
        jumlah_barang: jumlah_barang,
      })
      .then(() => {
        router.push({
          name:"Home"
        });
      })
      .catch(error => {
        validation.value = error.response.data
      });
    }
    return {
      produk,
      validation,
      router, 
      store,
    };
  },
};
</script>