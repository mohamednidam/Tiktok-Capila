<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#3e858e">

    <title>Pack capila – capila</title>

    <link rel="stylesheet" id="hanout-base-css" href="css/base.min.css" type="text/css" media="all">
    <link rel="stylesheet" id="hanout-common-css" href="css/global.css" type="text/css" media="all">
    <link rel="stylesheet" id="font-awesome-5-css" href="css/font-awesome.min.css" type="text/css" media="all">
    <link rel="stylesheet" id="hanout-style-css" href="css/style.css" type="text/css" media="all">

    <link rel="stylesheet" id="codplugin_woo_style-css" href="css/codplugin.css" type="text/css" media="all">
    <link rel="stylesheet" id="elementor-frontend-css" href="css/frontend-lite.min.css" type="text/css" media="all">
    <link rel="stylesheet" id="elementor-post-12-css" href="css/post-12.css" type="text/css" media="all">
    <link rel="stylesheet" id="elementor-post-90-css" href="css/post-90.css" type="text/css" media="all">
    <link rel="stylesheet" id="elementor-post-90-css" href="css/codplugin.css" type="text/css" media="all">
	<link rel="icon" href="images/cropped-01-1-32x32.png" sizes="32x32">
	<link rel="icon" href="images/cropped-01-1-192x192.png" sizes="192x192">
	<link rel="apple-touch-icon" href="images/cropped-01-1-180x180.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@500;700&amp;display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="css/custom.css">
    <style>
        /* Add CSS for loading spinner */
         #loading {
            display: none;
            position: fixed;
            z-index: 999;
            height: 100%;
            width: 100%;
            top: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.8) url(https://sonamut.ma/capila/images/loader.gif) no-repeat center center;
            background-size: 40px;
        }
    </style>
</head>

<body
    class="page-template page-template-elementor_header_footer page page-id-90 wp-custom-logo theme-hanout woocommerce-js elementor-default elementor-template-full-width elementor-kit-12 elementor-page elementor-page-90">

    <div id="page">

        <?php  include('header.php') ?>


        <div id="accueil" data-elementor-type="wp-page" data-elementor-id="90" class="elementor elementor-90">
            <section
                class="elementor-section elementor-top-section elementor-element elementor-element-a3514bc elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="a3514bc" data-element_type="section" data-settings="{" background_background":"classic"}"="">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64f288d"
                        data-id="64f288d" data-element_type="column" data-settings="{"
                        background_background":"classic"}"="">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-710701b elementor-widget elementor-widget-image"
                                data-id="710701b" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <style>
                                        .elementor-widget-image {
                                            text-align: center
                                        }

                                        .elementor-widget-image a {
                                            display: inline-block
                                        }

                                        .elementor-widget-image a img[src$=".svg"] {
                                            width: 48px
                                        }

                                        .elementor-widget-image img {
                                            vertical-align: middle;
                                            display: inline-block
                                        }
                                    </style> <img decoding="async" src="images/img2.webp" title="" alt=""
                                        loading="lazy">
                                </div>
                            </div>
                            <div id="commander" class="elementor-element elementor-element-535370f elementor-widget elementor-widget-cod_checkout_form"
                                data-id="535370f" data-element_type="widget"
                                data-widget_type="cod_checkout_form.default">
                                <div class="elementor-widget-container">

                                    <div id="codplugin-checkout">
                                        <div class="codplugin-checkout-title">
                                            <h3>لطلب أدخل معلوماتك هنا - Pour commander, entrez vos informations ici
                                            </h3>
                                        </div>
                                        <form class="checkout woocommerce-checkout" method="POST"
                                            action="" name="contact-form" onsubmit="submitForm(event)">

                                            <div class="mb-1">
                                                <input type="text" id="full_name" name="full_name" placeholder="الإسم" required=""
                                                    autocomplete="off">
                                                <span id="error_full_name" class="error-message"></span>
                                            </div>
                                            <div class="mb-1">
                                                <input type="tel" id="phone_number" name="phone_number" placeholder="رقم الهاتف"
                                                    required="" autocomplete="off">
                                                <span id="error_phone_number" class="error-message"></span>
                                            </div>
                                            <div class="mb-1">
                                                <input class="has-no-states" type="text" id="city" name="city"
                                                    placeholder="المدينة" required="" autocomplete="off">
                                                <span id="error_city" class="error-message"></span>
                                            </div>
                                            <input type="hidden" value="<?php echo date('Y-m-d'); ?>" name="date_commande" />
                                            <div class="form-footer clear ">
                                                <input id="nrwooconfirm" type="submit" name="submit"
                                                    value="commandé">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-e3443ae elementor-align-center elementor-widget__width-inherit elementor-fixed animated-fast elementor-invisible elementor-widget elementor-widget-button"
                                data-id="e3443ae" data-element_type="widget" data-settings="{
                                    _position:fixed, _animation :pulse, _animation_delay:1100}" data-widget_type="button.default">
                                <div class="elementor-widget-container">
                                    <div class="elementor-button-wrapper">
                                        <a class="elementor-button elementor-button-link elementor-size-lg"
                                            href="#commander">
                                            <span class="elementor-button-content-wrapper">
                                                <span class="elementor-button-text">للطلب إضغط هنا</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <?php  include('footer.php') ?>

        <!-- Loading spinner -->
        <div id="loading"> 
        sqdhsqduhsqu
        </div>

    </div>

    <script>
        function submitForm(event) {
            event.preventDefault();

            // Show loading spinner
            document.getElementById('loading').style.display = 'block';

            const scriptURL = 'https://script.google.com/macros/s/AKfycbw2p-eOi368d8_kDZCtPqLsT9ONTysKPwFn0I0T1rYmKArABf5VkFxbczimyYYRGCfKNw/exec';
            const form = document.forms['contact-form'];

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => window.location.href = "https://sonamut.ma/capila/thanks.php")
                .catch(error => console.error('Error!', error.message))
                .finally(() => {
                    // Hide loading spinner
                    document.getElementById('loading').style.display = 'none';
                });
        }
    </script>

</body>

</html>
