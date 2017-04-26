// main.js
 function isEmpty( el ){
    console.log(el);
      return !$.trim($(el).html())
}

! function(e) {
    "use strict";
    var t = function(t) {
            e(t + ", #newsletter").hasClass("open") || "" == t || (e("body").addClass("open"), e("#nav-menu ul a, .section").removeClass("open"), setTimeout(function() {
                e("main").prepend(e(t))
            }, 400), e(".section").getNiceScroll().resize().hide(), e('div[id^="ascrail"]').remove(), setTimeout(function() {
                e(t + ", #nav-menu a[href=" + t + "]").addClass("open"), e(t).scrollTop(1), e(t).niceScroll(),
                // e(t).scroll(function() {
                //     console.log("mainet:"+window.wasScrolled); 
                // }), 
                $('#resume').scroll(function() {
                    // console.log("main:"+window.wasScrolled);
                    // console.log("main:"+window.hasSkillset && isEmpty(document.getElementById('skillset')) && window.wasScrolled == 0);
                    if (window.hasSkillset && window.wasScrolled == 1) {
                        var parent = $("#skillset").parent();
                        $("#skillset").empty();
                        parent.append('<div id="skillset"></div>');
                        // console.log(window.wasScrolled);
                        window.wasScrolled = 0;
                        window.hasSkillset = false;
                    }

                    if ( !window.hasSkillset && isEmpty($('#skillset')) && window.wasScrolled == 0) {
                        $(document).ready(function() {
                            $("#skillset").skillset({
                                object:object, duration:80 
                            }); window.wasScrolled = 2;
                            $('#skillset').append('<br/><br/>');
                        });
                    }
                })
            }, 600), e("#master-header").removeClass("open-nav"), r())
        },
        a = e("#nav-menu ul"),
        o = "Navigation",
        n = function() {
            e('<div class="nav-dropdown-container"><select id="nav-dropdown" /></div>').appendTo("#nav-menu"), e("<option />", {
                selected: "selected",
                value: "",
                text: o
            }).appendTo("#nav-dropdown"), a.find("a").each(function() {
                var t = e(this);
                e("<option />", {
                    value: t.attr("href"),
                    text: t.text()
                }).appendTo("#nav-dropdown")
            })
        },
        s = function() {
            var t = e(".nav-dropdown-container"),
                o = e("footer").offset().top,
                n = a.offset().top + a.outerHeight();
            n >= o && e("#master-header").not(".open-nav").outerWidth() > 40 ? (t.show(), a.hide()) : (t.hide(), a.show()), 40 == e("#master-header").outerWidth() && e("#master-header .info").css("bottom", e("#master-header h1").outerWidth() + 40)
        },
        i = function(e) {
            var t = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
                a = t.test(e);
            return a ? !0 : !1
        },
        l = e(".portfolio-list"),
        r = function() {
            e.fn.isotope && (e(".item-portfolio > a").removeClass("selected"), e(".extra-portfolio").hide().removeClass("show"), l.isotope("layout"))
        },
        d = function(t) {
            e(window).on("load resize", function() {
                e(t).each(function() {
                    var t = e(this).outerHeight();
                    e(this).css("margin-top", -(t / 2) + "px")
                })
            })
        };
    NProgress.configure({
        showSpinner: !1
    }), NProgress.start(), NProgress.set(.4), n(), s(), e(".wrapper").append('<div id="overlay"/>'), e(".section").wrapInner('<div class="inner-section"/>'), a.find("a").click(function(a) {
        a.preventDefault(), t(e(this).attr("href"))
    }), e("#nav-dropdown").change(function() {
        t(e(this).val())
    }), e("a.close-section").click(function(t) {
        t.preventDefault(), e("body, #nav-menu ul a").removeClass("open"), setTimeout(function() {
            e(".section").removeClass("open")
        }, 1200), r()
    }), e(".link-bars").click(function(t) {
        t.preventDefault(), e("#newsletter").hasClass("open") || e("#master-header").toggleClass("open-nav")
    }), e("a.modal").magnificPopup({
        type: "image",
        callbacks: {
            afterClose: function() {
                e("html").css("overflow", "hidden")
            }
        }
    }), e(".thumbnails").each(function() {
        e(this).find("a.modal").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            },
            callbacks: {
                afterClose: function() {
                    e("html").css("overflow", "hidden")
                }
            }
        })
    }), e("a.iframe-modal").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 200,
        preloader: !1,
        fixedContentPos: !1,
        callbacks: {
            afterClose: function() {
                e("html").css("overflow", "hidden")
            }
        }
    }), e(".open-toggle .content-toggle").show(), e(".title-toggle").click(function(t) {
        t.preventDefault();
        var a = e(this),
            o = a.parent(),
            n = a.next(),
            s = a.parents(".accordion");
        s.length > 0 ? (s.find(".content-toggle").slideUp("normal", function() {
            e(this).parent().removeClass("open-toggle")
        }), a.next().is(":hidden") && n.slideDown("normal", function() {
            o.addClass("open-toggle")
        })) : n.slideToggle("normal", function() {
            o.toggleClass("open-toggle")
        })
    }), e(".title-tab:first-child").addClass("selected-tab"), e(".title-tab").click(function(t) {
        t.preventDefault();
        var a = e(this).parents(".tabs"),
            o = e(this).find("a").attr("href");
        return e(this).hasClass("selected-tab") || (a.find(".tab").hide().removeClass("opentab"), a.find(".title-tab").removeClass("selected-tab"), e(this).addClass("selected-tab"), e(o).fadeIn().addClass("opentab")), !1
    }), e(".btn[data-btn-colors]").each(function() {
        var t = e(this).data("btn-colors"),
            a = t.split("-");
        e(this).css({
            "background-color": a[0],
            "border-bottom-color": a[1]
        }), e(this).hover(function() {
            e(this).css({
                "background-color": a[1],
                "border-bottom-color": a[0]
            })
        }, function() {
            e(this).css({
                "background-color": a[0],
                "border-bottom-color": a[1]
            })
        })
    }), e(window).load(function() {
        e(".bar").each(function() {
            var t = e(this).data("percentage"),
                a = e(this).data("bar-color");
            e(this).css({
                width: t + "%",
                background: a
            }), e(this).prev().append('<span style="background:' + a + '">' + t + " %</span>")
        })
    }), d(".side-cta .btn-cta"), e(".call-to-action[data-bg]").each(function() {
        var t = e(this).data("bg");
        e(this).addClass("bg").backstretch(t)
    }), e(".table").each(function() {
        var t = e(this).find(".col-table").length;
        e(this).addClass("ncls-" + t)
    }), e("table").each(function() {
        e(this).find("th").each(function(t) {
            e("td:nth-of-type(" + (t + 1) + ")").prepend('<strong class="fake-th">' + e(this).text() + "</strong>")
        })
    }), "undefined" != typeof GMaps && e(".gmap").each(function(t) {
        {
            var a = e(this).attr("id", "gmap-" + t),
                o = a.data("lat"),
                n = a.data("lng");
            new GMaps({
                div: "#gmap-" + t,
                mapType: a.data("maptype"),
                scrollwheel: !1,
                lat: o,
                lng: n,
                height: parseInt(a.width() * (9 / 16)) + "px"
            }).addMarker({
                lat: o,
                lng: n
            })
        }
    }), e.fn.isotope && (d(".info-item-portfolio"), l.imagesLoaded(function() {
        l.isotope({
            itemSelector: ".item-portfolio",
            masonry: {
                columnWidth: ".portfolio-list > li"
            }
        })
    }), e("#filters").on("click", "a", function(t) {
        t.preventDefault();
        var a = e(this).attr("data-filter");
        l.isotope({
            filter: a
        })
    }), e("li.item-portfolio > a").click(function(t) {
        t.preventDefault();
        var a = e(this).next(".extra-portfolio");
        a.length > 0 ? e(this).hasClass("selected") ? (e(this).removeClass("selected"), a.hide().hide().removeClass("show")) : (e(".item-portfolio > a").removeClass("selected"), e(".extra-portfolio").hide().removeClass("show"), e(this).addClass("selected"), a.show(), setTimeout(function() {
            a.addClass("show")
        }, 400)) : (e(".item-portfolio > a").removeClass("selected"), e(".extra-portfolio").hide().removeClass("show")), l.isotope("layout"), e(".section").getNiceScroll().resize()
    }));
    e(window).load(function() {
        NProgress.done(), setTimeout(function() {
            e("#start").trigger("click");
            s();
            e("body").removeClass("loading"), e(".loader").fadeOut(400, function() {
                e(this).remove()
            })
        }, 400)
    }), e(window).resize(function() {
        s(), l.isotope("layout")
    })
}(jQuery);