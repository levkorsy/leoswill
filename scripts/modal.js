$(document).ready(function() {
      // MODAL
      var modalText = {
        cherry: {
          title: 'Cherry Smoked Old Fashioned',
          tag: 'Vacation platform',
          detail:
            'Dig into our down-to-Earth budget cherry guides from around the world, filled with itinerary ideas, cherry tips, and recommendations for places to go.',
          link: ''
        },
        oldfashioned: {
          title: 'Old fashioned',
          tag: 'Classic Smoked Old Fashioned',
          detail: `
              Ingredients:
              60 ml bourbon \n
              1 sugar cube
              2-3 dashes of Angostura bitters
              Orange peel
              Wood chips for smoking
              
              Instructions:

Place the sugar cube in a glass and add bitters.
Muddle the sugar to dissolve it.
Add ice and bourbon to the glass.
Place the orange peel on the edge of the glass.
Use a smoker to infuse the drink with smoke from the wood chips.
Gently stir and serve.
          `,
          link: ''
        },
        mdx: {
          title: 'E-commerce',
          tag: 'Online shop',
          detail:
            'Online ordering system and medical equipment ordering app, helping peolpe to choose suitable equipment.',
          link: ''
        },
        roambi: {
          title: 'Roambi.com',
          tag: 'BUSINESS ANALYTICS.',
          detail:
            'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
          link: 'http://www.roambi.com'
        },
        walker: {
          title: 'WalkerTracker',
          tag: 'PERFORMANCE METRICS.',
          detail:
            'Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.'
        },
        powur: {
          title: 'Powur.com',
          tag: 'CONSUMER POWERED MARKETING.',
          detail:
            'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
          link: 'http://www.powur.com/with/42'
        },
        mystand: {
          title: 'MyStand',
          tag: 'CROWD-FUNDED CHARITY.',
          detail:
            'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.'
        },
        never: {
          title: 'NeverSurrender',
          tag: 'ALS AWARENESS.',
          detail:
            'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
        },
        themall: {
          title: 'The Mall',
          tag: 'PEER GUIDED SHOPPING.',
          detail:
            'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
        }
      };
    
      $('#gallery .button').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
      });
    
      $('.close').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
      });
    
      $('.mask').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
      });
    
      var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;
    
      setDimensions();
    
      $('#next').click(function() {
        shiftSlide(-1);
      });
      $('#prev').click(function() {
        shiftSlide(1);
      });
    
      carousel.on('mousedown', function() {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function() {
          dragEnd = event.pageX;
          $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function() {
          if (dragPos() > threshold) {
            return shiftSlide(1);
          }
          if (dragPos() < -threshold) {
            return shiftSlide(-1);
          }
          shiftSlide(0);
        });
      });
    
      function setDimensions() {
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
      }
    
      function dragPos() {
        return dragEnd - dragStart;
      }
    
      function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
          .off('mousemove')
          .addClass('transition')
          .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function() {
          if (direction === 1) {
            $('.slide:first').before($('.slide:last'));
          } else if (direction === -1) {
            $('.slide:last').after($('.slide:first'));
          }
          carousel.removeClass('transition');
          carousel.css('transform', 'translateX(0px)');
        }, 700);
      }
    
      function fillModal(id) {
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        if (modalText[id].link)
          $('#modal .button')
            .addClass('visible')
            .parent()
            .attr('href', modalText[id].link);
    
        $.each($('#modal li'), function(index, value) {
          $(this).text(modalText[id].bullets[index]);
        });
        $.each($('#modal .slide'), function(index, value) {
          $(this).css({
            background:
              "url('images/slides/" + id + '-' + index + ".jpg') center center/cover",
            backgroundSize: 'cover'
          });
        });
      }
    });