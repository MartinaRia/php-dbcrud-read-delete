$( document ).ready(function() {
    console.log( "test db" );

    // get pagamenti -----------------------
    $.ajax({
      url: 'getPaganti.php',
      method: 'GET',
      success: function(data){

          /*** ----- Handlebars ---- ***/
          // 1 Organizzare il template
          var source = $("#template-scheda-pagante-handlebars").html(); //salvare il selettore del template in una var
          var template = Handlebars.compile(source); // "il template da compilare è questo"

          // 2 organizzare i contenuti che popolano il template
          for (var pagante of data) {
            var context = {
              'nome': pagante.name,
              'cognome': pagante.lastname,
              'indirizzo': pagante.address
            };
            var html = template(context); //abbinare template a contenuto

            // appendi il div con la risposta random nel tread
            $('main').append(html);
          }
          /*** ----- fine Handlebars ---- ***/

      },
      error: function(richiesta,stato,error){
        $('body').append('errore di connessione al server')
      },
    });

    // delete pagamenti --------------------
  /*  $(".lista-pagamenti").on('click', '.pag' , function(){

      var id = $(this).data('id');
      console.log($(this).data('id'));

      $.ajax({
        url: 'deletePagamentiById.php',
        method: 'POST',
        data:{
          id: id
        },
        success: function(data){
        },
        error: function(richiesta,stato,error){

        },
      });

    });*/






});
