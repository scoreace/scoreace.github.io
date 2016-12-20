$('#submit').bind('click', function() {
    console.log('按到了喔');
    var username = $('#inputEmail').val();
    console.log(email);
    var password = $('#inputPassword').val();
    var nickname = $('#inputNickname').val();
    $.ajax({
        url: "http://127.0.0.1:12345/json/",
        data: {
            username: username,
            password: password,
            nickname: nickname
        },
        success: function() {
            console.log('送出成功');
        },
    });
});