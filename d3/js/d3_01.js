var output = d3.select('#op');
function randomColor(){
        var color1,i,j,k;
        i= Math.floor(Math.random()*256).toString(16);
        j= Math.floor(Math.random()*256).toString(16);
        k= Math.floor(Math.random()*256).toString(16);
        color1="#"+i+j+k;
        return color1;
}

$('button').bind('click',function(){
        var cir = output.append('circle');
        
        cir.attr('value',0).attr('cx', Math.floor(Math.random()*1000)+100).attr('cy',Math.floor(Math.random()*400)+100).attr('r',(Math.random()*100)).attr('stroke', 'black').attr('fill', randomColor()).attr('storke-width', '2');
    
     var $cir = $('circle');
    $cir.bind('click',function(){
    var val = $(this).attr('value');
    val = (val * 1 + 1) % 4;
    $(this).attr('fill', randomColor()).attr('value', val);

})
})

   