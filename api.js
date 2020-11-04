function initMap() {

  var myOptions = {
    zoom: 13,
    center: {lat: 32.888862, lng: -117.240648},
  };

  var map = new google.maps.Map(document.getElementById('map'),
  myOptions);

  var puestoInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
              '<h2>Puesto La Jolla</h2><h3>1026 Wall St, La Jolla, CA 92037</h3>' +
              '<p>This ia an Artisan Mexican restaurant located deep in the La Jolla Village.</p>' +
              '<p>My top recommendation is the Filet Mignon taco.</p>' +
              '<p>Tip: Do not order the ceviche unless you want to get fleeced $17. The portions will not be what you think.</p>' +
              '</div>'
  });

  var warrenCollegeInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
              '<h2>Earl Warren College</h2><h3>9500 Gilman Dr #0422, La Jolla, CA 92093</h3>' +
              '<p>My home base of operations in La Jolla.</p>' +
              '<p>It is a very quiet area overlooking the canyon, and is very close to the campus aquatics center.</p>' +
              '<p>Watch for the occassional raccoon (trash panda) outside your dorm room window. </p>' +
              '</div>'
  });

  var cheeseShopInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
              '<h2>Cheese Shop</h2><h3>2165 Avenida De La Playa, La Jolla, CA 92037</h3>' +
              '<p>A mom-and-pop shop that has yet been destroyed by COVID-19, and thank God for that.</p>' +
              '<p>The Turkey, Jack Cheese and Avocado Sandwich is a sure 10/10, heavily recommened.</p>' +
              '<p>Enjoy before or after your trip to La Jolla Shores, just a short walk away.</p>' +
              '</div>'
  });

  var dinTaiFungInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
              '<h2>Din Tai Fung</h2><h3>4301 La Jolla Village Dr #2000, San Diego, CA 92122</h3>' +
              '<p>This franchise, known for its hand-made dumplings, needs no introduction. </p>' +
              '<p>Among my top dishes are Kurobatu Pork Buns, Kurobatu Pork Xiao Long Bao, and the Jidori Chicken Wonton Soup.</p>' +
              '<p>If soup is not your thing, Korubatu Pork Wontons with Spicy Sauce are some of the best I have ever had.</p>' +
              '</div>'
  });

  var nekterInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
              '<h2>Nekter Juice Bar</h2><h3>8855 Villa La Jolla Dr, La Jolla, CA 92037</h3>' +
              '<p>I tend to come here when I want to take a short walk to the nearest shopping center for groceries or a nice breakfast.</p>' +
              '<p>Instead of smoothies, I opt for the Protein Power bowl to keep me full and satiated.</p>' +
              '</div>'
  });

  var puesto = new google.maps.Marker({
    position: { lat: 32.846970, lng: -117.273845 },
    map: map,
    title: 'Puesto'
  });

  var warrenCollege = new google.maps.Marker({
    position: { lat: 32.883604, lng: -117.232897 },
    map: map,
    title: 'Warren College'
  });

  var cheeseShop = new google.maps.Marker({
    position: { lat: 32.853826, lng: -117.255975 },
    map: map,
    title: 'Cheese Shop'
  });

  var dinTaiFung = new google.maps.Marker({
    position: { lat: 32.872409, lng: -117.212377 },
    map: map,
    title: 'Din Tai Fung'
  });

  var nekter = new google.maps.Marker({
    position: { lat: 32.869047, lng: -117.232039 },
    map: map,
    title: 'Nekter Juice Bar'
  });


  google.maps.event.addListener(puesto, 'click', function() {
  GuidedTour();
});

  google.maps.event.addListener(warrenCollege, 'click', function() {
  GuidedTour();
});

google.maps.event.addListener(cheeseShop, 'click', function() {
  GuidedTour();
});

google.maps.event.addListener(dinTaiFung, 'click', function() {
  GuidedTour();
});

google.maps.event.addListener(nekter, 'click', function() {
  GuidedTour();
});

function GuidedTour() {
    puestoInfo.close(map,puesto);
    map.panTo(warrenCollege.getPosition());
    warrenCollegeInfo.open(map,warrenCollege);
    window.setTimeout(function(){
    map.panTo(cheeseShop.getPosition());
    warrenCollegeInfo.close(map,warrenCollege);
    cheeseShopInfo.open(map,cheeseShop);}
    , 6000)
    window.setTimeout(function(){
    map.panTo(dinTaiFung.getPosition());
    cheeseShopInfo.close(map,cheeseShop);
    dinTaiFungInfo.open(map,dinTaiFung);}
    , 11000)
    window.setTimeout(function(){
    map.panTo(nekter.getPosition());
    dinTaiFungInfo.close(map,dinTaiFung);
    nekterInfo.open(map,nekter);}
    , 16000)
    window.setTimeout(function(){
    map.panTo(puesto.getPosition());
    nekterInfo.close(map,nekter);
    puestoInfo.open(map,puesto);}
    , 21000)
    window.setTimeout(function(){
      puestoInfo.close(map,puesto);
      window.alert("Thank you for viewing this tour. More locations will be added as time goes on.")}
    , 26000)
  }

}
google.maps.event.addDomListener(window, 'load', initialize);
