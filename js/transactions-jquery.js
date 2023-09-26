$(document).ready(function(){



    // change active class for the expenses income
    $('.transactionExpensesIncome-menu').find('span').click(function(){
        $('.transactionExpensesIncome-menu').find('span').removeClass('spanMenu-active');
        $(this).addClass('spanMenu-active');
        const type = $(this).text();
    });

    // change the active class for the buttons
    $('.transactionExpensesIncome-buttons').find('button').click(function(){
        $('.transactionExpensesIncome-buttons').find('button').removeClass('buttonActive');
        $(this).addClass('buttonActive');
        const type = $(this).text();
    });
    
    //display the expenses items
    function displayExpenses(){
        for(const expense of categoriesArray){
            const newExpense = expenseTemplate.clone();
            newExpense.find('img').attr('src', expense.icon);
            newExpense.find('p').text(expense.name);
            newExpense.find('h4').text('$'+expense.total);
            $('.transactionExpensesIncome-cards').append(newExpense);
            if(expense.name === 'Food'){
                newExpense.addClass('colorFood');
            }else if(expense.name === 'Shopping'){
                newExpense.addClass('colorShopping');
            }else if(expense.name === 'Other'){
                newExpense.addClass('colorOther');
            }
        }
    }

   

    $('.transactionBalance-circleContainer').find('h2').text('$'+currentBalance);
    
    
    // variable declaration
    const expenseTemplate = $('.transactionExpensesIncome-cards-template');
    expenseTemplate.remove();

    // execution
    displayExpenses();


   

});