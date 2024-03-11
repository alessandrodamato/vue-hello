const { createApp } = Vue;

createApp({

  data(){
    return{
      messaggio: 'Ciao Vue JS!',
      immagine: 'assets/img/polli.jpg',
    }
  },

}).mount('#app');