
    /*=====================================
    Start of MINI SLIDER
    ======================================= */

    jQuery(document).ready(function ($) {

        // $('#checkbox').change(function(){
          // setInterval(function () {
          //     moveRight();
          //     // moveRightList();
          // }, 3000);
        
          // moveRightList();
          // setTimeout(function() {
          // setInterval(function () {
          //     moveRightList();
          // }, 3000);
        // }, 3000);
        
        $('#slider-list ul li:last-child').addClass('active');
        
        setInterval(function () {
        
          
          moveRight();
        
          // var i = 0;
        // $('#slider-list ul li').each(function(i) {
        //     var $li = $(this);
        //     setTimeout(function() {
        //       $('#slider-list ul li').removeClass('active');
        //       $li.addClass('active');
        //       console.log("i="+i);
        //     }, 3000); // delay 100 ms
        //   });
        
          var delay = 0;
          $('#slider-list ul li').each(function() {
            var $li = $(this);
            setTimeout(function() {
              $('#slider-list ul li').removeClass('active');
              $li.addClass('active');
              // console.log("i="+i);
              // console.log("delay="+delay);
            }, delay+=3000); // delay 100 ms
          });
        
        
          // $('#slider-list ul li').removeClass('active');
        
        }, 3000);
        
        
        
          // $('#slider-list ul li').each(function() {
          //   var $li = $(this);
          //   setInterval(function() {
          //     $('#slider-list ul li').removeClass('active');
          //     $li.addClass('active');
          //     // console.log("i="+i);
          //   }, 3000); // delay 100 ms
          // });
        
          
        // });
        // setInterval(function() {
        
        // moveRight();
        // myFunction();
        
        // },3000);
        
        
        // var i = 0;
        // function myFunction() {
          
        
        //     $('#scroll-set li').each(function(i) {
        //     var $li = $(this);
        //     setTimeout(function() {
        //            $('#slider-list ul li').removeClass('active');
        //       $li.addClass('active');
        //       console.log("i="+i);
        //     }, i*3000); // delay 100 ms
        
        
        //     // if(i % 2 == 0) {
        //     //   $li.addClass('active');
        //     // } 
        //     // else {
        //     //   $("#item").addClass("class-two");
        //     // }
        //     i++;
        
            
        //   });
        
          
        // }
        
        // // myFunction();
        
        
        
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
          $('#slider ul li:last-child').prependTo('#slider ul');
        
          function moveLeft() {
              $('#slider ul').animate({
                  left: + slideWidth
              }, 200, function () {
                  $('#slider ul li:last-child').prependTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
        
          function moveRight() {
              $('#slider ul').animate({
                  left: - slideWidth
              }, 200, function () {
                  $('#slider ul li:first-child').appendTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
        
          // $('a.control_prev').click(function () {
          //     moveLeft();
          // });
        
          // $('a.control_next').click(function () {
          //     moveRight();
          // });
        
          var slideListCount = $('#slider-list ul li').length;
        var slideListWidth = $('#slider-list ul li').width();
        var slideListHeight = $('#slider-list ul li').height();
        var sliderListUlWidth = slideListCount * slideListWidth;
        
        // $('#slider-list').css({ width: slideListWidth, height: slideListHeight });
        
        // $('#slider-list ul').css({ width: sliderListUlWidth, marginLeft: - slideListWidth });
        
          // $('#slider-list ul li:first').first().addClass( "active" );
        
        
          $('#slider-list ul li:last-child').prependTo('#slider-list ul');
        
          function moveLeftList() {
              $('#slider-list ul').animate({
                  left: + slideListWidth
              }, 200, function () {
                  $('#slider-list ul li:last-child').prependTo('#slider-list ul');
                  $('#slider-list ul').css('left', '');
              });
          };
        
          function moveRightList() {
              $('#slider-list ul').animate({
                  left: - slideListWidth
              }, 200, function () {
        
                $('#slider-list ul li').removeClass('active');
        
                  $('#slider-list ul li:first-child').appendTo('#slider-list ul');
                  $('#slider-list ul').css('left', '');
        
                  $('#slider-list ul li:first-child').addClass('active');
                  // $(this).addClass('active');
        
        
        //   $('.ui-slider-handle').each(function(){
        //    $(this).addClass('sliderNumber_'+$(this).index());     
        // });
        
              });
          };
        
        // var ind = 0;
        
        //   function moveRightList() {
        // //       $('#slider-list ul').each({
        // //           left: 0//- slideListWidth
        // //       }, 200, function () {
        
        //         // $('#slider-list ul li').removeClass('active');
        
        // //           // $('#slider-list ul li:first-child').appendTo('#slider-list ul');
        // //           $('#slider-list ul').css('left', '');
        
        // //           // $('#slider-list ul li:first-child').addClass('active');
        // //           // $(this).addClass('active');
        
        // //           ind = $('#slider-list ul li:last-child').attr('rel');
        // //           // ind = parseInt(ind+1);
        // //           console.log(ind)
        // //           $('#slider-list ul #value-'+ind).addClass('active');
        
        
        // // //   $('.ui-slider-handle').each(function(){
        // // //    $(this).addClass('sliderNumber_'+$(this).index());     
        // // // });
        
        // //       });
        
        // // $('#slider-list ul li').each(function(i, el) {
        // //   // console.log('i='+i);
        // //   // console.log('el='+el.index);
        // //   //  setTimeout(function() {
        // //     // $('#slider-list ul li').removeClass('active');
        // //     // $('#slider-list ul li:first-child').appendTo('#slider-list ul');
        // //     //   $(el).addClass('active');
        // //   //  }, i * 3000);
        // // });
        
        // $('#slider-list ul li').each(function(i) {
        //     var $li = $(this);
        //     setTimeout(function() {
        //       $('#slider-list ul li').removeClass('active');
        //       $li.addClass('active');
        //     }, i*3000); // delay 100 ms
        //   });
        
        
        //   };
        
        
        });    

    /*=====================================
    End of MINI SLIDER
    ======================================= */



    /*=====================================
    Start of DROPDOWN
    ======================================= */

    var wrapper_job_category_others = document.getElementById("wrapper_job_category_others");
    wrapper_job_category_others.style.display = "none";

    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
          
          //console.log("elmnt: "+elmnt.textContent);
          if(elmnt.textContent=='Others') {
            wrapper_job_category_others.style.display = "block";
          } else {
            wrapper_job_category_others.style.display = "none";
          }

        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
        
    /*=====================================
    End of DROPDOWN
    ======================================= */

    /*=====================================
    Start of COUNTRY
    ======================================= */
    var input = document.querySelector("#mobile_number");
    window.intlTelInput(input, {
        // show dial codes too
        separateDialCode: true,
        // If there are some countries you want to show on the top.
        // here we are promoting russia and singapore.
        preferredCountries: ["sa", "ae", "qa", "bh", "kw", "om"],
        //Default country
        initialCountry:"sa",
        // show only these countres, remove all other
        onlyCountries: [],
        // If there are some countries you want to execlde.
        // here we are exluding india and israel.
        excludeCountries: []
    });
    /*=====================================
    End of COUNTRY
    ======================================= */

    /*=====================================
    Start of FORM
    ======================================= */
      
    /*=====================================
    End of FORM
    ======================================= */