console.log($( "[data-role='navbar']" ));
$( "[data-role='navbar']" ).navbar();
$( "[data-role='footer']" ).toolbar();

$( document ).on( "pagecontainerchange", function() {
    var current = $( ".ui-page-active" ).prop("id");   
    $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    $( "[data-role='navbar'] a" ).each(function() {
        var href = $( this ).prop("href");
        if ( href.indexOf(current, href.length - current.length) !== -1 ) {
            $( this ).addClass( "ui-btn-active" );
        }
    });
});
    
    