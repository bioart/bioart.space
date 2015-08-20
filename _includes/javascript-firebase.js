/* global Firebase $ */

$(function () {
  'use strict'

  // prepare datastore
  var datastore = new Firebase('{{ site.firebase }}/protocols/{{ page.slug }}/data')

  // handle new-data form
  $('#dataForm').submit(function (event) {
    var datum = {
      name: $('#data-name').val(),
      data: $('#data-data').val()
    }

    if (datum.name.length === 0) {
      $('#data-name').parent().addClass('has-error')
      return false
    }

    if (datum.data.length === 0) {
      $('#data-data').parent().addClass('has-error')
      return false
    }

    datastore.push(datum)
    $('#data-name').val('')
    $('#data-data').val('')

    event.preventDefault()
  })

  // handle new data from server
  datastore.on('value', function (snapshot) {
    var dataset = snapshot.val()
    $('#data-firebase').text('')
    for (var id in dataset) {
      var datum = dataset[id]
      $('#data-firebase').append(
        '<li><strong>' + datum.name + ':</strong> <code>' + datum.data
      )
    }
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code)
  })
})
