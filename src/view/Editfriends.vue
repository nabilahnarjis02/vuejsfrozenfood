<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Produks</h5>
     <form class="row g-3" @submit.prevent="update">
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
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { onMounted, reactive,  ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from 'axios'
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

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produks/${route.params.id}/edit`)
      .then(response => {
        console.log(response.data.data.kode_barang)

        produk.kode_barang = response.data.data.kode_barang;
        produk.nama_supplier = response.data.data.nama_supplier;
        produk.nama_barang = response.data.data.nama_barang;
        produk.rasa = response.data.data.rasa;
        produk.jumlah_barang = response.data.data.jumlah_barang;
        
      }).catch(error =>{
        console.log(error.response.data)
      });
      axios
      .catch(error => {
        console.log(error);
      });
    });

    function update(){
      let kode_barang = produk.kode_barang;
      let nama_supplier = produk.nama_supplier;
      let nama_barang = produk.nama_barang;
      let rasa = produk.rasa;
      let jumlah_barang = produk.jumlah_barang;

      axios.put(`http://127.0.0.1:8000/api/produks/${route.params.id}`, {
        kode_barang: kode_barang,
        nama_supplier: nama_supplier,
        nama_barang: nama_barang,
        rasa: rasa,
        jumlah_barang: jumlah_barang,
      })
      .then(() => {
        router.push({
          name:"Home",
        });
      })
      .catch(error => {
        validation.value = error.response.data;
        console.log(error)
      });
    }
    return {
      produk,
      validation,
      router, 
      update,
      route,
    };
  },
};
</script>