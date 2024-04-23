
jQuery(document).ready(function($) {


    var orderID;
    var orderKey;
        
    var v_price =  $("#codplugin_price").val(); 

    // get default product variation id  
    var product_id = $("input[name=product_id]").val();
    // get default shipping method 

    $("#codplugin_v_price").html(v_price);

    // add required attribute to state and city
    $(".codplugin-field select").prop('required',true);

    $("#shipping-methods").on('change', function() {
        var var_d_method = $('#shipping-methods input:checked').val(); 
        var state = $("#codplugin_state option:selected").text();
        var product_price = $("#codplugin_price").val();
        var product_id = $("input[name=product_id]").val();
        
        $("#codplugin_d_method").attr('value', var_d_method);

        if ($("form.variations_form")[0]){
            var product_var_id  = $("input[name=variation_id]").val();
        } else {
            var product_var_id  = $("input[type=radio][name=var_price]:checked").attr('id');
        }

        
        if (state !== '') {

            $("#codplugin_gif").css('display', 'block');

            setTimeout(() => {
                $("#codplugin_gif").css('display', 'none');
            }, 500);

            var data = {
                action: 'codplugin_woo_order_action',
                value: state,
                product_id: product_id,
                variation_id: product_var_id,
                d_method: var_d_method,

            };

            $.ajax({
                url: codplugin_order.ajax_url,
                type: "post",
                data: data,
                success: function(val) {
                    if (val == 0) {
                        $('#codplugin_d_has_price').hide();
                        $('#codplugin_d_free').show();
                    } else {
                        $('#codplugin_d_has_price').show();
                        $('#codplugin_d_free').hide(); 
                    }

                    var product_price = $("#codplugin_price").val();
                    $("#d_price").attr('value', val);
                    $("#codplugin_d_price").html(val);
                    var count_number = $("#codplugin_c_number").val();
                    var update_price = (count_number * product_price);

                    var total_price = (update_price * 1 + val * 1);
                    $("#codplugin_total_price").html(total_price);

                    $('.codplugin_currency').show();
                
                },

            });

        }
    });

    $('#codplugin_state').on('change', function() {
        var state = $("#codplugin_state option:selected").text();
        var_d_method = '';
        $("#codplugin_d_method").attr('value', var_d_method);
        
        if (state !== '') {
            $.ajax({
                url: codplugin_order.ajax_url,
                type: 'POST',
                data: {
                    action: 'get_shipping_methods',
                    state: state
                },
                success: function(response) {
                    $('#shipping-methods').html(response);
                    $('#shipping-methods input:first').attr('checked', true);
                    var_d_method = $('#shipping-methods input:first').val(); 
                    $("#codplugin_d_method").attr('value', var_d_method);
                }
            });
        } 
    });

        // Display shipping fees and total cost when country has no states
    if ($(".has-no-states")[0]){
        var everyprice = $("#everyprice").val();
        $("#d_price").attr('value', everyprice);
        
        $("#codplugin_d_price").html(everyprice);
        $('.codplugin_currency').show();

        if (everyprice == 0) {
            $('#codplugin_d_has_price').hide();
            $('#codplugin_d_free').show();
        } else {
            $('#codplugin_d_has_price').show();
            $('#codplugin_d_free').hide(); 
        }
        
        var count_number = $("#codplugin_c_number").val();
        var product_price = $("#codplugin_price").val();           
        var update_price = (count_number * product_price);
        var total_price = (update_price * 1 + everyprice * 1);
        
        $("#codplugin_total_price").html(total_price);
    }


    // Calculate total cost when Swatches Plugin is activated
    jQuery( '.variations_form' ).each( function() {
        jQuery(this).on( 'found_variation', function( event, variation ) {
            var var_id = variation.variation_id;
            var v_price = variation.display_price;//selectedprice
            
            product_var_id = var_id;

            var var_d_method = $('#shipping-methods input:checked').val(); 
            var product_id = $("input[name=product_id]").val();
            var state = $("#codplugin_state option:selected").text();

            // change delivery price according to selected state and product variation
            if($('#codplugin_state').find(':selected').prop('disabled')){} else {

                $("#codplugin_gif").css('display', 'block');

                setTimeout(() => {
                    $("#codplugin_gif").css('display', 'none');
                }, 500);

                var data = {
                        action: "codplugin_woo_order_action",
                        value: state,                        
                        product_id: product_id,
                        variation_id: product_var_id, // Add the variation ID to the post request
                        d_method: var_d_method,
                    };
                $.ajax({
                        url: codplugin_order.ajax_url,
                        type: "post",
                        data: data,
                        success: function(val) {
                            if (val == 0) {
                                $('#codplugin_d_has_price').hide();
                                $('#codplugin_d_free').show();
                            } else {
                                $('#codplugin_d_has_price').show();
                                $('#codplugin_d_free').hide(); 
                            }

                            var product_price = $("#codplugin_price").val();
                            $("#d_price").attr('value', val);
                            $("#codplugin_d_price").html(val);
                            var count_number = $("#codplugin_c_number").val();
                            var update_price = (count_number * product_price);

                            var total_price = (update_price * 1 + val * 1);
                            $("#codplugin_total_price").html(total_price);
                            
                        },

                    });

            }


            $("#var_id").val(var_id);

            if ( var_id === '') {
                $("a.custom-atc-btn.product_type_variable").attr("href", "");
                $("a.custom-atc-btn.product_type_variable").removeClass("add_to_cart_button popup-alert");
            } else {
                $("a.custom-atc-btn.product_type_variable").attr("href", "?add-to-cart=" + var_id);
                $("a.custom-atc-btn.product_type_variable").addClass("add_to_cart_button popup-alert");
            }

            $("#codplugin_price").attr('value', v_price);
            $("#codplugin_v_price").html(v_price);

            var count_number = $("#codplugin_c_number").val();
            var price = (v_price * count_number);
            var d_price = $("#d_price").val();
            var total_price = (price * 1 + d_price * 1);
            
            if($('#d_price').val()) {
                $("#codplugin_total_price").html(total_price);
            }

        });
    });


    // Calculate total cost when variations are displayed as radio inputs
    jQuery( '.variation-prices' ).each( function() {

        $("input[type=radio][name=var_price]").on('change', function(event, variation) {
           
            var_price = this.value;
            var_id = this.id;
            var product_var_id = var_id;
            
            var var_d_method = $('#shipping-methods input:checked').val(); 
            var product_id = $("input[name=product_id]").val();
            var state = $("#codplugin_state option:selected").text();

            // change delivery price according to selected state and product variation
            if($('#codplugin_state').find(':selected').prop('disabled')){} else {

                $("#codplugin_gif").css('display', 'block');

                setTimeout(() => {
                    $("#codplugin_gif").css('display', 'none');
                }, 500);

                var data = {
                        action: "codplugin_woo_order_action",
                        value: state,
                        product_id: product_id,
                        variation_id: product_var_id, // Add the variation ID to the post request
                        d_method: var_d_method,
                    };
                $.ajax({
                        url: codplugin_order.ajax_url,
                        type: "post",
                        data: data,
                        success: function(val) {
                            if (val == 0) {
                                $('#codplugin_d_has_price').hide();
                                $('#codplugin_d_free').show();
                            } else {
                                $('#codplugin_d_has_price').show();
                                $('#codplugin_d_free').hide(); 
                            }

                            var product_price = $("#codplugin_price").val();
                            $("#d_price").attr('value', val);
                            $("#codplugin_d_price").html(val);
                            var count_number = $("#codplugin_c_number").val();
                            var update_price = (count_number * product_price);

                            var total_price = (update_price * 1 + val * 1);
                            $("#codplugin_total_price").html(total_price);
                            
                        },

                    });

            }

            $("#var_id").val(this.id);
            $("#codplugin_v_price").html(var_price);
            $("#codplugin_price").attr('value', var_price);

            variationId = $('#var_id').val();
            if ( variationId === '') {
                $("a.custom-atc-btn.product_type_variable").attr("href", "");
                $("a.custom-atc-btn.product_type_variable").removeClass("add_to_cart_button popup-alert");
            } else {
                $("a.custom-atc-btn.product_type_variable").attr("href", "?add-to-cart=" +  variationId);
                $("a.custom-atc-btn.product_type_variable").addClass("add_to_cart_button popup-alert");
            }

            var v_price = var_price;
            var count_number = $("#codplugin_c_number").val();
            var price = (v_price * count_number);
            var d_price = $("#d_price").val();
            var total_price = (price * 1 + d_price * 1);
            
            if($('#d_price').val()) {
                $("#codplugin_total_price").html(total_price);
            }

        });
    });


    $("#codplugin_add_button").on("click", function() {
        var count_number = $("#codplugin_c_number").val();
        var one = 1;
        var update_number = (count_number * 1 + one * 1);
        
        $("#codplugin_c_number").attr('value', update_number);
        $("#codplugin_count_button").html(update_number);
        $("#codplugin_count_number").html(update_number);

        $("a.custom-atc-btn").attr("data-quantity", update_number);


        var price = $("#codplugin_price").val();
        var update_price = price * update_number;
        var d_price = $("#d_price").val();
        var total_price = (update_price * 1 + d_price * 1);

        if($('#d_price').val()) {
            $("#codplugin_total_price").html(total_price);
        }
    });

    $("#codplugin_remove_button").on("click", function() {
        var count_number = $("#codplugin_c_number").val();
        var one = 1;
        var update_number = (count_number * 1 - one * 1);
        if (update_number < 1) {
            update_number = 1;
        } else {
            update_number = update_number;
        }
        $("#codplugin_c_number").attr('value', update_number);
        $("#codplugin_count_button").html(update_number);
        $("#codplugin_count_number").html(update_number);

        $("a.custom-atc-btn").attr("data-quantity", update_number);

        var price = $("#codplugin_price").val();
        var update_price = price * update_number;
        var d_price = $("#d_price").val();
        var total_price = (update_price * 1 + d_price * 1);

        if($('#d_price').val()) {
            $("#codplugin_total_price").html(total_price);
        }

    });
   

    $("#codplugin_state").on("change", function() {

        var state = $("#codplugin_state option:selected").text();
        var product_price = $("#codplugin_price").val();
        var product_id = $("input[name=product_id]").val();
        var product_var_id  = $("input[type=radio][name=var_price]:checked").attr('id');

        if (state == "Select State") {} else {

            $("#codplugin_gif").css('display', 'block');

            setTimeout(() => {
                $("#codplugin_gif").css('display', 'none');
            }, 500);

            var data = {
                action: 'codplugin_woo_order_action',
                value: state,
                product_id: product_id,
                variation_id: product_var_id,
            };

            $.ajax({
                url: codplugin_order.ajax_url,
                type: "post",
                data: data,
                success: function(val) {
                    if (val == 0) {
                        $('#codplugin_d_has_price').hide();
                        $('#codplugin_d_free').show();
                    } else {
                        $('#codplugin_d_has_price').show();
                        $('#codplugin_d_free').hide(); 
                    }

                    var product_price = $("#codplugin_price").val();
                    $("#d_price").attr('value', val);
                    $("#codplugin_d_price").html(val);
                    var count_number = $("#codplugin_c_number").val();
                    var update_price = (count_number * product_price);

                    var total_price = (update_price * 1 + val * 1);
                    $("#codplugin_total_price").html(total_price);

                    $('.codplugin_currency').show();
                
                },

            });

        }
    });


    $("#codplugin_order_history").click(function() {
        $("#codplugin_show_hide").toggle();
    });

});