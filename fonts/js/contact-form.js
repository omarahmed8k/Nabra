jQuery(document).ready(function ($) {
    "use strict";
    // Contact form
    $(function () {
        $("#contact").validate({
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please type your name",
                },
                email: {
                    required: "Please type your e-mail correctly"
                },
                phone: {
                    required: "Please type your phone correctly",
                },
                subject: {
                    required: "Please type about subject",
                },
                message: {
                    required: "Please type your message",
                }
            },
        });
    });
});