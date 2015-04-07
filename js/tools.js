(function($) {

    $(document).ready(function() {

        $('.enter-link').click(function() {
            $('.enter-drop').toggle();
            $(this).toggleClass('act');
        });

        $('.enter-link a').click(function(e) {
            e.preventDefault();
        });

        $('.enter-drop em').click(function() {
            $('.enter-drop').toggle();
            $('.enter-link').removeClass('act');
        });

        $(document).on('focus', 'input', function() {
            var val = $(this).val();
            if (!val) {
                $(this).next().hide();
            }
        });

        $(document).on('blur', 'input', function() {
            var val = $(this).val();
            if (val == '') {
                $(this).next().show();
            }
        });

        $(document).on('click', '.labeled label', function() {
            $(this).prev().click().focus();
        });

        $('input').each(function() {
            if (!$(this).val()) {
                $(this).next().show();
            }
        });

        $('video').each(function (i, el) {
            var player = new bVideoPlayer(el);
        });
    });

})(jQuery);