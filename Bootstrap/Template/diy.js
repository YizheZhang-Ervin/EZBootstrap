// alert
$('#btn').click(function() {
  $('#myAlert').alert('close')
})
$('#myAlert')
  .on('close.bs.alert', function() {
    alert('close')
  })
  .on('closed.bs.alert', function() {
    alert('closed')
  })
// button
$('#myBtn2').click(function() {
  $('#myBtn').button('toggle')
})
// dropdown
$('#myDropdown')
  .on('show.bs.dropdown', function() {
    alert('show')
  })
  .on('shown.bs.dropdown', function() {
    alert('shown')
  })
  .on('hide.bs.dropdown', function() {
    alert('hide')
  })
  .on('hidden.bs.dropdown', function() {
    alert('hidden')
  })(
  // form
  function() {
    'use strict'
    window.addEventListener(
      'load',
      function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener(
            'submit',
            function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            },
            false,
          )
        })
      },
      false,
    )
  },
)()
// toast
$('#btn1').click(function() {
  $('#myToast').toast('show')
})
//tooltip
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
//popover
$(function() {
  $('[data-toggle="popover"]').popover()
})
