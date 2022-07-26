$(document).ready(function(){
    function getQuote(){
      var quotes = ['Qualquer coisa entre aspas inspira um otário.', 'Olá mundo', 'gugudada', 'Que olhos grandes você tem vovó...', 'Morrer, dormir, talvez sonhar...', 'Amigos não mentem', 'Se tem uma coisa que acaba com o meu dia, é a noite'];
      var author = ['Autor desconhecido', 'Computador', 'bb', 'Chapeuzinho Vermelho', 'Shakespeare', '11', 'Tiririca'];
      
      var randomNum = Math.floor((Math.random()*quotes.length));
      
      var randomQuote = quotes[randomNum];
      var randomAuthor = author[randomNum];
      
      $('.quote').text(randomQuote);
      $('#author').text(randomAuthor);
    }
    getQuote();
    $('#new-quote').on("click", function(){
      getQuote();
    })
  })
  
  