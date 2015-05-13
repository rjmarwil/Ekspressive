//= require bootstrap-sprockets

$(document).ready(function() {
  $.extend({
    playSound: function(){
      return $("<embed src='"+arguments[0]+".mp3' hidden='true' autostart='true' loop='false' class='playSound'>" + "<audio autoplay='autoplay' style='display:none;' controls='controls'><source src='"+arguments[0]+".mp3' /><source src='"+arguments[0]+".ogg' /></audio>").appendTo('body');
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 81) { // Q
      $.playSound('/sounds/bubble-first');
    } else if (e.keyCode == 87) { // W
      $.playSound('/sounds/bubble-second');
    } else if (e.keyCode == 69) { // E
      $.playSound('/sounds/bubble-third');
    } else if (e.keyCode == 82) { // R
      $.playSound('/sounds/bubble-fourth');
    } else if (e.keyCode == 84) { // T
      $.playSound('/sounds/bell-low');
    } else if (e.keyCode == 89) { // Y
      $.playSound('/sounds/bell-high');
    } else if (e.keyCode == 85) { // U
      $.playSound('/sounds/chill');
    } else if (e.keyCode == 73) { // I
      $.playSound('/sounds/bass-1');
    } else if (e.keyCode == 79) { // O
      $.playSound('/sounds/chord_sequence-low');
    } else if (e.keyCode == 80) { // P
      $.playSound('/sounds/chord_sequence-high');
    } else if (e.keyCode == 65) { // A
      $.playSound('/sounds/clap');
    } else if (e.keyCode == 83) { // S
      $.playSound('/sounds/clock');
    } else if (e.keyCode == 68) { // D
      $.playSound('/sounds/coin-low');
    } else if (e.keyCode == 70) { // F
      $.playSound('/sounds/coin-mid');
    } else if (e.keyCode == 71) { // G
      $.playSound('/sounds/coin-high');
    } else if (e.keyCode == 72) { // H
      $.playSound('/sounds/crickets');
    } else if (e.keyCode == 74) { // J
      $.playSound('/sounds/cymbal-1');
    } else if (e.keyCode == 75) { // K
      $.playSound('/sounds/gunshot-1');
    } else if (e.keyCode == 76) { // L
      $.playSound('/sounds/gunshot-2');
    } else if (e.keyCode == 90) { // Z
      $.playSound('/sounds/harmonics-1');
    } else if (e.keyCode == 88) { // X
      $.playSound('/sounds/harmonics-2');
    } else if (e.keyCode == 67) { // C
      $.playSound('/sounds/harmonics-3');
    } else if (e.keyCode == 86) { // V
      $.playSound('/sounds/harmonics-4');
    } else if (e.keyCode == 66) { // B
      $.playSound('/sounds/herbie-low');
    } else if (e.keyCode == 78) { // N
      $.playSound('/sounds/herbie-mid');
    } else if (e.keyCode == 77) { // M
      $.playSound('/sounds/herbie-high');
    }
  });

  // First keyboard mapping
  // QWERTYUIOP
  $('#Q1').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#W1').click(function() {
    $.playSound('/sounds/bubble-second');
  });
  $('#E1').click(function() {
    $.playSound('/sounds/bubble-third');
  });
  $('#R1').click(function() {
    $.playSound('/sounds/bubble-fourth');
  });
  $('#T1').click(function() {
    $.playSound('/sounds/bell-low');
  });
  $('#Y1').click(function() {
    $.playSound('/sounds/bell-high');
  });
  $('#U1').click(function() {
    $.playSound('/sounds/chill');
  });
  $('#I1').click(function() {
    $.playSound('/sounds/bass-1');
  });
  $('#O1').click(function() {
    $.playSound('/sounds/chord_sequence-low');
  });
  $('#P1').click(function() {
    $.playSound('/sounds/chord_sequence-high');
  });

  // ASDFGHJKL
  $('#A1').click(function() {
    $.playSound('/sounds/clap');
  });
  $('#S1').click(function() {
    $.playSound('/sounds/clock');
  });
  $('#D1').click(function() {
    $.playSound('/sounds/coin-low');
  });
  $('#F1').click(function() {
    $.playSound('/sounds/coin-mid');
  });
  $('#G1').click(function() {
    $.playSound('/sounds/coin-high');
  });
  $('#H1').click(function() {
    $.playSound('/sounds/crickets');
  });
  $('#J1').click(function() {
    $.playSound('/sounds/cymbal-1');
  });
  $('#K1').click(function() {
    $.playSound('/sounds/gunshot-1');
  });
  $('#L1').click(function() {
    $.playSound('/sounds/gunshot-2');
  });

  // ZXCVBNM
  $('#Z1').click(function() {
    $.playSound('/sounds/harmonics-1');
  });
  $('#X1').click(function() {
    $.playSound('/sounds/harmonics-2');
  });
  $('#C1').click(function() {
    $.playSound('/sounds/harmonics-3');
  });
  $('#V1').click(function() {
    $.playSound('/sounds/harmonics-4');
  });
  $('#B1').click(function() {
    $.playSound('/sounds/herbie-low');
  });
  $('#N1').click(function() {
    $.playSound('/sounds/herbie-mid');
  });
  $('#M1').click(function() {
    $.playSound('/sounds/herbie-high');
  });

  // Second keyboard mapping
  // QWERTYUIOP
  $('#Q2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#W2').click(function() {
    $.playSound('/sounds/bubble-second');
  });
  $('#E2').click(function() {
    $.playSound('/sounds/bubble-third');
  });
  $('#R2').click(function() {
    $.playSound('/sounds/bubble-fourth');
  });
  $('#T2').click(function() {
    $.playSound('/sounds/bell-low');
  });
  $('#Y2').click(function() {
    $.playSound('/sounds/bell-high');
  });
  $('#U2').click(function() {
    $.playSound('/sounds/chill');
  });
  $('#I2').click(function() {
    $.playSound('/sounds/bass-2');
  });
  $('#O2').click(function() {
    $.playSound('/sounds/chord_sequence-low');
  });
  $('#P2').click(function() {
    $.playSound('/sounds/chord_sequence-high');
  });

  // ASDFGHJKL
  $('#A2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#S2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#D2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#F2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#G2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#H2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#J2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#K2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#L2').click(function() {
    $.playSound('/sounds/bubble-first');
  });

  // ZXCVBNM
  $('#Z2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#X2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#C2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#V2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#B2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#N2').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#M2').click(function() {
    $.playSound('/sounds/bubble-first');
  });


  // Third keyboard mapping
  // QWERTYUIOP
  $('#Q3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#W3').click(function() {
    $.playSound('/sounds/bubble-second');
  });
  $('#E3').click(function() {
    $.playSound('/sounds/bubble-third');
  });
  $('#R3').click(function() {
    $.playSound('/sounds/bubble-fourth');
  });
  $('#T3').click(function() {
    $.playSound('/sounds/bell-low');
  });
  $('#Y3').click(function() {
    $.playSound('/sounds/bell-high');
  });
  $('#U3').click(function() {
    $.playSound('/sounds/chill');
  });
  $('#I3').click(function() {
    $.playSound('/sounds/bass-3');
  });
  $('#O3').click(function() {
    $.playSound('/sounds/chord_sequence-low');
  });
  $('#P3').click(function() {
    $.playSound('/sounds/chord_sequence-high');
  });

  // ASDFGHJKL
  $('#A3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#S3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#D3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#F3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#G3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#H3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#J3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#K3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#L3').click(function() {
    $.playSound('/sounds/bubble-first');
  });

  // ZXCVBNM
  $('#Z3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#X3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#C3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#V3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#B3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#N3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
  $('#M3').click(function() {
    $.playSound('/sounds/bubble-first');
  });
});
