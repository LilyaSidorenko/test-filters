$('.filters-view__link').on('click', function () {
    var generalResultTemplate = '<div class="filters-view__result js-result"> <h4 class="filters-view__title js-filters-title">Applied:</h4> <button class="filters-view__btn js-remove-all">Clear all</button> </div>'
    if(!$('.filters-view__link').hasClass('active')) {
        $('.filters-view').prepend(generalResultTemplate)
    }
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        var attrValue = $(this).attr('data-href');

        var findItem = $('.js-catalog').find("[data-attr='" + attrValue + "']");

        $('.js-product').addClass('hidden');
        findItem.addClass('active');

        var resultTemplate = '<div class="filters-view__selected-item">' + this.outerHTML + '<a class="filters-view__remove js-button-remove"></a></div>';


        $('.js-filters-title').after(resultTemplate);


    }
    $('.js-button-remove').on('click', function() {
        if($('.filters-view__selected-item').length !== 0) {
            var attrDelValue = $(this).prev().attr('data-href');

            var findDelItem = $('.js-catalog').find("[data-attr='" + attrDelValue + "']");
            console.log(attrValue)
            findDelItem.removeClass('active');
            findDelItem.addClass('hidden');
            $(this).parent().remove();
        } else {
            $('.js-result').remove();
            $('.js-product').removeClass('hidden active');

        }


    });

});


