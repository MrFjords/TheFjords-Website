/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fjords-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-music': '&#xe600;',
		'icon-envelope': '&#xe601;',
		'icon-download-alt': '&#xe602;',
		'icon-play-circle': '&#xe603;',
		'icon-reorder': '&#xe604;',
		'icon-twitter-sign': '&#xe605;',
		'icon-facebook-sign': '&#xe606;',
		'icon-twitter': '&#xe607;',
		'icon-rss': '&#xe608;',
		'icon-google-plus-sign': '&#xe609;',
		'icon-google-plus': '&#xe60a;',
		'icon-instagram': '&#xe60b;',
		'icon-flickr': '&#xe60c;',
		'icon-calendar-empty': '&#xe60d;',
		'icon-envelope-alt': '&#xe60e;',
		'icon-apple': '&#xe60f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
