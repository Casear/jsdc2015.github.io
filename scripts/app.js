$(document).ready(function(){var s=2500,e=3800,a=e-3e3,n=50,t=150,d=500,l=d+800,r=600,o=1500,c=function(s){s.each(function(){var s=$(this),e=s.text().split(""),a=s.hasClass("is-visible");for(i in e)s.parents(".rotate-2").length>0&&(e[i]="<em>"+e[i]+"</em>"),e[i]=a?'<i class="in">'+e[i]+"</i>":"<i>"+e[i]+"</i>";var n=e.join("");s.html(n).css("opacity",1)})},h=function(i){var n=s;i.each(function(){var s=$(this);if(s.hasClass("loading-bar"))n=e,setTimeout(function(){s.find(".cd-words-wrapper").addClass("is-loading")},a);else if(s.hasClass("clip")){var i=s.find(".cd-words-wrapper"),t=i.width()+10;i.css("width",t)}else if(!s.hasClass("type")){var d=s.find(".cd-words-wrapper b"),l=0;d.each(function(){var s=$(this).width();s>l&&(l=s)}),s.find(".cd-words-wrapper").css("width",l)}setTimeout(function(){u(s.find(".is-visible").eq(0))},n)})},u=function(i){var o=m(i);if(i.parents(".cd-headline").hasClass("type")){var c=i.parent(".cd-words-wrapper");c.addClass("selected").removeClass("waiting"),setTimeout(function(){c.removeClass("selected"),i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},d),setTimeout(function(){p(o,t)},l)}else if(i.parents(".cd-headline").hasClass("letters")){var h=i.children("i").length>=o.children("i").length?!0:!1;f(i.find("i").eq(0),i,h,n),C(o.find("i").eq(0),o,h,n)}else i.parents(".cd-headline").hasClass("clip")?i.parents(".cd-words-wrapper").animate({width:"2px"},r,function(){w(i,o),p(o)}):i.parents(".cd-headline").hasClass("loading-bar")?(i.parents(".cd-words-wrapper").removeClass("is-loading"),w(i,o),setTimeout(function(){u(o)},e),setTimeout(function(){i.parents(".cd-words-wrapper").addClass("is-loading")},a)):(w(i,o),setTimeout(function(){u(o)},s))},p=function(s,i){s.parents(".cd-headline").hasClass("type")?(C(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},r,function(){setTimeout(function(){u(s)},o)})},f=function(i,e,a,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){u(m(e))},s):setTimeout(function(){f(i.next(),e,a,n)},n),i.is(":last-child")&&$("html").hasClass("no-csstransitions")){var t=m(e);w(e,t)}},C=function(i,e,a,n){i.addClass("in").removeClass("out"),i.is(":last-child")?(e.parents(".cd-headline").hasClass("type")&&setTimeout(function(){e.parents(".cd-words-wrapper").addClass("waiting")},200),a||setTimeout(function(){u(e)},s)):setTimeout(function(){C(i.next(),e,a,n)},n)},m=function(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()},w=function(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")},v=function(){c($(".cd-headline.letters").find("b")),h($(".cd-headline"))};v()});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhbmltYXRpb25EZWxheSIsImJhckFuaW1hdGlvbkRlbGF5IiwiYmFyV2FpdGluZyIsImxldHRlcnNEZWxheSIsInR5cGVMZXR0ZXJzRGVsYXkiLCJzZWxlY3Rpb25EdXJhdGlvbiIsInR5cGVBbmltYXRpb25EZWxheSIsInJldmVhbER1cmF0aW9uIiwicmV2ZWFsQW5pbWF0aW9uRGVsYXkiLCJzaW5nbGVMZXR0ZXJzIiwiJHdvcmRzIiwiZWFjaCIsIndvcmQiLCJ0aGlzIiwibGV0dGVycyIsInRleHQiLCJzcGxpdCIsInNlbGVjdGVkIiwiaGFzQ2xhc3MiLCJpIiwicGFyZW50cyIsImxlbmd0aCIsIm5ld0xldHRlcnMiLCJqb2luIiwiaHRtbCIsImNzcyIsImFuaW1hdGVIZWFkbGluZSIsIiRoZWFkbGluZXMiLCJkdXJhdGlvbiIsImhlYWRsaW5lIiwic2V0VGltZW91dCIsImZpbmQiLCJhZGRDbGFzcyIsInNwYW5XcmFwcGVyIiwibmV3V2lkdGgiLCJ3aWR0aCIsIndvcmRzIiwid29yZFdpZHRoIiwiaGlkZVdvcmQiLCJlcSIsIiR3b3JkIiwibmV4dFdvcmQiLCJ0YWtlTmV4dCIsInBhcmVudFNwYW4iLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkcmVuIiwic2hvd1dvcmQiLCJib29sIiwiaGlkZUxldHRlciIsInNob3dMZXR0ZXIiLCJhbmltYXRlIiwic3dpdGNoV29yZCIsIiRkdXJhdGlvbiIsIiRsZXR0ZXIiLCIkYm9vbCIsImlzIiwibmV4dCIsIiRvbGRXb3JkIiwiJG5ld1dvcmQiLCJpbml0SGVhZGxpbmUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBRUEsR0FBQUMsR0FBQSxLQUVBQyxFQUFBLEtBQ0FDLEVBQUFELEVBQUEsSUFFQUUsRUFBQSxHQUVBQyxFQUFBLElBQ0FDLEVBQUEsSUFDQUMsRUFBQUQsRUFBQSxJQUVBRSxFQUFBLElB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ZWFkeShmdW5jdGlvbigpIHtcbiAgLy9zZXQgYW5pbWF0aW9uIHRpbWluZ1xuICB2YXIgYW5pbWF0aW9uRGVsYXkgPSAyNTAwLFxuICAgIC8vbG9hZGluZyBiYXIgZWZmZWN0XG4gICAgYmFyQW5pbWF0aW9uRGVsYXkgPSAzODAwLFxuICAgIGJhcldhaXRpbmcgPSBiYXJBbmltYXRpb25EZWxheSAtIDMwMDAsIC8vMzAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gb24gdGhlIGxvYWRpbmcgYmFyIC0gc2V0IGluIHRoZSBzY3NzL2NzcyBmaWxlXG4gICAgLy9sZXR0ZXJzIGVmZmVjdFxuICAgIGxldHRlcnNEZWxheSA9IDUwLFxuICAgIC8vdHlwZSBlZmZlY3RcbiAgICB0eXBlTGV0dGVyc0RlbGF5ID0gMTUwLFxuICAgIHNlbGVjdGlvbkR1cmF0aW9uID0gNTAwLFxuICAgIHR5cGVBbmltYXRpb25EZWxheSA9IHNlbGVjdGlvbkR1cmF0aW9uICsgODAwLFxuICAgIC8vY2xpcCBlZmZlY3QgXG4gICAgcmV2ZWFsRHVyYXRpb24gPSA2MDAsXG4gICAgcmV2ZWFsQW5pbWF0aW9uRGVsYXkgPSAxNTAwO1xuXG4gIHZhciBzaW5nbGVMZXR0ZXJzID0gZnVuY3Rpb24oJHdvcmRzKSB7XG4gICAgJHdvcmRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd29yZCA9ICQodGhpcyksXG4gICAgICAgIGxldHRlcnMgPSB3b3JkLnRleHQoKS5zcGxpdCgnJyksXG4gICAgICAgIHNlbGVjdGVkID0gd29yZC5oYXNDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgZm9yIChpIGluIGxldHRlcnMpIHtcbiAgICAgICAgaWYgKHdvcmQucGFyZW50cygnLnJvdGF0ZS0yJykubGVuZ3RoID4gMCkgbGV0dGVyc1tpXSA9ICc8ZW0+JyArIGxldHRlcnNbaV0gKyAnPC9lbT4nO1xuICAgICAgICBsZXR0ZXJzW2ldID0gKHNlbGVjdGVkKSA/ICc8aSBjbGFzcz1cImluXCI+JyArIGxldHRlcnNbaV0gKyAnPC9pPicgOiAnPGk+JyArIGxldHRlcnNbaV0gKyAnPC9pPic7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TGV0dGVycyA9IGxldHRlcnMuam9pbignJyk7XG4gICAgICB3b3JkLmh0bWwobmV3TGV0dGVycykuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFuaW1hdGVIZWFkbGluZSA9IGZ1bmN0aW9uKCRoZWFkbGluZXMpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBhbmltYXRpb25EZWxheTtcbiAgICAkaGVhZGxpbmVzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGVhZGxpbmUgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoaGVhZGxpbmUuaGFzQ2xhc3MoJ2xvYWRpbmctYmFyJykpIHtcbiAgICAgICAgZHVyYXRpb24gPSBiYXJBbmltYXRpb25EZWxheTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoZWFkbGluZS5maW5kKCcuY2Qtd29yZHMtd3JhcHBlcicpLmFkZENsYXNzKCdpcy1sb2FkaW5nJylcbiAgICAgICAgfSwgYmFyV2FpdGluZyk7XG4gICAgICB9IGVsc2UgaWYgKGhlYWRsaW5lLmhhc0NsYXNzKCdjbGlwJykpIHtcbiAgICAgICAgdmFyIHNwYW5XcmFwcGVyID0gaGVhZGxpbmUuZmluZCgnLmNkLXdvcmRzLXdyYXBwZXInKSxcbiAgICAgICAgICBuZXdXaWR0aCA9IHNwYW5XcmFwcGVyLndpZHRoKCkgKyAxMFxuICAgICAgICBzcGFuV3JhcHBlci5jc3MoJ3dpZHRoJywgbmV3V2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICghaGVhZGxpbmUuaGFzQ2xhc3MoJ3R5cGUnKSkge1xuICAgICAgICAvL2Fzc2lnbiB0byAuY2Qtd29yZHMtd3JhcHBlciB0aGUgd2lkdGggb2YgaXRzIGxvbmdlc3Qgd29yZFxuICAgICAgICB2YXIgd29yZHMgPSBoZWFkbGluZS5maW5kKCcuY2Qtd29yZHMtd3JhcHBlciBiJyksXG4gICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICB3b3Jkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3b3JkV2lkdGggPSAkKHRoaXMpLndpZHRoKCk7XG4gICAgICAgICAgaWYgKHdvcmRXaWR0aCA+IHdpZHRoKSB3aWR0aCA9IHdvcmRXaWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGhlYWRsaW5lLmZpbmQoJy5jZC13b3Jkcy13cmFwcGVyJykuY3NzKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vdHJpZ2dlciBhbmltYXRpb25cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGhpZGVXb3JkKGhlYWRsaW5lLmZpbmQoJy5pcy12aXNpYmxlJykuZXEoMCkpXG4gICAgICB9LCBkdXJhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGhpZGVXb3JkID0gZnVuY3Rpb24oJHdvcmQpIHtcbiAgICB2YXIgbmV4dFdvcmQgPSB0YWtlTmV4dCgkd29yZCk7XG5cbiAgICBpZiAoJHdvcmQucGFyZW50cygnLmNkLWhlYWRsaW5lJykuaGFzQ2xhc3MoJ3R5cGUnKSkge1xuICAgICAgdmFyIHBhcmVudFNwYW4gPSAkd29yZC5wYXJlbnQoJy5jZC13b3Jkcy13cmFwcGVyJyk7XG4gICAgICBwYXJlbnRTcGFuLmFkZENsYXNzKCdzZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCd3YWl0aW5nJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwYXJlbnRTcGFuLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAkd29yZC5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpLmFkZENsYXNzKCdpcy1oaWRkZW4nKS5jaGlsZHJlbignaScpLnJlbW92ZUNsYXNzKCdpbicpLmFkZENsYXNzKCdvdXQnKTtcbiAgICAgIH0sIHNlbGVjdGlvbkR1cmF0aW9uKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNob3dXb3JkKG5leHRXb3JkLCB0eXBlTGV0dGVyc0RlbGF5KVxuICAgICAgfSwgdHlwZUFuaW1hdGlvbkRlbGF5KTtcblxuICAgIH0gZWxzZSBpZiAoJHdvcmQucGFyZW50cygnLmNkLWhlYWRsaW5lJykuaGFzQ2xhc3MoJ2xldHRlcnMnKSkge1xuICAgICAgdmFyIGJvb2wgPSAoJHdvcmQuY2hpbGRyZW4oJ2knKS5sZW5ndGggPj0gbmV4dFdvcmQuY2hpbGRyZW4oJ2knKS5sZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgaGlkZUxldHRlcigkd29yZC5maW5kKCdpJykuZXEoMCksICR3b3JkLCBib29sLCBsZXR0ZXJzRGVsYXkpO1xuICAgICAgc2hvd0xldHRlcihuZXh0V29yZC5maW5kKCdpJykuZXEoMCksIG5leHRXb3JkLCBib29sLCBsZXR0ZXJzRGVsYXkpO1xuXG4gICAgfSBlbHNlIGlmICgkd29yZC5wYXJlbnRzKCcuY2QtaGVhZGxpbmUnKS5oYXNDbGFzcygnY2xpcCcpKSB7XG4gICAgICAkd29yZC5wYXJlbnRzKCcuY2Qtd29yZHMtd3JhcHBlcicpLmFuaW1hdGUoe1xuICAgICAgICB3aWR0aDogJzJweCdcbiAgICAgIH0sIHJldmVhbER1cmF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoV29yZCgkd29yZCwgbmV4dFdvcmQpO1xuICAgICAgICBzaG93V29yZChuZXh0V29yZCk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSBpZiAoJHdvcmQucGFyZW50cygnLmNkLWhlYWRsaW5lJykuaGFzQ2xhc3MoJ2xvYWRpbmctYmFyJykpIHtcbiAgICAgICR3b3JkLnBhcmVudHMoJy5jZC13b3Jkcy13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgIHN3aXRjaFdvcmQoJHdvcmQsIG5leHRXb3JkKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGhpZGVXb3JkKG5leHRXb3JkKVxuICAgICAgfSwgYmFyQW5pbWF0aW9uRGVsYXkpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHdvcmQucGFyZW50cygnLmNkLXdvcmRzLXdyYXBwZXInKS5hZGRDbGFzcygnaXMtbG9hZGluZycpXG4gICAgICB9LCBiYXJXYWl0aW5nKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2hXb3JkKCR3b3JkLCBuZXh0V29yZCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlV29yZChuZXh0V29yZClcbiAgICAgIH0sIGFuaW1hdGlvbkRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNob3dXb3JkID0gZnVuY3Rpb24oJHdvcmQsICRkdXJhdGlvbikge1xuICAgIGlmICgkd29yZC5wYXJlbnRzKCcuY2QtaGVhZGxpbmUnKS5oYXNDbGFzcygndHlwZScpKSB7XG4gICAgICBzaG93TGV0dGVyKCR3b3JkLmZpbmQoJ2knKS5lcSgwKSwgJHdvcmQsIGZhbHNlLCAkZHVyYXRpb24pO1xuICAgICAgJHdvcmQuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG5cbiAgICB9IGVsc2UgaWYgKCR3b3JkLnBhcmVudHMoJy5jZC1oZWFkbGluZScpLmhhc0NsYXNzKCdjbGlwJykpIHtcbiAgICAgICR3b3JkLnBhcmVudHMoJy5jZC13b3Jkcy13cmFwcGVyJykuYW5pbWF0ZSh7XG4gICAgICAgICd3aWR0aCc6ICR3b3JkLndpZHRoKCkgKyAxMFxuICAgICAgfSwgcmV2ZWFsRHVyYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGhpZGVXb3JkKCR3b3JkKVxuICAgICAgICB9LCByZXZlYWxBbmltYXRpb25EZWxheSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhpZGVMZXR0ZXIgPSBmdW5jdGlvbigkbGV0dGVyLCAkd29yZCwgJGJvb2wsICRkdXJhdGlvbikge1xuICAgICRsZXR0ZXIucmVtb3ZlQ2xhc3MoJ2luJykuYWRkQ2xhc3MoJ291dCcpO1xuXG4gICAgaWYgKCEkbGV0dGVyLmlzKCc6bGFzdC1jaGlsZCcpKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlTGV0dGVyKCRsZXR0ZXIubmV4dCgpLCAkd29yZCwgJGJvb2wsICRkdXJhdGlvbik7XG4gICAgICB9LCAkZHVyYXRpb24pO1xuICAgIH0gZWxzZSBpZiAoJGJvb2wpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGhpZGVXb3JkKHRha2VOZXh0KCR3b3JkKSlcbiAgICAgIH0sIGFuaW1hdGlvbkRlbGF5KTtcbiAgICB9XG5cbiAgICBpZiAoJGxldHRlci5pcygnOmxhc3QtY2hpbGQnKSAmJiAkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWNzc3RyYW5zaXRpb25zJykpIHtcbiAgICAgIHZhciBuZXh0V29yZCA9IHRha2VOZXh0KCR3b3JkKTtcbiAgICAgIHN3aXRjaFdvcmQoJHdvcmQsIG5leHRXb3JkKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNob3dMZXR0ZXIgPSBmdW5jdGlvbigkbGV0dGVyLCAkd29yZCwgJGJvb2wsICRkdXJhdGlvbikge1xuICAgICRsZXR0ZXIuYWRkQ2xhc3MoJ2luJykucmVtb3ZlQ2xhc3MoJ291dCcpO1xuXG4gICAgaWYgKCEkbGV0dGVyLmlzKCc6bGFzdC1jaGlsZCcpKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzaG93TGV0dGVyKCRsZXR0ZXIubmV4dCgpLCAkd29yZCwgJGJvb2wsICRkdXJhdGlvbik7XG4gICAgICB9LCAkZHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJHdvcmQucGFyZW50cygnLmNkLWhlYWRsaW5lJykuaGFzQ2xhc3MoJ3R5cGUnKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICR3b3JkLnBhcmVudHMoJy5jZC13b3Jkcy13cmFwcGVyJykuYWRkQ2xhc3MoJ3dhaXRpbmcnKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICAgIGlmICghJGJvb2wpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoaWRlV29yZCgkd29yZClcbiAgICAgICAgfSwgYW5pbWF0aW9uRGVsYXkpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciB0YWtlTmV4dCA9IGZ1bmN0aW9uKCR3b3JkKSB7XG4gICAgcmV0dXJuICghJHdvcmQuaXMoJzpsYXN0LWNoaWxkJykpID8gJHdvcmQubmV4dCgpIDogJHdvcmQucGFyZW50KCkuY2hpbGRyZW4oKS5lcSgwKTtcbiAgfTtcblxuICB2YXIgdGFrZVByZXYgPSBmdW5jdGlvbigkd29yZCkge1xuICAgIHJldHVybiAoISR3b3JkLmlzKCc6Zmlyc3QtY2hpbGQnKSkgPyAkd29yZC5wcmV2KCkgOiAkd29yZC5wYXJlbnQoKS5jaGlsZHJlbigpLmxhc3QoKTtcbiAgfTtcblxuICB2YXIgc3dpdGNoV29yZCA9IGZ1bmN0aW9uKCRvbGRXb3JkLCAkbmV3V29yZCkge1xuICAgICRvbGRXb3JkLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJykuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICRuZXdXb3JkLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9O1xuXG4gIHZhciBpbml0SGVhZGxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9pbnNlcnQgPGk+IGVsZW1lbnQgZm9yIGVhY2ggbGV0dGVyIG9mIGEgY2hhbmdpbmcgd29yZFxuICAgIHNpbmdsZUxldHRlcnMoJCgnLmNkLWhlYWRsaW5lLmxldHRlcnMnKS5maW5kKCdiJykpO1xuICAgIC8vaW5pdGlhbGlzZSBoZWFkbGluZSBhbmltYXRpb25cbiAgICBhbmltYXRlSGVhZGxpbmUoJCgnLmNkLWhlYWRsaW5lJykpO1xuICB9O1xuXG4gIGluaXRIZWFkbGluZSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zcmMvc2NyaXB0cyJ9