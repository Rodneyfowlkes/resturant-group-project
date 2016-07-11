import $ from 'jquery'
import {flickr_pull} from "./api-files/flick-food-api.js";
import { baseURL, requestAPI, newsTemplate, fancyMenuTemplate, alaydisMenuTemplate, log, newsToPage, fancyToPage, alaydisToPage } from "./api-files/restaurant-api.js"

$(".tab_ourstory").on('click', function (x){

	$(".tab_ourstory").toggleClass("border");
    $(".tab_menu").removeClass("border");
    $(".tab_rsvp").removeClass("border");
})


$(".tab_menu").on('click', function (x){



	$(".tab_menu").toggleClass("border");
	$(".tab_ourstory").removeClass("border");
    $(".tab_rsvp").removeClass("border");

    requestAPI('/menu/1', fancyToPage)
})

$(".tab_rsvp").on('click', function (x){

	$(".tab_rsvp").toggleClass("border");
	$(".tab_ourstory").removeClass("border");
    $(".tab_menu").removeClass("border");
})
