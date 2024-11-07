jQuery(document).ready(function ($) {
    "use strict";
    $(function () {
        $("#schools").validate({
            rules: {
                name: {
                    required: true,
                },
                email: {
                    email: true
                },
                phone: {
                    required: true
                },
                type: {
                    required: true
                },
                schoolName: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please type your name",
                },
                phone: {
                    required: "Please type your phone",
                },
                type: {
                    required: "Please select photo type",
                },
                schoolName: {
                    required: "Please type your school name",
                }
            },
        });
    });
});