



// variables
$('.exchangeInput-amountButtons').find('button').click(function(){
    // progress bar with progress tag
    // $('#exchangeInput').find('progress').attr('value',this.value);
    
    // progress bar with circles
    let progressBarWidth = (this.value/250)*100;
    $('#progressBar').css('width',+progressBarWidth+'%');
    $('.exchangeInput-amount').text('$'+this.value);

    $('.exchangeOutput-amount').text('$'+(this.value*0.94652824).toFixed(2));

});