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

          for (var pagante of data) {

            // var pagante = {
            //   'name': pagante.name,
            //   'lastnome': pagante.lastname,
            //   'address': pagante.address,
            //   'id': pagante.id
            // };
            // var html = template(context);
            var html = template(pagante);

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
    $("main").on('click', '.scheda-pagante' , function(){

      var id = $('.id', this).html();
      //console.log(id);

      $(this).fadeOut();

      $.ajax({
        url: 'deletePagante.php',
        method: 'POST',
        data:{
          id: id
        },
        success: function(data){
        },
        error: function(richiesta,stato,error){

        },
      });

    });






});
