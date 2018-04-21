<template>
  
</template>

<script>
  export default {
    name: "Fruits",
    data() {
      return {
        voce: {
          naziv: "jabuka",
          tezina: "",
          crvljivost: false
        },
        sokovnik: [{
          posudaZaVoce: {
            kapacitet: "",
            voceUPosudi: {}
          }
        }],
        brojAkcija: 0
      };
    },
    methods: {
      dodajVocku() {
        if (this.kapacitet == 0) {
          console.log("Nema kapaciteta!");
        } else if (this.voce.naziv == "jabuka" && this.voce.crvljivost == true) {
          console.log("Jabuka je crvljiva!");
        } else {
          this.voceUPosudi += this.voce;
          this.kapacitet -= this.voce.tezina;
          this.brojAkcija += 1;
        }
      },
      cediVocku() {
        this.brojAkcija += 1;
        let sok = 40 / 100 * this.voceUPosudi.tezina;
      }
    },
    computed: {
      crvljivost() {
        if (Math.random() < 0.2) {
          return (this.voce.crvljivost = true);
        } else {
          return (this.voce.crvljivost = false);
        }
      }
    },
    mounted() {
      this.sokovnik.kapacitet = 30;
      this.voce.crvljivost = true ? Math.random() < 0.2 : false;
      if (this.brojAkcija < 100) {
        this.cediVocku() ? Math.random() < 0.3 : this.dodajVocku();
      }
    }
  };
</script>

