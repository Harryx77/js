(function(){
  try{
        tombol = document.querySelector('colab-connect-button').shadowRoot.getElementById('connect');
        if (!tombol){
            console.log('Sudah Berjalan');
        }else{
            console.log('Menjalankan')
            tombol.click();
        }
    } catch(e) {
        console.log(e);
    }
})()