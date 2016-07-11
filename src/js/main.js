import $ from 'jquery'
import {flickr_pull} from "./api-files/flick-food-api.js";
import { baseURL, requestAPI, newsTemplate, fancyMenuTemplate, alaydisMenuTemplate, log, newsToPage, fancyToPage, alaydisToPage } from "./api-files/restaurant-api.js"

$(".tab_ourstory").on('click', function (x){
	
	$(".tab_ourstory").toggleClass("border");
    $(".tab_menu").removeClass("border");
    $(".tab_rsvp").removeClass("border");
    
    $(".story_reso_div").html("");
    $(".story_reso_div").html(`Food truck swag chartreuse lomo normcore, chicharrones direct trade brooklyn scenester gochujang 
   intelligentsia poutine. Fixie asymmetrical jean shorts, celiac direct trade pug cardigan
    migas single-origin coffee squid man braid distillery authentic 90's tilde. Skateboard cray roof party VHS, microdosing photo booth mlkshk occupy pickled. Scenester banjo direct trade deep v, brunch selfies occupy. Knausgaard ennui wayfarers trust fund, twee tote bag aesthetic crucifix gastropub next level occupy portland health goth swag tousled. Migas biodiesel brooklyn, kickstarter fashion axe gluten-free cray irony twee pour-over pitchfork disrupt readymade umami yr. Ugh vinyl mustache quinoa waistcoat, small batch bicycle rights.Pour-over selvage put a bird on it raw denim etsy. Etsy stumptown kale chips brunch, swag chambray helvetica cred. Single-origin coffee fashion axe kogi portland heirloom. Whatever readymade vegan hashtag jean shorts. Distillery chicharrones drinking vinegar, chartreuse trust fund paleo bicycle rights. Try-hard farm-to-table microdosing, flannel cliche skateboard banjo pug echo park four loko
     truffaut irony dreamcatcher fap. Franzen hella fixie, normcore distillery migas single-origin coffee.`);


    $(".fancy-menu").html("");
    $(".special-item").html("");
})


$(".tab_menu").on('click', function (x){
	
 $(".story_reso_div").html("");

	$(".tab_menu").toggleClass("border");
	$(".tab_ourstory").removeClass("border");
    $(".tab_rsvp").removeClass("border");

    requestAPI('/menu/1', fancyToPage)
})

$(".tab_rsvp").on('click', function (x){

	var form_temp = `<form>
         <h4>Full Name</h4>
         <input type="text" name="fullname" class="nametext">
         

         <h4>Number Of Guest</h4>
         <input type="text" name="guestnum" class="guesttext">
         
         <h4>Date</h4>
         <input type="text" name="date" class="datetext">
         
         <h4>Special Notes </h4>
         <textarea class="specialtext"></textarea>

         <h4> Seating Preference</h4>
         <select class="seating">
           <option>Indoor</option>
           <option>Outdoor</option>
         </select>
         <button name="rsvp" type="button" class="rsvp_button"> RSVP That Shit!</button>
       </form>`

	
	$(".tab_rsvp").toggleClass("border");
	$(".tab_ourstory").removeClass("border");
    $(".tab_menu").removeClass("border");

    $(".story_reso_div").html("");
    $(".fancy-menu").html("");
    $(".special-item").html("");
    $(".story_reso_div").append(form_temp);
})


$(".rsvp_button").on('click', function (x){
	
 console.log("helloe");

 $(".story_reso_div").html("");
   
	var name = $(".nametext").val();
	var guest = $(".guesttext").val();
    var date = $(".datetext").val();
    var special = $(".specialtext").val();
    var seating = $(".seating").val();
 

     var rsvptemp = `<div>
         <span>${name}</span>
         <span>${guest}</span>
         <span>${date}</span>
         <span>${special}</span>
         <span>${seating}</span>
       </div>`;
    
    $(".story_reso_div").append(rsvptemp);
  
})






