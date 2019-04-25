
/*

         $(function() {
             $(".phone").mask("+7 (999) 999-9999");
         });

 */

/* nav */

        $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            if( scroll > $('#top').outerHeight() - 0 )
            {
                $('#navi-w').addClass('navi-f').removeClass('navi-w');
                $('#space').fadeIn(0);
            }
            else
            {
                $('#navi-w').removeClass('navi-f').addClass('navi-w');
                $('#space').fadeOut(0);
            }
        });

/* lemmonSlider */

        window.onload = function(){
            $('.slider').lemmonSlider({ 'infinite' : true });
            sliderAutoplay();
        };

        /* autoplay lemmonSlider */

        var sliderTimeout = null;
        function sliderAutoplay(){

            $('.slider').trigger( 'nextSlide' );
            sliderTimeout = setTimeout( 'sliderAutoplay()', 100000 );

        }

/* lightGallery */

        $(function() {
            $('.lightGallery').lightGallery({});
        });

/* */

        $(function() {
            $('.all-button').click(function(){
                $('.all-5').slideDown(300);
                $(this).slideUp(300);
            });
        });

/* */

        $(function() {
            $('.map-1').click(function(){
                $('#map1').fadeIn(300);
                $('#map2').fadeOut(0);
                $(this).parent().children().removeClass('active-map');
                $(this).addClass('active-map');
            });
        });

        $(function() {
            $('.map-2').click(function(){
                $('#map2').fadeIn(300);
                $('#map1').fadeOut(0);
                $(this).parent().children().removeClass('active-map');
                $(this).addClass('active-map');
            });
        });

/* */

        $(function() {$('.pod5-1').click(function(){$('#pop1').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-2').click(function(){$('#pop2').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-3').click(function(){$('#pop3').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-4').click(function(){$('#pop4').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-5').click(function(){$('#pop5').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-6').click(function(){$('#pop6').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-7').click(function(){$('#pop7').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-8').click(function(){$('#pop8').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-9').click(function(){$('#pop9').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-10').click(function(){$('#pop10').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-11').click(function(){$('#pop11').fadeIn(300);$('.wrapper').fadeIn(300);});});
        $(function() {$('.pod5-12').click(function(){$('#pop12').fadeIn(300);$('.wrapper').fadeIn(300);});});

        $(function() {
            $('.pod5, .box-5-img').click(function () {
                $("html, body").stop().animate({
                    scrollTop: $($('#box-5-w')).offset().top - 0
                }, {
                    duration: 700
                });
                return false;
            });
        });

/* pop-up */

        $(function() {
            $('.top-button').click(function(){
                $('#zb1').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.button-1').click(function(){
                $('#zb2').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.button-5').click(function(){
                $('#zb3').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.button-7').click(function(){
                $('#zb4').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.button-9').click(function(){
                $('#zb5').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.wrapper, .closee').click(function(){
                $('.thnx, .wrapper, .z-box, .z-box2').fadeOut(300);
                $('body').css('overflow','auto');
            });
        });

/* form */

        $(function() {
            $('#form').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form1').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form2').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form3').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form4').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form5').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form6').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form7').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form8').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form9').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form10').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form01').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form02').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form03').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form04').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form05').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form06').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form07').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form08').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form09').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form010').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form011').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

        $(function() {
            $('#form012').validate(
                {
                    rules:{
                        "numb":{
                            required:true
                        }
                    },
                    messages:{
                        "numb":{
                            required:""
                        }
                    }
                })
        });

/* thnx */

        $(function() {
            $('#form, #form1, #form2, #form3, #form4, #form5, #form6, #form7, #form8, #form9, #form10, #form01, #form02, #form03, #form04, #form05, #form06, #form07, #form08, #form09, #form010, #form011, #form012').ajaxForm(function() {
                $('.wrapper, .thnx').fadeIn(300);
                $('.z-box').fadeOut(300);
                $('body').css('overflow','auto');
                $('#form')[0].reset();
                $('#form1')[0].reset();
                $('#form2')[0].reset();
                $('#form3')[0].reset();
                $('#form4')[0].reset();
                $('#form5')[0].reset();
                $('#form6')[0].reset();
                $('#form7')[0].reset();
                $('#form8')[0].reset();
                $('#form9')[0].reset();
                $('#form10')[0].reset();
                $('#form01')[0].reset();
                $('#form02')[0].reset();
                $('#form03')[0].reset();
                $('#form04')[0].reset();
                $('#form05')[0].reset();
                $('#form06')[0].reset();
                $('#form07')[0].reset();
                $('#form08')[0].reset();
                $('#form09')[0].reset();
                $('#form010')[0].reset();
                $('#form011')[0].reset();
                $('#form012')[0].reset();
            });
        });

/* end */