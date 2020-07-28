var map;
function initMap() {

	//INICIALIZAR MAPA
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 30.397, lng: -10.300},
	  zoom: 2,
	  mapTypeControl: false
	});

	/*Estilo*/
	var mapStyle = [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":"0.30"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffe146"},{"visibility":"on"},{"weight":"6"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#e6007e"},{"weight":"1"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"},{"color":"#aa0000"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"off"},{"color":"#ffe146"},{"weight":8},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":8},{"lightness":"5"},{"gamma":"1"},{"saturation":"-75"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"},{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

	map.setOptions({styles: mapStyle});


	//LINES
	var line = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(52.709066, -2.755281), 
        new google.maps.LatLng(55.953926, -3.188906)
    ],
    strokeColor: "#FF0000",
    strokeWeight: 3,
    strokeOpacity: 0.7,
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
      },
      repeat: '10%',
      offset: '5%'
    }],
    map: map
	});

	//LOCAIS

	var prev_infowindow = false; 

	/* Local 1 */
	var local1 = '<div class="infowindow-content"><h3>Local 1</h3><div class="cover">'+
	'<img class="image-wrapper" src="img/rhino.png"></img><a href="locais/local-1.html" class="button">Ler Capítulo</a></div>'+
	'<div class="title">SHREWSBURRY, INGLATERRA 1809-1824</div>'+
	'<div class="description">'+
	'A Infância de Charles Darwin Charles Darwin nasceu no dia 12 de fevereiro de 1809 em Shrewsburry, na Inglaterra. Sua família fazia parte da elite intelectual da época e inﬂuenciou fortemente sua formação. Foi o quinto ﬁlho de Susannah Darwin (1765-1817) e Robert Darwin (1766-1848), um renomado médico com uma notável inteligência intuitiva. Seu avô paterno, Erasmus.....'+
	'</div></div>';

	var infowindowlocal1 = new google.maps.InfoWindow({
	  content: local1
	});

	var mlocal1 = new google.maps.Marker({
	  position: {lat: 52.709066, lng: -2.755281}, 
	  map: map
	});

	mlocal1.addListener('click', function() {
		if( prev_infowindow ) {
       prev_infowindow.close();
    }

    prev_infowindow = infowindowlocal1;

	  infowindowlocal1.open(map, mlocal1);
	  map.setZoom(8);
    map.setCenter(mlocal1.getPosition());
	});



	/* Local 2 */
	var local2 = '<div class="infowindow-content"><h3>Local 2</h3><div class="cover">'+
	'<img class="image-wrapper" src="img/rhino.png"></img><a href="locais/local-2.html" class="button">Ler Capítulo</a></div>'+
	'<div class="title">EDIMBURGO, ESCÓCIA 1825-1826</div>'+
	'<div class="description">'+
	'O jovem Charles Darwin Aos 16 anos, Charles passou o verão ajudando seu pai no atendimento aos pobres do Condado onde vivia. Já que não estava se saindo bem na escola,  Robert Darwin decidiu enviá-lo à faculdade de Medicina de Edimburgo, na Escócia, acompanhando seu irmão mais velho, Erasmus. Lá permaneceu apenas por dois anos (1825-1826) pois, para ele, a prática...'+
	'</div></div>';

	var infowindowlocal2 = new google.maps.InfoWindow({
	  content: local2
	});

	var mlocal2 = new google.maps.Marker({
	  position: {lat: 55.953926, lng: -3.188906}, 
	  map: map
	});

	mlocal2.addListener('click', function() {
		if( prev_infowindow ) {
       prev_infowindow.close();
    }

    prev_infowindow = infowindowlocal2;

	  infowindowlocal2.open(map, mlocal2);
	  map.setZoom(8);
    map.setCenter(mlocal2.getPosition());
	});

}