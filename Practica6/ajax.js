$('#buttom').click(function getDatos() {
  let inputValue = $('#inputValue').val();
  console.log(inputValue);
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`,
    type: 'GET',
    async: true,

    success: function (resultado) {
      let element = $('#resultado');
      $.each(resultado, function (index, value) {
        element.append(
          `<div class="post ${value.id}">
                <div class="pid"><b>Id:</b> ${value.id} </div>
                <div class="name"><b>Nombre:</b> ${value.name} </div>
                <div class="email"><b>Email:</b>  ${value.email} </div>
                <div class="postid"><b>Post Id:</b> ${value.postId} </div>
                <div class="mensaje"><b>Mensaje:</b> ${value.body} </div>
            </div>`
        );
      });
    },

    error: function () {
      console.log('ERROR');
    },
  });
});
