$(document).ready(function () {

    $('.sidenav').sidenav();

    var access_key = '832aa76523268eee54052c7a7ea1894f';

    $.ajax({
        url: 'https://free.currencyconverterapi.com/api/v6/currencies',

        dataType: 'jsonp',
        success: function(json) {

            // access the conversion result in json.result
            console.log(json);

            var selectOptions = ""
            Object.keys(json.results).forEach(function(key){
                selectOptions+= '<option value='+key+'>'+json.results[key].currencyName+'</option>'
            })
            // console.log(selectOptions)

            $("#firstcurrency").append(selectOptions)

            $("#secondcurrency").append(selectOptions)
        }
    });


    $("#convertion").submit(function (e) {
        e.preventDefault()

        var firstcurrency = document.getElementById("firstcurrency").value;

        var secondcurrency = document.getElementById("secondcurrency").value;

        var amount = document.getElementById("amount").value;

        // set endpoint and your access key
        var endpoint = 'convert';

        // define from currency, to currency, and amount
        var from = firstcurrency;
        var to = secondcurrency;


        $.ajax({
            url: 'https://free.currencyconverterapi.com/api/v6/convert?q='+firstcurrency+'_'+secondcurrency+'&compact=ultra',
            dataType: 'jsonp',
            success: function(json) {

                // access the conversion result in json.result
                console.log(json);

                var result = json[firstcurrency+'_'+secondcurrency]* amount
console.log(result)

                $("#result").html(result +' '+secondcurrency)
            }
        });
    })
})