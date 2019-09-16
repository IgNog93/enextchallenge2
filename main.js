window.onload = function() {

    $.ajax({
        url: 'https://dog.ceo/api/breeds/list/all',
        success: function(data) {
            console.log(data);
            const dogsArray = (Object.keys(data.message));
            $.each(dogsArray, function(){    
                for (var i = 0; i < dogsArray.length; i++)
                    if (dogsArray[i]){
                    $(".main-selector").append("<option class='breed-option' value="+dogsArray[i]+">"+dogsArray[i]+"</option>");
                }
            });
        }
    });

    $('.main-selector').change(function() {
        var selectedbreed = $(".main-selector option:selected").text();
        $(".ghost").css('display', 'none');
        $("#breedtoserver").val(selectedbreed);
        $.ajax({
            url: 'https://dog.ceo/api/breed/'+selectedbreed+'/images/random',
            success: function(image) {
                $(".dog-image").empty();
                $("#imagetoserver").val(image.message);
                $(".dog-image").append("<img src='"+image.message+"'>");
            }
        })
    });

    $('#dogname').keyup(function () {
        $('#dogname-output').text($(this).val());
        var namechose = $('#dogname-output').text();
        $("#nametoserver").val(namechose);
    });

    $('.color-selector').change(function() {
        $(".ghost").css('display', 'none');
        var selectedcolor = $(".color-selector option:selected").val();

        if (selectedcolor === 'black'){
            $("#dogname-output").css('color', 'black');
            $("#colortoserver").val(selectedcolor);
        }
        else if (selectedcolor === 'blue'){
            $("#dogname-output").css('color', 'blue');
            $("#colortoserver").val(selectedcolor);
        }
        else if (selectedcolor === 'red'){
            $("#dogname-output").css('color', 'red');
            $("#colortoserver").val(selectedcolor);
        }
        else if (selectedcolor === 'green'){
            $("#dogname-output").css('color', 'green');
            $("#colortoserver").val(selectedcolor);
        }
        else if (selectedcolor === 'yellow'){
            $("#dogname-output").css('color', 'yellow');
            $("#colortoserver").val(selectedcolor);
        }
        else if (selectedcolor === 'purple'){
            $("#dogname-output").css('color', 'purple');
            $("#fonttoserver").val(selectedcolor);
        }
    });

    $('.font-selector').change(function() {
        $(".ghost").text('');
        var selectedfont = $(".font-selector option:selected").val();

        if (selectedfont === 'initial'){
            $("#dogname-output").css('font-family', 'initial');
            $("#fonttoserver").val(selectedfont);
        }
        else if (selectedfont === 'tnr'){
            $("#dogname-output").css('font-family', 'Times New Roman');
            $("#fonttoserver").val(selectedfont);
        }
        else if (selectedfont === 'arial'){
            $("#dogname-output").css('font-family', 'Arial');
            $("#fonttoserver").val(selectedfont);
        }
        else if (selectedfont === 'cs'){
            $("#dogname-output").css('font-family', 'Chilanka');
            $("#fonttoserver").val(selectedfont);
        }
        else if (selectedfont === 'rbt'){
            $("#dogname-output").css('font-family', 'Roboto');
            $("#fonttoserver").val(selectedfont);
        }
        else if (selectedfont === 'ss'){
            $("#dogname-output").css('font-family', 'sans-serif');
            $("#fonttoserver").val(selectedfont);
        }
    });

    var date = new Date();

    $('#toserver button').click( function(e) {
        e.preventDefault(); 

        localStorage["name"] = $("#nametoserver").val();
        localStorage["breed"] = $("#breedtoserver").val();
        localStorage["fontcolor"] = $("#colortoserver").val();
        localStorage["font"] = $("#fonttoserver").val();
        localStorage["image"] = $("#imagetoserver").val();
        localStorage["date"] = date;
        alert('Seu doguinho foi adicionado ao local storage com sucesso!!!')
        console.log(localStorage);
    });
}