//popup
function openDialog() {
	$('#overlay').fadeIn('fast', function() {
		$('#popup').css('display','block');
        $('#popup').animate({'left':'10%'},500);
        $('#header').hide();
        $('#home').hide();
        $('#about').hide();
        $('#services').hide();
        $('#portafolio').hide();
        $('#experience').hide();
        $('#education').hide();
        $('#contact').hide();
        $('#footer-iconTop').hide();
    });
}

function closeDialog(id) {
	$('#'+id).css('position','absolute');
	$('#'+id).animate({'left':'-100%'}, 500, function() {
		$('#'+id).css('position','fixed');
		$('#'+id).css('left','100%');
		$('#overlay').fadeOut('fast');
    $('#content').hide();
    $('#content').css('display','none');
    $('#header').show();
    $('#home').show();
    $('#about').show();
    $('#services').show();
    $('#portafolio').show();
    $('#experience').show();
    $('#education').show();
    $('#contact').show();
    $('#footer-iconTop').show();
    $('#multiple-text').show();
    //$('#multiple-text').css('visibility','visible');
    //refresh page
    //refresh();
	});
    /*
    $(document).ready(function() {
        var pageRefresh = 2000; //5 s
        setInterval(function() {
        refresh();
        }, pageRefresh);
        });
    */
    document.location.href="./portafolio.html";
}
function refresh() {
    $('#header').load(location.href + " #header");
    $('#home').load(location.href + " #home");
    $('#about').load(location.href + " #about");
    $('#portafolio').load(location.href + " #portafolio");
    $('#experience').load(location.href + " #experience");
    $('#education').load(location.href + " #education");
    $('#contact').load(location.href + " #contact");
    $('#footer-iconTop').load(location.href + " #footer-iconTop");
    }