/* INIZIALIZZAZIONE MAPBOX */
var next;
var prev;
var id = 2;

var eventi = {
    Stile_Mappa: { "satellite": false }, 
    Laghi_anni: { "2021": true, "2022": false, "2023": false },
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
        jQuery("#cartiglio_lat").text('44.70051 , ');
        jQuery("#cartiglio_lng").text('7.09241');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('652');
        // map.getCenter().lng
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 2);
    }
    /************************************************* Ostana **********/
    if (id == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.69229 , ');
        jQuery("#cartiglio_lng").text('7.18842');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 3);
    }
    /************************************************* Torino **********/
    if (id == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.05445 , ');
        jQuery("#cartiglio_lng").text('7.68676');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", 4);
    }
    /************************************************* Candia Lomellina **********/
    if (id == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.17658 , ');
        jQuery("#cartiglio_lng").text('8.59441');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", 5);
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
    }
    /************************************************* Mezzanino **********/
    if (id == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144860 , ');
        jQuery("#cartiglio_lng").text('9.228572');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".button-prev").data("prev", 5);
        jQuery(".button-next").data("next", 7);
    }
    /************************************************* Piacenza **********/
    if (id == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".button-prev").data("prev", 6);
        jQuery(".button-next").data("next", 8);
    }
    /************************************************* Cremona **********/
    if (id == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".button-prev").data("prev", 7);
        jQuery(".button-next").data("next", 9);
    }
    /************************************************* Boretto **********/
    if (id == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901870 , ');
        jQuery("#cartiglio_lng").text('10.554287');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".button-prev").data("prev", 8);
        jQuery(".button-next").data("next", 10);
    }
    /************************************************* Guastalla **********/
    if (id == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921152 , ');
        jQuery("#cartiglio_lng").text('10.653998');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".button-prev").data("prev", 9);
        jQuery(".button-next").data("next", 11);
    }
    /************************************************* Pontelagoscuro **********/
    if (id == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878386 , ');
        jQuery("#cartiglio_lng").text('11.607543');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".button-prev").data("prev", 10);
        jQuery(".button-next").data("next", 12);
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
    }
});

jQuery(".card .close").on("click", function(){
    jQuery(".card").removeClass("visible");
});

/* BOTTONE NEXT */

jQuery(".button-next").click(function(){
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
        jQuery("#cartiglio_lat").text('44.70051 , ');
        jQuery("#cartiglio_lng").text('7.09241');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('0');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Ostana **********/
    if (next == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.69229 , ');
        jQuery("#cartiglio_lng").text('7.18842');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Torino **********/
    if (next == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.05445 , ');
        jQuery("#cartiglio_lng").text('7.68676');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Candia Lomellina **********/
    if (next == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.17658 , ');
        jQuery("#cartiglio_lng").text('8.59441');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", next + 1);
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
    }
    /************************************************* Mezzanino **********/
    if (next == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144860 , ');
        jQuery("#cartiglio_lng").text('9.228572');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 5);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Piacenza **********/
    if (next == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 6);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Cremona **********/
    if (next == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 7);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Boretto **********/
    if (next == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901870 , ');
        jQuery("#cartiglio_lng").text('10.554287');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 8);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Guastalla **********/
    if (next == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921152 , ');
        jQuery("#cartiglio_lng").text('10.653998');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 9);
        jQuery(".button-next").data("next", next + 1);
    }
    /************************************************* Pontelagoscuro **********/
    if (next == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878386 , ');
        jQuery("#cartiglio_lng").text('11.607543');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".card").removeClass("visible");
        jQuery(".card#card-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 10);
        jQuery(".button-next").data("next", next + 1);
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
    }
});


/* BOTTONE PREV */

jQuery(".button-prev").click(function(){
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
        jQuery("#cartiglio_lat").text('44.70051 , ');
        jQuery("#cartiglio_lng").text('7.09241');
        jQuery("#cartiglio_alt").text('2022');
        jQuery("#cartiglio_km").text('0');
        jQuery(".button-prev").data("prev", prev);
        jQuery(".button-next").data("next", 2);
    }
    /************************************************* Ostana **********/
    if (prev == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.69229 , ');
        jQuery("#cartiglio_lng").text('7.18842');
        jQuery("#cartiglio_alt").text('1250');
        jQuery("#cartiglio_km").text('644.5');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 3);
    }
    /************************************************* Torino **********/
    if (prev == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.05445 , ');
        jQuery("#cartiglio_lng").text('7.68676');
        jQuery("#cartiglio_alt").text('239');
        jQuery("#cartiglio_km").text('557');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 4);
    }
    /************************************************* Candia Lomellina **********/
    if (prev == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.17658 , ');
        jQuery("#cartiglio_lng").text('8.59441');
        jQuery("#cartiglio_alt").text('102');
        jQuery("#cartiglio_km").text('477');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 5);
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
    }
    /************************************************* Mezzanino **********/
    if (prev == 6) {
        map.flyTo({
            center: [9.228572, 45.144860], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.144860 , ');
        jQuery("#cartiglio_lng").text('9.228572');
        jQuery("#cartiglio_alt").text('62');
        jQuery("#cartiglio_km").text('412');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 7);
    }
    /************************************************* Piacenza **********/
    if (prev == 7) {
        map.flyTo({
            center: [9.694746, 45.053475], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('61');
        jQuery("#cartiglio_km").text('357');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 8);
    }
    /************************************************* Cremona **********/
    if (prev == 8) {
        map.flyTo({
            center: [10.024872, 45.133480], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('45.053475 , ');
        jQuery("#cartiglio_lng").text('9.694746');
        jQuery("#cartiglio_alt").text('47');
        jQuery("#cartiglio_km").text('312');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 9);
    }
    /************************************************* Boretto **********/
    if (prev == 9) {
        map.flyTo({
            center: [10.554287, 44.901870], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.901870 , ');
        jQuery("#cartiglio_lng").text('10.554287');
        jQuery("#cartiglio_alt").text('23');
        jQuery("#cartiglio_km").text('252');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 10);
    }
    /************************************************* Guastalla **********/
    if (prev == 10) {
        map.flyTo({
            center: [10.653998, 44.921152], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.921152 , ');
        jQuery("#cartiglio_lng").text('10.653998');
        jQuery("#cartiglio_alt").text('24');
        jQuery("#cartiglio_km").text('242');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 11);
    }
    /************************************************* Pontelagoscuro **********/
    if (prev == 11) {
        map.flyTo({
            center: [11.607543, 44.878386], 	
            essential: true,
            zoom: 12
        });
        jQuery("#cartiglio_lat").text('44.878386 , ');
        jQuery("#cartiglio_lng").text('11.607543');
        jQuery("#cartiglio_alt").text('9');
        jQuery("#cartiglio_km").text('132');
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 12);
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

jQuery("#button_satellite").click(function(){
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
    } else{
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
