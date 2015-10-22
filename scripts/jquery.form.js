; (function ($) {
	$.fn.extend({
		form: function () {
			var search = window.location.search;
			if(search.substr(0,1) == '?'){
				$(this).find('input,select').each(function(){
					var name = $(this).attr('name');
					if(name){
						var value = ('&' + search.substr(1)).match(new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'));
						if (value != null) { value = decodeURIComponent(value[2]); }
						if ($(this).attr('type') == 'radio' || $(this).attr('type') == 'checkbox') {
							$(this).prop('checked', function () { return $(this).val() == value; });
						} else {
							if (value != null) {$(this).val(value);}
						}
					}
				});
			}
			return $(this);
		}
	});
})(window.jQuery);
