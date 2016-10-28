function BMI() {
    // 取得身高值
    var h = $('#height').val();
    console.log(h);

    // 取得體重值
    var w = $('#weight').val();
    console.log(w);

    // 將公分單位換成公尺單位
    h = h / 100.0;

    // 計算 BMI
    var bmi = w / (h * h);
    console.log(bmi);

    // 顯示到畫面上
    $('#output').text(bmi);
}

$('#test').bind('click', BMI);