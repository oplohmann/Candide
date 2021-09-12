function displayThrivePopup(countryCode) {
    var countryCodes = [
        'NO'
    ];
    
    if(countryCodes.indexOf(countryCode) == -1) {
        return;
    }

    if(!isSmallWidthDisplay()) {
        setTimeout(
            function () {               
                if(countryCode) {
                    var event_data = {"form_id":"tve-leads-track-lightbox-15","form_type":"lightbox"};
                    
                    if(jQuery('.tve-leads-track-lightbox-15').length <= 0) {
                        return;
                    }
                                                              
                    var hpjp_workshop_popup = jQuery('#hpjp_workshop_popup');
                    var hpjp_workshop_popup_location_period = jQuery('#hpjp_workshop_popup_location_period');
                    var hpjp_workshop_popup_join_button = jQuery('#hpjp_workshop_popup_join_button > a');
                    
                    var sql_workshop_popup_location_period = jQuery('#sql_workshop_popup_location_period');
                    var sql_workshop_popup_join_button = jQuery('#sql_workshop_popup_join_button > a');
                                    
                    var displayBanner = false;
                                
                    switch(countryCode) {
                        case 'NO':
                            displayBanner = true;
                            
                            //workshop_popup_location_period.html('<strong><span style="font-size: 20px;" >OSLO - 27-29 May 2020</span></strong>');
                            //workshop_popup_join_button.attr("href", "https://www.bouvet.no/kurs/kategorier/utvikling-for-web-og-mobil/high-performance-java-persistence");
                            
                            break;
                        }
                                        
                    if(displayBanner && event_data) {      
                        ThriveGlobal.$j( TL_Front ).trigger( 'showform.thriveleads', event_data );
                    }       
                }
            }, 15 * 1000
        );
    }
}

(function(){
    if(typeof _bsa !== 'undefined' && _bsa && !isSmallWidthDisplay()) {
        _bsa.init('fancybar', 'CK7DE53W', 'placement:vladmihalceacom');
    }
    
    var enableTrainingPopup = false;
    
    if(enableTrainingPopup) {
        jQuery(document).on(
            "geoLocationCountry", 
            function(event, countryCode) {
                displayThrivePopup(countryCode);
            }
        );
    }
    
    jQuery.ajax({
        url: "https://geolocation-db.com/jsonp/",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            var countryCode = location.country_code;
            jQuery(document).trigger("geoLocationCountry", countryCode);        
        },
        timeout: 3000
    });
    
	jQuery('div#comments textarea#comment').parent().append(
		'<p style="font-weight: bold;">Before posting the comment, please take the time to read the <a href="/faq" target="_blank" rel="noopener noreferrer">FAQ</a> page</p>'
	);
})();