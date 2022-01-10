/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

/* eslint-disable prefer-arrow-callback */
AUI().ready(
	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/
	
	
	function() {
			$('.team__carousel').slick({
				autoplay: true,
				infinite: true,
				arrows: true,
				autoplaySpeed: 500,
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
		
				prevArrow: $('.team__carousel-arrows-prev'),
				nextArrow: $('.team__carousel-arrows-next'),
		
				responsive: [
					{
					breakpoint: 1280,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
						}
					}
				],
			});
		/*
			$('.slick-dots').addClass("position-static")
			$('.team__carousel-item').addClass("slick-item-adjust")
			
			$(document).load($(window).bind("resize", ()=>{
				if(window.matchMedia('(min-width: 1280px)').matches){
					$('.team__carousel-item').removeAttr("style")
					$('.team__carousel-item').css("display", "flex")
				}
			}))*/
		}
);

Liferay.Portlet.ready(
	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(_portletId, _node) {}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
		

	}
);
