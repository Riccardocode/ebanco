$(document).ready(function(){
    $('.section-card-balance').find("h2").text('$'+card.balance)
    $('.section-card-visaNumber').find("small").find('span').eq(3).text(card.finalNumbers);
    $('.section-card-visaNumber').find("small").eq(1).text(card.expirationDate);
    const transactionTemplate = $('.section-card-transaction-template');
    transactionTemplate.remove();
    displayTransactions();

    function displayTransactions(){
        
        for(const trans of transationsArray){
            const newTransaction = transactionTemplate.clone();
            newTransaction.find('.section-card-transaction-template-description').find('h5').text(trans.company)
            newTransaction.find('.section-card-transaction-template-description').find('small').text(trans.type + ", " + trans.date)
            newTransaction.find('.section-card-transaction-template-amount').text("$"+trans.amount);
            // debugger;
            // newTransaction.find('.section-card-transaction-template').find('img').attr('src', trans.picture);
            newTransaction.find('img').attr('src', trans.picture);
            $('#section-card-transections').append(newTransaction);
        }
    }




});