$('#submit').bind('click', function() {
    console.log('按到了喔');
    var username = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    var nickname = $('#inputNickname').val();
    var country = $('#inputCountry').val();
    var init_date = $('#inputInit_date').val();
    $.ajax({
        url: "http://127.0.0.1:12345/json/",
        data: {
            username: username,
            password: password,
            nickname: nickname,
            country: country,
            init_date: init_date
        },
        success: function() {
            console.log('送出成功');
        },
    });
});