(function($) {
    "use strict";
    // Daily meals Add More

    $(".education-info").on('click', '.trash', function() {
        $(this).closest('.education-cont').remove();
        return false;
    });

    $(".add-daily-meals").on('click', function() {

        var educationcontent = '<div class="row form-row education-cont">' +
            '<div class="col-12 col-md-10 col-lg-11">' +
            '<div class="row form-row">' +
            '<div class="col-12 col-md-6 col-lg-4">' +
            '<div class="form-group">' +
            '<label>Additional Meal <span class="text-danger">*</span></label>' +
            '<input type="text" class="form-control">' +
            '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4">' +
            '<div class="form-group">' +
            '<label>Additional Meal Time <span class="text-danger">*</span></label>' +
            '<input type="time" class="form-control">' +
            '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4">' +
            '<div class="form-group">' +
            '<label>Calories <span class="text-danger">*</span></label>' +
            '<input type="text" class="form-control">' +
            '</div>' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Additional Meal Ingredients <span class="text-danger">*</span></label>' +
            '<input type="text" data-role="tagsinput" class="input-tags form-control" placeholder="Enter Additional Meal Ingredients" name="" value="Protein" id="services">' +
            '<small class="form-text text-muted">Note : Type & Press enter to add new Ingredient</small>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';

        $(".education-info").append(educationcontent);
        return false;
    });
})(jQuery);