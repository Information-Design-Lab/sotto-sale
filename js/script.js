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
        jQuery(".button-next").data("next", 12);

        jQuery('#Ostana_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Ostana_audio.pause()},1000);

        jQuery('#Torino_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Torino_audio.pause()},1000);

        jQuery('#Guastalla_audio').animate({volume: 0}, 1000);
        setTimeout(function(){Guastalla_audio.pause()},1000);
    }
});

jQuery(".card .close").on("click", function(){
    jQuery(".card").removeClass("visible");
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
        jQuery(".button-prev").data("prev", prev);
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
        jQuery(".button-next").data("next", 12);

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

jQuery(".approfondimenti .close").click(function(){
    jQuery(".approfondimenti").removeClass("visible");
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

// CLICK BOTTONE LAGHI --> selezionare lago 

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
    } 
});
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
    } 
});
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
    } 
});
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
    } 
});