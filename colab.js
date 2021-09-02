(function(){
  try{
        console.log('Working');
        document.querySelector('colab-connect-button').shadowRoot.getElementById('connect').click();
    } catch(e) {
        console.log(e);
    }
})()