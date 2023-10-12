/* Evento caricamento pagina */
$(document).ready(function() {
	var larghezza_finestra = $(window).outerWidth();

    // MODIFICHE PER MOBILE
    if(larghezza_finestra < 576) {

	}
    // MODIFICHE PER TABLET
    if(larghezza_finestra < 992) {
        //Modifiche bordi cartiglio index
        $('.cartiglio_sx').addClass("border_right");
        $('.cartiglio_dx').removeClass("border_top");
        // Pian Del Re
        $('.frecce_fonti_sx').text("↑");
        // Candia Lomellina
        $('.fonti_bordi_dx').removeClass("border_right").addClass("border_top").addClass("border_bottom");
        $('#mare_quadretti_fonte').text("↑  Foto: Copyright © 2016, Andrea Cherci (@cherchiandrea) on Twitter")
    }
    // MODIFICHE PER DESKTOP
    else{
        // Modifiche bordi cartiglio index
        $('.cartiglio_sx').removeClass("border_right");
        $('.cartiglio_dx').addClass("border_top");
        // Pian Del Re
        $('.frecce_fonti_sx').text("←");
        // Candia Lomellina
        $('.fonti_bordi_dx').removeClass("border_top").removeClass("border_bottom").addClass("border_right");
        $('#mare_quadretti_fonte').text("↑  Foto:<br>     Copyright © 2016, <br>     Andrea Cherci<br>     (@cherchiandrea)<br>     on Twitter")
    }
});

/* Evento ridimensionamento pagina */
$(window).resize(function() {
	var larghezza_finestra = $(window).outerWidth();

    // MODIFICHE PER MOBILE
    if(larghezza_finestra < 576) {

	}
    // MODIFICHE PER TABLET
    if(larghezza_finestra < 992) {
        //Modifiche bordi cartiglio index
        $('.cartiglio_sx').addClass("border_right");
        $('.cartiglio_dx').removeClass("border_top");
        // Pian Del Re
        $('.frecce_fonti_sx').text("↑");
        // Candia Lomellina
        $('.fonti_bordi_dx').removeClass("border_right").addClass("border_top").addClass("border_bottom");
        $('.mare_quadretti_fonte').text("↑ Foto: Copyright © 2016, Andrea Cherci (@cherchiandrea) on Twitter")
    }
    // MODIFICHE PER DESKTOP
    else{
        // Modifiche bordi cartiglio index
        $('.cartiglio_sx').removeClass("border_right");
        $('.cartiglio_dx').addClass("border_top");
        // Pian Del Re
        $('.frecce_fonti_sx').text("←");
        // Candia Lomellina
        $('.fonti_bordi_dx').removeClass("border_top").removeClass("border_bottom").addClass("border_right");
        $('.mare_quadretti_fonte').text("↑  Foto:<br>     Copyright © 2016, <br>     Andrea Cherci<br>     (@cherchiandrea)<br>     on Twitter")
    }
});

/* INIZIALIZZAZIONE MAPBOX */
var next;
var prev;
var id = 2;

var laghi = [ "lago_maggiore", "lago_como", "lago_iseo", "lago_garda"];

var eventi = {
    Stile_Mappa: { "satellite": false }, 
    lago_maggiore: { stato: "attivo", regioni: "Piemonte, Lombardia, Ticino", superficie: 212, volume: 37, profondità_massima: 372, profondità_media: 200, immissari_principali: "Ticino, Maggia, Toce, Tresa", emissari_principali: "Ticino" },
    lago_como: { stato: "spento", regioni: "Lombardia", superficie: 145, volume: 23.37, profondità_massima: 412, profondità_media: 161, immissari_principali: "Adda, Mera, Fiumelatte, Pioverna, Cosia, Liro, Livo, Albano, Telo, Breggia, Varrone, Gerenzone, Caldone", emissari_principali: "Adda" },
    lago_iseo: { stato: "spento", regioni: "Lombardia", superficie: 65.3, volume: 8.09, profondità_massima: 256, profondità_media: "/", immissari_principali: "Oglio, Borlezza", emissari_principali: "Oglio" },
    lago_garda: { stato: "spento", regioni: "Lombardia, Veneto, Trentino - Alto Adige", superficie: 368, volume: 49, profondità_massima: 346, profondità_media: 133, immissari_principali: "Sarca", emissari_principali: "Mincio" }
};

mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGFtZXp6ZXR0aSIsImEiOiJjbGh0MHM0ZmowNnA4M2puMzdxdDA4a3VsIn0.3ANiEbNc0KJWDpT8raXhuw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/martamezzetti/clivumhbo00jj01qyakm16o9r',
    // center: [9.368204, 45.337551],
    // zoom: 7.3
    center: [7.09241, 44.70051], // Pian Del Re
    zoom: 12
});

/* CLICK SUI MARKER */

map.on('click', (event) => {
    let Ostana_audio = document.getElementById("Ostana_audio");
    let Torino_audio = document.getElementById("Torino_audio");
    let Guastalla_audio = document.getElementById("Guastalla_audio");

    const features = map.queryRenderedFeatures(event.point, {
        layers: ['tappe-fiume-po-sottosale'] 
    });
    if (!features.length) {
        return;
    }
    const feature = features[0];
    var name = feature.properties.place_name;
    var group = feature.properties.Group;
    id = feature.properties.ID;
    jQuery(".card").removeClass("visible");
    jQuery(".card#card-" + id).addClass("visible");
    /************************************************* Pian del Re **********/
    if (id == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.700 , ');
        jQuery("#cartiglio_lng").text('7.0924');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('652');
        // map.getCenter().lng
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 2);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

    }
    /************************************************* Ostana **********/
    if (id == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.692 , ');
        jQuery("#cartiglio_lng").text('7.1884');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 3);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Ostana_audio').animate({volume: 1}, 1000);
		Ostana_audio.play();
    }
    /************************************************* Torino **********/
    if (id == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.054 , ');
        jQuery("#cartiglio_lng").text('7.6867');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", 4);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 1}, 1000);
        Torino_audio.play();
    }
    /************************************************* Candia Lomellina **********/
    if (id == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.176 , ');
        jQuery("#cartiglio_lng").text('8.5944');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", 5);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Grandi Laghi **********/
    if (id == 5) {
        map.flyTo({
            center: [9.050, 45.923],  
            essential: true,
            zoom: 8.2
        });
        jQuery("#cartiglio_lat").text('45.923 , ');
        jQuery("#cartiglio_lng").text('9.050');
        jQuery("#cartiglio_alt").text('da 65 a 198');
        jQuery("#cartiglio_km").text('/');
        jQuery(".button-prev").data("prev", 4);
        jQuery(".button-next").data("next", 6);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Mezzanino **********/
    if (id == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144 , ');
        jQuery("#cartiglio_lng").text('9.2285');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".button-prev").data("prev", 5);
        jQuery(".button-next").data("next", 7);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Piacenza **********/
    if (id == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".button-prev").data("prev", 6);
        jQuery(".button-next").data("next", 8);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Cremona **********/
    if (id == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".button-prev").data("prev", 7);
        jQuery(".button-next").data("next", 9);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Boretto **********/
    if (id == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901 , ');
        jQuery("#cartiglio_lng").text('10.554');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".button-prev").data("prev", 8);
        jQuery(".button-next").data("next", 10);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Guastalla **********/
    if (id == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921 , ');
        jQuery("#cartiglio_lng").text('10.653');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".button-prev").data("prev", 9);
        jQuery(".button-next").data("next", 11);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 1}, 1000);
        Guastalla_audio.play();
    }
    /************************************************* Pontelagoscuro **********/
    if (id == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".button-prev").data("prev", 10);
        jQuery(".button-next").data("next", 12);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Delta **********/
    if (id == 12) {
        map.flyTo({
            center: [12.268, 44.947],
            essential: true,
            zoom: 10
        });
        jQuery("#cartiglio_lat").text('44.947 , ');
        jQuery("#cartiglio_lng").text('12.268');
        jQuery("#cartiglio_alt").text('1');
        jQuery("#cartiglio_km").text('0');
        jQuery(".button-prev").data("prev", 11);
        jQuery(".button-next").data("next", 13);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Installazione Ferrara **********/
    if (id == 13) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".button-prev").data("prev", 12);
        jQuery(".button-next").data("next", 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
});




/* BOTTONE NEXT */

jQuery(".button-next").click(function(){
    let Ostana_audio = document.getElementById("Ostana_audio");
    let Torino_audio = document.getElementById("Torino_audio");
    let Guastalla_audio = document.getElementById("Guastalla_audio");
    next = jQuery(this).data("next");
    // console.log("prev: " + prev +  "id: " + id + " next: " + next);
    // id = next;
    /************************************************* Pian del Re **********/
    if (next == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.700 , ');
        jQuery("#cartiglio_lng").text('7.0924');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('0');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Ostana **********/
    if (next == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.692 , ');
        jQuery("#cartiglio_lng").text('7.1884');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Ostana_audio').animate({volume: 1}, 1000);
        Ostana_audio.play();
    }
    /************************************************* Torino **********/
    if (next == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.054 , ');
        jQuery("#cartiglio_lng").text('7.6867');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 1}, 1000);
        Torino_audio.play();
    }
    /************************************************* Candia Lomellina **********/
    if (next == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.176 , ');
        jQuery("#cartiglio_lng").text('8.5944');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Grandi Laghi **********/
    if (next == 5) {
        map.flyTo({
            center: [9.050, 45.923],  
            essential: true,
            zoom: 8.2
        });
        jQuery("#cartiglio_lat").text('45.923 , ');
        jQuery("#cartiglio_lng").text('9.050');
        jQuery("#cartiglio_alt").text('da 65 a 198');
        jQuery("#cartiglio_km").text('/');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 4);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Mezzanino **********/
    if (next == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144 , ');
        jQuery("#cartiglio_lng").text('9.2285');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 5);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Piacenza **********/
    if (next == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 6);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Cremona **********/
    if (next == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 7);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Boretto **********/
    if (next == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901 , ');
        jQuery("#cartiglio_lng").text('10.554');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 8);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Guastalla **********/
    if (next == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921 , ');
        jQuery("#cartiglio_lng").text('10.653');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 9);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 1}, 1000);
        Guastalla_audio.play();
    }
    /************************************************* Pontelagoscuro **********/
    if (next == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 10);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Delta **********/
    if (next == 12) {
        map.flyTo({
            center: [12.268, 44.947],
            essential: true,
            zoom: 10
        });
        jQuery("#cartiglio_lat").text('44.947 , ');
        jQuery("#cartiglio_lng").text('12.268');
        jQuery("#cartiglio_alt").text('1');
        jQuery("#cartiglio_km").text('0');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 11);
        jQuery(".button-next").data("next", next + 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Installazione Ferrara **********/
    if (next == 13) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");

        jQuery(".button-prev").data("prev", 12);
        jQuery(".button-next").data("next", 1);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
});


/* BOTTONE PREV */

jQuery(".button-prev").click(function(){
    let Ostana_audio = document.getElementById("Ostana_audio");
    let Torino_audio = document.getElementById("Torino_audio");
    let Guastalla_audio = document.getElementById("Guastalla_audio");
    prev = jQuery(this).data("prev");
    jQuery(".card").removeClass("visible");
    // id = next - 1;
    jQuery(".card#card-" + prev).addClass("visible");
    jQuery(".button-prev").data("prev", prev);
    console.log("prev: " + prev + " id: " + id + " next: " + next);
    /************************************************* Pian del Re **********/
    if (prev == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.700 , ');
        jQuery("#cartiglio_lng").text('7.0924');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('0');
        jQuery(".button-prev").data("prev", 13);
        jQuery(".button-next").data("next", 2);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Ostana **********/
    if (prev == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.692 , ');
        jQuery("#cartiglio_lng").text('7.1884');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 3);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Ostana_audio').animate({volume: 1}, 1000);
        Ostana_audio.play();
    }
    /************************************************* Torino **********/
    if (prev == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.054 , ');
        jQuery("#cartiglio_lng").text('7.6867');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 4);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 1}, 1000);
        Torino_audio.play();
    }
    /************************************************* Candia Lomellina **********/
    if (prev == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.176 , ');
        jQuery("#cartiglio_lng").text('8.5944');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 5);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Grandi Laghi **********/
    if (prev == 5) {
        map.flyTo({
            center: [9.050, 45.923],  
            essential: true,
            zoom: 8.2
        });
        jQuery("#cartiglio_lat").text('45.923 , ');
        jQuery("#cartiglio_lng").text('9.050');
        jQuery("#cartiglio_alt").text('da 65 a 198');
        jQuery("#cartiglio_km").text('/');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 6);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Mezzanino **********/
    if (prev == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144 , ');
        jQuery("#cartiglio_lng").text('9.2285');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 7);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Piacenza **********/
    if (prev == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 8);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Cremona **********/
    if (prev == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053 , ');
        jQuery("#cartiglio_lng").text('9.6947');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 9);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Boretto **********/
    if (prev == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901 , ');
        jQuery("#cartiglio_lng").text('10.554');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 10);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Guastalla **********/
    if (prev == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921 , ');
        jQuery("#cartiglio_lng").text('10.653');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 11);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 1}, 1000);
        Guastalla_audio.play();
    }
    /************************************************* Pontelagoscuro **********/
    if (prev == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 12);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Delta **********/
    if (prev == 12) {
        map.flyTo({
            center: [12.268, 44.947],
            essential: true,
            zoom: 10
        });
        jQuery("#cartiglio_lat").text('44.947 , ');
        jQuery("#cartiglio_lng").text('12.268');
        jQuery("#cartiglio_alt").text('1');
        jQuery("#cartiglio_km").text('0');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 13);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
    /************************************************* Installazione Ferrara **********/
    if (prev == 13) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878 , ');
        jQuery("#cartiglio_lng").text('11.607');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');

        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 13);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
});

// CLICK SUL BOTTONE SCOPRI

jQuery(".scopri").click(function(){
    var approfondimenti = jQuery(this).data("approfondimenti");
    jQuery("#approfondimenti-" + approfondimenti).addClass("visible");
    console.log("#approfondimenti-" + approfondimenti)
});

// CLICK CLOSE CARD

jQuery(".card .close").on("click", function(){
    jQuery(".card").removeClass("visible");

    jQuery('#Ostana_audio').animate({volume: 0}, 1000);
    setTimeout(function(){Ostana_audio.pause()},1000);

    jQuery('#Torino_audio').animate({volume: 0}, 1000);
    setTimeout(function(){Torino_audio.pause()},1000);

    jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
    setTimeout(function(){Guastalla_audio.pause()},1000);
});

// CLICK CLOSE APPROFONDIMENTI
jQuery(".approfondimenti .close").click(function(){
    jQuery(".approfondimenti").removeClass("visible");
});

// CLICK CLOSE ABOUT
jQuery(".about-2 .close").click(function(){
    jQuery(".about-2").removeClass("visible");
});

// CLICK SUL BOTTONE SATELLITE

jQuery(".satellite_off").click(function(){
    if(eventi.Stile_Mappa.satellite === false){
        map.setStyle('mapbox://styles/martamezzetti/cliwwaowq00m801p75ssrc43u')
        eventi.Stile_Mappa.satellite = true;
        jQuery("#logo").removeClass("visible")
        jQuery("#logo_w").addClass("visible")
        jQuery(".cartiglio_mappa div").removeClass("border_top").removeClass("border_right").removeClass("border_bottom").removeClass("border_left")
        jQuery(".cartiglio_mappa div").addClass("border_top_w").addClass("border_bottom_w").addClass("border_left_w").addClass("white")
        jQuery(".cartiglio_mappa div.last_div").addClass("border_right_w")
        jQuery(".idrografica_off").addClass("visible")
        jQuery(".satellite_off").removeClass("visible")
    } 
});
jQuery(".idrografica_off").click(function(){
    if(eventi.Stile_Mappa.satellite){
        map.setStyle('mapbox://styles/martamezzetti/clivumhbo00jj01qyakm16o9r')
        eventi.Stile_Mappa.satellite = false;
        jQuery("#logo_w").removeClass("visible")
        jQuery("#logo").addClass("visible")
        jQuery(".cartiglio_mappa div").removeClass("border_top_w").removeClass("border_right_w").removeClass("border_bottom_w").removeClass("border_left_w").removeClass("white")
        jQuery(".cartiglio_mappa div").addClass("border_top").addClass("border_bottom").addClass("border_left")
        jQuery(".cartiglio_mappa div.last_div").addClass("border_right")
        jQuery(".satellite_off").addClass("visible")
        jQuery(".idrografica_off").removeClass("visible")
    }
});


// CLICK BOTTONE CHI SIAMO

jQuery("#button_credits").click(function(){
        jQuery(".about-2").addClass("visible");
});

// CLICK BOTTONE LAGHI --> selezionare lago 

// ---------------------------------------------- LAGO MAGGIORE
jQuery("#lago_maggiore").click(function(){
    if(eventi.lago_maggiore.stato == "spento"){
        for(var i=0; i<4; i++){
            if(eventi[laghi[i]].stato == "attivo"){
                eventi[laghi[i]].stato = "spento";
                jQuery("#" + laghi[i]).removeClass("active");
            }
        }
        eventi.lago_maggiore.stato = "attivo";
        jQuery("#lago_maggiore").addClass("active");

        jQuery(".regioni").text(eventi.lago_maggiore.regioni);
        jQuery(".superficie").text(eventi.lago_maggiore.superficie);
        jQuery(".volume").text(eventi.lago_maggiore.volume);
        jQuery(".profondità_massima").text(eventi.lago_maggiore.profondità_massima);
        jQuery(".profondità_media").text(eventi.lago_maggiore.profondità_media);
        jQuery(".immissari").text(eventi.lago_maggiore.immissari_principali);
        jQuery(".emissari").text(eventi.lago_maggiore.emissari_principali);

        jQuery(".laghi_img").remove();
        $("<img>").attr("src", "img/lago_maggiore.jpeg")
                    .addClass("laghi_img")
                    .appendTo(".container_img_laghi");
        jQuery(".fonti_laghi_img").text("Photo by SlimMars 13 from Pexels.com")

        jQuery(".titolo_dataviz_laghi_altezze").text("Come è cambiata l'altezza idrometrica del Lago Maggiore nel triennio 2021-2023");
        jQuery(".descrizione_altezze_laghi").text("Nel grafico vengono visualizzate le diverse altezze medie mensili del Lago Maggiore nel triennio 2021-2023, da confrontarsi con i livelli massimi e minimi storici relativi al periodo 1946-2022. Pur rimanendo sempre sopra la minima storica, i valori più bassi dell’altezza idrometrica risultano essere quelli relativi al 2022, in cui la media mensile rasenta lo zero idrometrico e tocca il picco del minimo storico durante il mese di giugno.");
        jQuery(".titolo_dataviz_laghi_portate").text("Come è cambiata la portata erogata del Lago Maggiore nel triennio 2021-2023");
        jQuery(".descrizione_portate_laghi").text("I grafici mettono in correlazione la portata erogata e i livelli minimi di erogazione registrati negli anni 1946-2022 per il Lago Maggiore, per mettere in evidenza la quantità di acqua erogata rispetto ai minimi storici. I valori di portata erogata del Lago Maggiore nel 2022 tendono ad avvicinarsi ai minimi storici in particolare nei mesi di febbraio e marzo, ma in generale risultano bassi per tutto l’arco annuale. Anche nel 2023 si registrano valori vicini ai minimi storici soprattutto nei mesi gennaio-marzo, mentre ad aprile scendono al di sotto dei minimi storici. In crescita invece i valori di giugno.");
        
        jQuery(".dataviz_img").remove();
        $("<img>").attr("src", "img/lago_maggiore_altezze.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_altezze_laghi");

        $("<img>").attr("src", "img/lago_maggiore_portate.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_portate_laghi");
    } 
});

// ---------------------------------------------- LAGO COMO
jQuery("#lago_como").click(function(){
    if(eventi.lago_como.stato == "spento"){
        for(var i=0; i<4; i++){
            if(eventi[laghi[i]].stato == "attivo"){
                eventi[laghi[i]].stato = "spento";
                jQuery("#" + laghi[i]).removeClass("active");
            }
        }
        eventi.lago_como.stato = "attivo";
        jQuery("#lago_como").addClass("active");

        jQuery(".regioni").text(eventi.lago_como.regioni);
        jQuery(".superficie").text(eventi.lago_como.superficie);
        jQuery(".volume").text(eventi.lago_como.volume);
        jQuery(".profondità_massima").text(eventi.lago_como.profondità_massima);
        jQuery(".profondità_media").text(eventi.lago_como.profondità_media);
        jQuery(".immissari").text(eventi.lago_como.immissari_principali);
        jQuery(".emissari").text(eventi.lago_como.emissari_principali);

        jQuery(".laghi_img").remove();
        $("<img>").attr("src", "img/lago_como.jpg")
                    .addClass("laghi_img")
                    .appendTo(".container_img_laghi");
        jQuery(".fonti_laghi_img").text("Diego Delso, CC BY-SA 4.0, via Wikimedia Commons")

        jQuery(".titolo_dataviz_laghi_altezze").text("Come è cambiata l'altezza idrometrica del Lago di Como nel triennio 2021-2023");
        jQuery(".descrizione_altezze_laghi").text("Nel grafico vengono visualizzate le diverse altezze medie mensili del Lago di Como nel triennio 2021-2023, da confrontarsi con i livelli massimi e minimi storici relativi al periodo 1946-2022. I valori più critici di altezza idrometrica registrati risultano essere quelli relativi al 2022, in cui gli indici toccano i valori di minima storica registrata (aprile 2022) e scendono al di sotto della media durante l’estate (luglio, agosto 2022).");
        jQuery(".titolo_dataviz_laghi_portate").text("Come è cambiata la portata erogata del Lago di Como nel triennio 2021-2023");
        jQuery(".descrizione_portate_laghi").text("Si può notare una decrescita dei valori soprattutto nel 2022 e 2023, non solo nei mesi più caldi, ma anche nel periodo invernale. In generale, i valori di portata erogata del Lago di Como nel 2022 tendono ad avvicinarsi ai minimi storici, fino a toccarli e raggiungere livelli inferiori nei mesi primaverili (aprile, maggio 2022).  è critico anche lo stato del 2023, in cui si registrano valori vicini ai minimi storici nei mesi invernali (gennaio, febbraio 2023) e ancora inferiori nei mesi primaverili (aprile, maggio 2023).");
        
        jQuery(".dataviz_img").remove();
        $("<img>").attr("src", "img/lago_como_altezze.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_altezze_laghi");

        $("<img>").attr("src", "img/lago_como_portate.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_portate_laghi");
    } 
});

// ---------------------------------------------- LAGO ISEO
jQuery("#lago_iseo").click(function(){
    if(eventi.lago_iseo.stato == "spento"){
        for(var i=0; i<4; i++){
            if(eventi[laghi[i]].stato == "attivo"){
                eventi[laghi[i]].stato = "spento";
                jQuery("#" + laghi[i]).removeClass("active");
            }
        }
        eventi.lago_iseo.stato = "attivo";
        jQuery("#lago_iseo").addClass("active");

        jQuery(".regioni").text(eventi.lago_iseo.regioni);
        jQuery(".superficie").text(eventi.lago_iseo.superficie);
        jQuery(".volume").text(eventi.lago_iseo.volume);
        jQuery(".profondità_massima").text(eventi.lago_iseo.profondità_massima);
        jQuery(".profondità_media").text(eventi.lago_iseo.profondità_media);
        jQuery(".immissari").text(eventi.lago_iseo.immissari_principali);
        jQuery(".emissari").text(eventi.lago_iseo.emissari_principali);

        jQuery(".laghi_img").remove();
        $("<img>").attr("src", "img/lago_iseo.jpg")
                    .addClass("laghi_img")
                    .appendTo(".container_img_laghi");
        jQuery(".fonti_laghi_img").text("Goldmund100, CC BY-SA 3.0, via Wikimedia Commons")

        jQuery(".titolo_dataviz_laghi_altezze").text("Come è cambiata l'altezza idrometrica del Lago d'Iseo nel triennio 2021-2023");
        jQuery(".descrizione_altezze_laghi").text("Nel grafico vengono visualizzate le diverse altezze medie mensili del Lago d’Iseo nel triennio 2021-2023, da confrontarsi con i livelli massimi e minimi storici relativi al periodo 1946-2022. Notiamo che l’altezza idrometrica è sempre rientrante nella media ma, come negli altri laghi, il 2022 rimane l’anno più critico del triennio, con valori negativi che a tratti si avvicinano alla minima storica.");
        jQuery(".titolo_dataviz_laghi_portate").text("Come è cambiata la portata erogata del Lago d'Iseo nel triennio 2021-2023");
        jQuery(".descrizione_portate_laghi").text("I grafici mettono in correlazione la portata erogata e i livelli minimi di erogazione registrati negli anni 1946-2022 per il Lago d’Iseo, per mettere in evidenza la quantità di acqua erogata rispetto ai minimi storici. I valori restano alti nel 2021, mentre nel 2022 iniziano a decrescere fino a scendere al di sotto dei minimi storici nei mesi di aprile e maggio. Relativamente bassi anche i valori nei mesi invernali. Nel 2023 si riprende a giugno, dopo una decrescita graduale da gennaio a maggio.");
        
        jQuery(".dataviz_img").remove();
        $("<img>").attr("src", "img/lago_iseo_altezze.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_altezze_laghi");

        $("<img>").attr("src", "img/lago_iseo_portate.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_portate_laghi");
    } 
});

// ---------------------------------------------- LAGO GARDA
jQuery("#lago_garda").click(function(){
    if(eventi.lago_garda.stato == "spento"){
        for(var i=0; i<4; i++){
            if(eventi[laghi[i]].stato == "attivo"){
                eventi[laghi[i]].stato = "spento";
                jQuery("#" + laghi[i]).removeClass("active");
            }
        }
        eventi.lago_garda.stato = "attivo";
        jQuery("#lago_garda").addClass("active");

        jQuery(".regioni").text(eventi.lago_garda.regioni);
        jQuery(".superficie").text(eventi.lago_garda.superficie);
        jQuery(".volume").text(eventi.lago_garda.volume);
        jQuery(".profondità_massima").text(eventi.lago_garda.profondità_massima);
        jQuery(".profondità_media").text(eventi.lago_garda.profondità_media);
        jQuery(".immissari").text(eventi.lago_garda.immissari_principali);
        jQuery(".emissari").text(eventi.lago_garda.emissari_principali);

        jQuery(".laghi_img").remove();
        $("<img>").attr("src", "img/lago_garda.jpg")
                    .addClass("laghi_img")
                    .appendTo(".container_img_laghi");
        jQuery(".fonti_laghi_img").text("Ampfinger assumed (based on copyright claims), CC BY-SA 3.0, via Wikimedia Commons")

        jQuery(".titolo_dataviz_laghi_altezze").text("Come è cambiata l'altezza idrometrica del Lago di Garda nel triennio 2021-2023");
        jQuery(".descrizione_altezze_laghi").text("Nel grafico vengono visualizzate le diverse altezze medie mensili del Lago di Garda nel triennio 2021-2023, da confrontarsi con i livelli massimi e minimi storici relativi al periodo 1946-2022. Rispetto agli altri laghi, questo non ha valori negativi, si nota però un trend che da fine 2021 porta sempre più a un abbassamento dell’altezza idrometrica, arrivando nel 2022 e 2023 a sfiorare la minima storica.");
        jQuery(".titolo_dataviz_laghi_portate").text("Come è cambiata la portata erogata del Lago di Garda nel triennio 2021-2023");
        jQuery(".descrizione_portate_laghi").text("I grafici mettono in correlazione la portata erogata e i livelli minimi di erogazione registrati negli anni 1946-2022 per il Lago di Garda, per mettere in evidenza la quantità di acqua erogata rispetto ai minimi storici. Dopo le grandi quantità di portata erogata tra gennaio e settembre 2021, che rimane alta sia nei mesi più freddi, sia nei mesi più caldi del periodo citato, si registra una graduale decrescita tra ottobre e dicembre 2022, in cui i valori si avvicinano ai minimi storici registrati. Anche nei primi mesi del 2023 (quindi nell’intera stagione invernale) si rilevano dati molto vicini ai minimi storici. I valori si riprendono nella primavera 2022, ma scendono nuovamente nel periodo autunnale e invernale, senza più riprese neanche nell’estate 2023.");
        
        jQuery(".dataviz_img").remove();
        $("<img>").attr("src", "img/lago_garda_altezze.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_altezze_laghi");

        $("<img>").attr("src", "img/lago_garda_portate.svg")
                    .addClass("dataviz_img")
                    .appendTo(".container_dataviz_portate_laghi");
    } 
});


// DELTA STICKY

var scrolly = document.querySelector(".scrolly");
var article = scrolly.querySelector(".scrollable-column ");
var step = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    console.log(response);
    // add to color to current step
    response.element.classList.add("is-active");
}

function handleStepExit(response) {
    // response = { element, direction, index }
    console.log(response);
    // remove color from current step
    response.element.classList.remove("is-active");
}

function init() {
    // 1. setup the scroller with the bare-bones options
    // 		this will also initialize trigger observations
    // 2. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: ".scrolly .scrollable-column .step",
            debug: false,
            offset: 0.5
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

}

// kick things off
init();

// INTERAZIONI DATAVIZ DELTA

$('.boa_traccia').hover(
    function(){
        $('.boa_traccia').removeClass("selezionata");
        id = jQuery(this).data("boa");
		$('#' + id).addClass("selezionata");
	}
);


