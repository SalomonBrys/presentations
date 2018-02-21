if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BeInLearnKotlin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BeInLearnKotlin'.");
}
if (typeof revealkt === 'undefined') {
  throw new Error("Error loading module 'BeInLearnKotlin'. Its dependency 'revealkt' was not found. Please, check whether 'revealkt' is loaded prior to 'BeInLearnKotlin'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'BeInLearnKotlin'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'BeInLearnKotlin'.");
}
var BeInLearnKotlin = function (_, Kotlin, $module$revealkt, $module$kotlinx_html_js) {
  'use strict';
  var fragment = $module$revealkt.com.github.salomonbrys.revealkt.fragment_mlg1sr$;
  var Unit = Kotlin.kotlin.Unit;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var br = $module$kotlinx_html_js.kotlinx.html.js.br_jn093m$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.js.h2_nirn70$;
  var slide = $module$revealkt.com.github.salomonbrys.revealkt.slide_65sdy3$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var img = $module$kotlinx_html_js.kotlinx.html.js.img_6lw7hj$;
  var a = $module$kotlinx_html_js.kotlinx.html.js.a_5i6vd$;
  var section = $module$kotlinx_html_js.kotlinx.html.js.section_ceckl$;
  var fadeUp = $module$revealkt.com.github.salomonbrys.revealkt.fadeUp_h0p60k$;
  var fadeIn = $module$revealkt.com.github.salomonbrys.revealkt.fadeIn_h0p60k$;
  var li = $module$kotlinx_html_js.kotlinx.html.js.li_525bpd$;
  var b = $module$kotlinx_html_js.kotlinx.html.js.b_x0nqqg$;
  var ul = $module$kotlinx_html_js.kotlinx.html.js.ul_693so7$;
  var lazyImg = $module$revealkt.com.github.salomonbrys.revealkt.lazyImg_66lhld$;
  var hl = $module$revealkt.com.github.salomonbrys.revealkt.hl_avhqks$;
  var animText = $module$revealkt.com.github.salomonbrys.revealkt.animText_cf4n1b$;
  var hlCode = $module$revealkt.com.github.salomonbrys.revealkt.hlCode_osm44v$;
  var cur = $module$revealkt.com.github.salomonbrys.revealkt.cur_avhqks$;
  var i = $module$kotlinx_html_js.kotlinx.html.js.i_5jry8x$;
  var small = $module$kotlinx_html_js.kotlinx.html.js.small_8pbyt9$;
  var fIn = $module$revealkt.com.github.salomonbrys.revealkt.fIn_avhqks$;
  var fOut = $module$revealkt.com.github.salomonbrys.revealkt.fOut_avhqks$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.js.h3_mksccz$;
  var p = $module$kotlinx_html_js.kotlinx.html.js.p_qwwequ$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var revealSlides = $module$revealkt.com.github.salomonbrys.revealkt.revealSlides_xt65r4$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var revealkt = $module$revealkt.com.github.salomonbrys.revealkt;
  function fadeInAppear($receiver, index) {
    if (index === void 0)
      index = -1;
    return fragment($receiver, 'fade-in-appear', index);
  }
  function fadeOutDisappear($receiver, index) {
    if (index === void 0)
      index = -1;
    return fragment($receiver, 'fade-out-disappear', index);
  }
  function replace$lambda(closure$to) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$to);
      return Unit;
    };
  }
  function replace$lambda_0(closure$from) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$from);
      return Unit;
    };
  }
  function replace($receiver, index, from, to) {
    span(fadeInAppear($receiver, index), void 0, replace$lambda(to));
    span(fadeOutDisappear($receiver, index), void 0, replace$lambda_0(from));
  }
  function stamp($receiver, index) {
    if (index === void 0)
      index = -1;
    return fragment($receiver, 'stamp', index);
  }
  function fInA($receiver, index, text) {
    return $receiver.fragment_e0hv0h$(index, 'fade-in-appear current-blue', text);
  }
  function fInB($receiver, index, text) {
    return $receiver.fragment_e0hv0h$(index, 'current-blue', text);
  }
  function fOutD($receiver, index, text) {
    return $receiver.fragment_e0hv0h$(index, 'fade-out-disappear', text);
  }
  function replace_0($receiver, index, from, to) {
    return fInA($receiver, index, to) + fOutD($receiver, index, from);
  }
  function curB($receiver, index, text) {
    return $receiver.fragment_e0hv0h$(index, 'current-visible current-blue', text);
  }
  function error($receiver, text) {
    return $receiver.span_cysewn$('error', text);
  }
  function warning($receiver, text) {
    return $receiver.span_cysewn$('warning', text);
  }
  function main$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Be In,');
      br(this$);
      $receiver.unaryPlus_pdl1vz$('Learn Kotlin!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_style($receiver, 'width: 20%; border-radius: 100%; box-shadow: 3px 3px 20px #555;');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('github.com/salomonbrys');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('@salomonbrys');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      img(this$, void 0, 'imgs/Avatar.jpg', void 0, main$lambda$lambda$lambda$lambda$lambda_0);
      br(this$);
      $receiver.unaryPlus_pdl1vz$('Salomon BRYS');
      br(this$);
      a(this$, 'https://github.com/salomonbrys', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_1);
      br(this$);
      a(this$, 'https://twitter.com/salomonbrys', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Goals of this talk');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinlang.org');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(': ');
      a(this$, 'https://kotlinlang.org', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('NOT a tutorial');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotlin koans');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(': ');
      a(this$, 'https://github.com/Kotlin/kotlin-koans', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_4(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('NOT a language course');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_style($receiver, 'color: red');
    $receiver.unaryPlus_pdl1vz$('Wow effect!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(': ');
      b(this$, 'flicker', main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_5(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Introduction');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_1(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_3(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_4(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_5(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda_1);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda_2(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Why Kotlin?');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_6);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_4(this$) {
    return function ($receiver) {
      lazyImg(this$, void 0, 'imgs/loc.png');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotlin is...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$(': Jetbrains');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Built BY Industry');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$(': no weird stuff');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Built FOR Industry');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Complete Java interop');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Very easy');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_8(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_2(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_3(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_4);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_5);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_5(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_7);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_8(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_3(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_4(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_5(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.unaryPlus_pdl1vz$('Types');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    return '\n' + '                                ' + hl($receiver, 1, 'fun') + ' <T: Any> connect(uriStr' + hl($receiver, 2, ': String') + ')' + hl($receiver, 2, ': Connection') + ' {' + '\n' + '                                    val uri' + fOutD($receiver, 4, hl($receiver, 2, ': URI')) + ' = ' + hl($receiver, 3, 'URI(uriStr)') + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_6));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_6(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_9);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_10);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nullability');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    return '\n' + '                                fun connect(uriStr: String' + hl($receiver, 1, '?') + fInA($receiver, 4, ' = null') + ' {' + '\n' + '                                    ' + fInB($receiver, 2, 'val uriStr = uriStr ' + hl($receiver, 3, '?:') + ' DEFAULT_URI') + '\n' + '                                    val uri = URI(uriStr)' + '\n' + '                                                  ' + cur($receiver, 1, error($receiver, '^^^^^^')) + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_7));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('part of the type');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_13(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Nullability is ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_8);
      $receiver.unaryPlus_pdl1vz$('!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    set_style($receiver, 'display: inline-block; transform: rotate(-15deg)');
    $receiver.unaryPlus_pdl1vz$('Million dollar mistake\nFIXED!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_14(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; color: red; left: 0px; top: 26%; font-size: 210%;');
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_7(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_11);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_12);
      i(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_13(this$));
      b(stamp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_14(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_6(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_7(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.unaryPlus_pdl1vz$('Java interop');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_8(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_15);
      replace(this$, 1, 'Wight', 'List');
      $receiver.unaryPlus_pdl1vz$(' is ');
      replace(this$, 1, 'Wight', 'List');
      br(this$);
      replace(this$, 1, 'Dylan', 'Map');
      $receiver.unaryPlus_pdl1vz$(' is ');
      replace(this$, 1, 'Dylan', 'Map');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nullability: K -> J');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.unaryPlus_pdl1vz$('Foo.kt:');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.unaryPlus_pdl1vz$('fun bar(str: String) {}');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.unaryPlus_pdl1vz$('Test.java:');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    return '\n' + '                            ' + hl($receiver, 1, 'FooKt') + '.bar(null);' + '\n' + '                                      ' + fIn($receiver, 2, warning($receiver, '^^^^')) + '\n' + '                        ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_20($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_10));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('enforced');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_21(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Nullability can only be ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_11);
      $receiver.unaryPlus_pdl1vz$(' in Kotlin code.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_9(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_16);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_17);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_18);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_19);
      hlCode(this$, 'java', main$lambda$lambda$lambda$lambda$lambda_20);
      i(fragment(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_21(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_22($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nullability: J -> K');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_23($receiver) {
    $receiver.unaryPlus_pdl1vz$('System.java:');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_24($receiver) {
    $receiver.unaryPlus_pdl1vz$('static String platform() { return "Whatever"; }');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_25($receiver) {
    $receiver.unaryPlus_pdl1vz$('test.kt:');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    return '\n' + '                            val pn' + fInA($receiver, 2, ': String') + ' = System.platform() ' + fIn($receiver, 1, '// ctrl+shift+P -> String' + fOutD($receiver, 2, '!')) + '\n' + '                        ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_26($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_12));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.unaryPlus_pdl1vz$('permissive');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_27(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Kotlin is ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_13);
      $receiver.unaryPlus_pdl1vz$(' when using java code.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.unaryPlus_pdl1vz$('ctrl+shift+P');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_28(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Remember ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_14);
      $receiver.unaryPlus_pdl1vz$('!!!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_10(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_22);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_23);
      hlCode(this$, 'java', main$lambda$lambda$lambda$lambda$lambda_24);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_25);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_26);
      i(fragment(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_27(this$));
      br(this$);
      i(fragment(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_28(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_8(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_9(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_10(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_29($receiver) {
    $receiver.unaryPlus_pdl1vz$('Properties');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    return '\n' + '                                ' + fInA($receiver, 7, 'data') + ' class User' + hl($receiver, 1, '(' + fInA($receiver, 6, 'var ') + 'firstName: String, ' + fInA($receiver, 6, 'var ') + 'lastName: String)') + ' ' + fOut($receiver, 8, '{') + '\n' + '                                    ' + fOut($receiver, 6, fOutD($receiver, 3, 'private ') + 'var firstName ' + fInB($receiver, 2, '= firstName') + '\n' + '                                    ' + fOutD($receiver, 3, 'private ') + 'var lastName ' + fInB($receiver, 2, '= lastName')) + '\n' + '                                        ' + curB($receiver, 4, 'get() = field\n                                        set(value) { field = value }') + '\n' + '\n' + '                                    ' + fOut($receiver, 2, hl($receiver, 1, 'init {\n                                        this.firstName = firstName\n                                        this.lastName = lastName\n                                    }')) + '\n' + '\n' + '                                    ' + fOut($receiver, 3, 'fun getFirstName() = firstName\n                                    fun setFirstName(firstName: String) { this.firstName = firstName }\n\n                                    fun getLastName() = lastName\n                                    fun setLastName() { this.lastName = lastName }') + '\n' + '\n' + '                                    ' + fOut($receiver, 7, 'fun toString() = "User{firstName=$firstName, lastName=$lastName}"\n\n                                    fun hashcode() = firstName.hashCode() * lastName.hashCode()') + '\n' + '                                ' + fOut($receiver, 8, '}') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_30($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; max-height: 500px;');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_15));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_11(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_29);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_30);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_31($receiver) {
    $receiver.unaryPlus_pdl1vz$('Properties');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    return '\n' + '                                class MainView {' + '\n' + '                                    val login ' + hl($receiver, 1, 'by') + ' fromLayout(EditText::class)' + '\n' + '                                }' + '\n' + '\n' + '                                ' + fIn($receiver, 2, 'fun <T' + hl($receiver, 3, ': View') + '> fromLayout(cls: KClass<T>): ' + hl($receiver, 4, 'ReadOnlyProperty<T>')) + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_32($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_16));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.unaryPlus_pdl1vz$('lazy retrieval');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.unaryPlus_pdl1vz$('injection');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_33(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Delegated properties are used for ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_17);
      $receiver.unaryPlus_pdl1vz$(' and for ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_18);
      $receiver.unaryPlus_pdl1vz$('.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_12(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_31);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_32);
      i(fragment(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_33(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_4(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_11(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_12(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_34($receiver) {
    $receiver.unaryPlus_pdl1vz$('Fonctions');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    return '\n' + '                                fun ' + fInA($receiver, 2, 'Connection.') + 'updateUser(' + fOutD($receiver, 2, hl($receiver, 1, 'con: Connection') + ', ') + 'user: User)' + '\n' + '\n' + '                                ' + fInA($receiver, 2, 'con.') + 'updateUser(' + fOutD($receiver, 2, hl($receiver, 1, 'con') + ', ') + 'user)' + '\n' + '\n' + '\n' + '                                ' + fIn($receiver, 3, 'fun <T> ' + fInA($receiver, 4, 'Map<String, T>.') + 'prefixed(' + fOutD($receiver, 4, 'map: Map<String, T>, ') + 'prefix: String): List<T>' + '\n' + '\n' + '                                val entries = ' + fInA($receiver, 4, 'map.') + 'prefixed(' + fOutD($receiver, 4, 'map, ') + '"' + '_' + '"' + ')') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_35($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_19));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_13(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_34);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_35);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_36($receiver) {
    $receiver.unaryPlus_pdl1vz$('Lambdas');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_20($receiver) {
    return '\n' + '                                list.map' + fOutD($receiver, 4, '(' + fInA($receiver, 3, ')')) + fInA($receiver, 3, ' ') + hl($receiver, 1, '{ ' + replace_0($receiver, 2, 'element -> element', 'it') + '.toString() }') + fOutD($receiver, 3, ')') + ' ' + fInA($receiver, 5, '.reduce { acc, v -> acc + v }') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_37($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_20));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_14(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_36);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_37);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_38($receiver) {
    $receiver.unaryPlus_pdl1vz$('DSL');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_21($receiver) {
    return '\n' + '                                data class AlbumToPlay(val name: String)' + '\n' + '\n' + '                                ' + hl($receiver, 1, 'object') + ' play {' + '\n' + '                                    ' + fInA($receiver, 2, 'infix ') + 'fun album(name: String) = AlbumToPlay(name)' + '\n' + '                                }' + '\n' + '\n' + '                                ' + fInA($receiver, 2, 'infix ') + 'fun AlbumToPlay.by(band: String) {}' + '\n' + '\n' + '\n' + '                                play' + fOut($receiver, 3, '.') + 'album' + fOut($receiver, 3, '(') + '"' + 'Pacifisticuffs' + '"' + fOut($receiver, 3, ')') + fOutD($receiver, 3, '.') + 'by' + fOut($receiver, 3, '(') + '"' + 'Diablo Swing Orchestra' + '"' + fOut($receiver, 3, ')') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_39($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_21));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_15(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_38);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_39);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_40($receiver) {
    $receiver.unaryPlus_pdl1vz$('Operator');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_22($receiver) {
    return '\n' + '                                object db {' + '\n' + '                                    ' + fInA($receiver, 1, 'operator ') + 'fun get(str: String): Entry {}' + '\n' + '                                    ' + fInA($receiver, 1, 'operator ') + 'fun set(str: String, value: String) {}' + '\n' + '                                }' + '\n' + '\n' + '                                val entry = db' + replace_0($receiver, 2, '.get(', '[') + '"' + 'key' + '"' + replace_0($receiver, 2, ')', ']') + '\n' + '                                db' + replace_0($receiver, 2, '.put(', '[') + 'key' + replace_0($receiver, 2, ', ', '] = ') + 'value' + fOutD($receiver, 2, ')') + '\n' + '\n' + '\n' + '                                ' + fIn($receiver, 3, 'operator fun Date.plus(other: Date): Date {}') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_41($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_22));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_16(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_40);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_41);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_5(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_13(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_14(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_15(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_16(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_42($receiver) {
    $receiver.unaryPlus_pdl1vz$('Inline');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_23($receiver) {
    return '\n' + '                                ' + fInA($receiver, 3, 'inline ') + 'fun <T> Iterable<T>.forEach(action: ' + hl($receiver, 1, '(T) -> Unit') + ') {' + '\n' + '                                    for (element in this)' + '\n' + '                                        action(element)' + '\n' + '                                }' + '\n' + '\n' + '                                                                 ' + fIn($receiver, 4, '//Compiled as:') + '\n' + '                                ' + fIn($receiver, 2, 'list.forEach {') + '                   ' + fIn($receiver, 4, 'for (element in list) {') + '\n' + '                                    ' + fIn($receiver, 2, 'println(it.toString())') + '           ' + fIn($receiver, 4, 'println(element.toString())') + '\n' + '                                ' + fIn($receiver, 2, '}') + '                                ' + fIn($receiver, 4, '}') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_43($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_23));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_24($receiver) {
    $receiver.unaryPlus_pdl1vz$('forced');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_44(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Inlining is ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_24);
      $receiver.unaryPlus_pdl1vz$('!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_17(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_42);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_43);
      i(fragment(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_44(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_45($receiver) {
    $receiver.unaryPlus_pdl1vz$('Non-local return');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_25($receiver) {
    return '\n' + '                                ' + hl($receiver, 1, 'fun') + ' <T> Iterable<T>.first(predicate: (T) -> Boolean): T {' + '\n' + '                                    this.forEach {' + '\n' + '                                        if (predicate(it))' + '\n' + '                                            ' + hl($receiver, 1, 'return') + fInA($receiver, 2, fOutD($receiver, 3, '@forEach')) + ' it' + '\n' + '                                    }' + '\n' + '                                    throw NoSuchElementException()' + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_46($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_25));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_18(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_45);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_46);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_47($receiver) {
    $receiver.unaryPlus_pdl1vz$('Reified types');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_26($receiver) {
    return '\n' + '                                ' + fInA($receiver, 3, 'inline ') + 'fun <' + fInA($receiver, 3, 'reified ') + 'T' + fInA($receiver, 3, ': Any ') + '> typeName() = T::class.simpleName' + '\n' + '                                                      ' + cur($receiver, 2, error($receiver, '^^^^^^^')) + '\n' + '                                                          ' + fIn($receiver, 4, '//Compiled as:') + '\n' + '                                ' + fIn($receiver, 1, 'typeName<String>()') + '        ' + fIn($receiver, 4, 'String::class.simpleName()') + '\n' + '                                         ' + cur($receiver, 2, error($receiver, '^^^^^^')) + '\n' + '\n' + '\n' + '                                ' + fIn($receiver, 5, fInA($receiver, 6, 'inline ') + 'fun <' + fInA($receiver, 6, 'reified ') + hl($receiver, 8, 'T: View') + '> fromLayout(' + fOutD($receiver, 6, 'cls: KClass<T>') + '): ReadOnlyProperty<' + hl($receiver, 8, 'T') + '>') + '\n' + '\n' + '                                ' + fIn($receiver, 7, 'val login' + fInA($receiver, 8, ': EditText') + ' by fromLayout' + fOutD($receiver, 8, '<EditText>') + '()') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_48($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_26));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_19(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_47);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_48);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_6(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_17(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_18(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_19(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_49($receiver) {
    $receiver.unaryPlus_pdl1vz$("Let's Rx...");
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_27($receiver) {
    return '\n' + '                                class Article(val text: String)' + '\n' + '\n' + '                                fun getFromDB(id: Int): Maybe<Article> ' + hl($receiver, 1, '= TODO()') + '\n' + '\n' + '                                fun request(id: Int): Single<Article> ' + hl($receiver, 1, '= TODO()') + '\n' + '\n' + '                                fun backupInDB(article: Article): Completable ' + hl($receiver, 1, '= TODO()') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_50($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_27));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_51($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white');
    $receiver.unaryPlus_pdl1vz$('\n                            getArticleText(articleId) =\n                                if article is in local DB\n                                    return article text from local DB\n                                else\n                                    download article\n                                    save downloaded article in local DB\n                                    return downloaded article text\n                        ');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_20(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_49);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_50);
      br(this$);
      hlCode(fragment(this$), 'text', main$lambda$lambda$lambda$lambda$lambda_51);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_52($receiver) {
    $receiver.unaryPlus_pdl1vz$('Using callbacks');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_28($receiver) {
    return '\n' + '                                fun getArticleText(id: Int): Single<String> {' + '\n' + '                                    return ' + hl($receiver, 1, 'Single.create { emitter ->' + '\n' + '                                        ' + hl($receiver, 2, 'getFromDB(id).subscribeBy(' + '\n' + '                                                ' + hl($receiver, 3, 'onSuccess = { article ->' + '\n' + '                                                    ' + hl($receiver, 4, 'emitter.onSuccess(article.text)') + '\n' + '                                                }') + ',' + '\n' + '                                                ' + hl($receiver, 5, 'onComplete = {' + '\n' + '                                                    ' + hl($receiver, 6, 'request(id).subscribe { article ->' + '\n' + '                                                        ' + hl($receiver, 7, 'backupInDB(article).subscribe {' + '\n' + '                                                            ' + hl($receiver, 8, 'emitter.onSuccess(article.text)') + '\n' + '                                                        }') + '\n' + '                                                    }') + '\n' + '                                                }') + '\n' + '                                        )') + '\n' + '                                    }') + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_53($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_28));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_29($receiver) {
    set_style($receiver, 'display: inline-block; transform: rotate(-15deg)');
    $receiver.unaryPlus_pdl1vz$('Callback Hell!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_54(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; color: red; left: 15%; top: 45%; font-size: 210%;');
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_29);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_21(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_52);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_53);
      b(stamp(this$, 9), void 0, main$lambda$lambda$lambda$lambda$lambda_54(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_55($receiver) {
    $receiver.unaryPlus_pdl1vz$('Using composition');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_30($receiver) {
    return '\n' + '                                fun getArticleText(id: Int): Single<String> {' + '\n' + '                                  return ' + hl($receiver, 1, 'getFromDB(id)') + '\n' + '                                          ' + hl($receiver, 2, '.map { it.text }') + '\n' + '                                          ' + hl($receiver, 3, '.defaultIfEmpty("")') + '\n' + '                                          ' + hl($receiver, 3, '.toSingle()') + '\n' + '                                          ' + hl($receiver, 4, '.flatMap { txt ->code' + '\n' + '                                              ' + hl($receiver, 5, 'if (txt.isNotEmpty())' + '\n' + '                                                  ' + hl($receiver, 6, 'Single.just(txt)')) + '\n' + '                                              ' + hl($receiver, 7, 'else' + '\n' + '                                                  ' + hl($receiver, 8, 'request(id)') + '\n' + '                                                          ' + hl($receiver, 9, trimMargin('.flatMap {' + '\n' + '                                                              ' + hl($receiver, 10, 'backupInDB(it)') + '\n' + '                                                              ' + hl($receiver, 11, '.toSingleDefault(it)') + '\n' + '                                                          }')) + '\n' + '                                                          ' + hl($receiver, 12, '.map { it.text }')) + '\n' + '                                              }' + '\n' + '                                          ') + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_56($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white; max-height: 500px;');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_30));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_31($receiver) {
    set_style($receiver, 'display: inline-block; transform: rotate(-15deg)');
    $receiver.unaryPlus_pdl1vz$('Composition Hell!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_57(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; color: red; left: 10%; top: 45%; font-size: 210%;');
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_31);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_22(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_55);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_56);
      b(stamp(this$, 13), void 0, main$lambda$lambda$lambda$lambda$lambda_57(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_58($receiver) {
    $receiver.unaryPlus_pdl1vz$('Using coroutines!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_32($receiver) {
    return '\n' + '                                fun getArticleText(id: Int): Single<String> {' + '\n' + '                                    return rxSingle {' + '\n' + '                                        val article = ' + hl($receiver, 2, 'getFromDB(id)' + hl($receiver, 1, '.await()')) + '\n' + '                                                ' + hl($receiver, 3, '?: ' + hl($receiver, 4, 'request(id)' + hl($receiver, 1, '.await()')) + hl($receiver, 5, '.also { backupInDB(it)' + hl($receiver, 1, '.await()') + ' }')) + '\n' + '                                        ' + hl($receiver, 6, 'article.text') + '\n' + '                                    }' + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_59($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_32));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_33($receiver) {
    $receiver.unaryPlus_pdl1vz$('That is AWESOME!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_60(this$) {
    return function ($receiver) {
      set_style($receiver, 'font-weight: bold; color: red;');
      span(this$, 'flicker', main$lambda$lambda$lambda$lambda$lambda$lambda_33);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_61($receiver) {
    $receiver.unaryPlus_pdl1vz$('...but NOT magic!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_23(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_58);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_59);
      h3(stamp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_60(this$));
      p(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_61);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_62($receiver) {
    $receiver.unaryPlus_pdl1vz$('Coroutines...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('sequential');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('callbacks');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_34(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('... transform ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
      $receiver.unaryPlus_pdl1vz$(' code into ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
      $receiver.unaryPlus_pdl1vz$('.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_35($receiver) {
    $receiver.unaryPlus_pdl1vz$('... are a compiler trick, not runtime magic.');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_36($receiver) {
    $receiver.unaryPlus_pdl1vz$('... are available through low level primitives.');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinx-coroutines-rx1, kotlinx-coroutines-rx2, kotlinx-coroutines-reactor');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinx-coroutines-android');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinx-coroutines-swing, kotlinx-coroutines-javafx');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinx-coroutines-jdk8, kotlinx-coroutines-nio');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('kotlinx-coroutines-guava, kotlinx-coroutines-quasar');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 60%');
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_37(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('... libraries are available for a lot of systems:');
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_38($receiver) {
    set_style($receiver, 'font-weight: bold; color: red;');
    $receiver.unaryPlus_pdl1vz$("... are a freakin' revolutions!");
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_63(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_34(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_35);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_36);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_37(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_38);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_24(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_62);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_63(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_7(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_20(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_21(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_22(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_23(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_24(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_64($receiver) {
    $receiver.unaryPlus_pdl1vz$('Platforms...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_39($receiver) {
    $receiver.unaryPlus_pdl1vz$('The JVM is here to stay!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('please');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('... ');
      i(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$(" don't do node!");
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('JavaScript (Web & Node)');
      span(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('WebASM');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Raspberry Pi');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Linux, Mac, Windows');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('iOS!!!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.unaryPlus_pdl1vz$('STM32');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 80%');
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_40(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('But there are other platforms:');
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_65(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_39);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_40(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_41($receiver) {
    set_style($receiver, 'display: inline-block; font-size: 500%; vertical-align: middle; padding-bottom: 25%');
    $receiver.unaryPlus_pdl1vz$('}');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_42($receiver) {
    set_style($receiver, 'font-weight: bold;');
    $receiver.unaryPlus_pdl1vz$('Native');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_66(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; bottom: -7%; left: 55%;');
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_41);
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_42);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_25(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_64);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_65(this$));
      div(stamp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_66(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_26(this$) {
    return function ($receiver) {
      lazyImg(this$, void 0, 'imgs/multiplatform.jpg');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_27(this$) {
    return function ($receiver) {
      lazyImg(this$, void 0, 'imgs/common-arch.png');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_28(this$) {
    return function ($receiver) {
      lazyImg(this$, void 0, 'imgs/common-module.png');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_67($receiver) {
    $receiver.unaryPlus_pdl1vz$('Common modules');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_68($receiver) {
    $receiver.unaryPlus_pdl1vz$('common/build.gradle');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_43($receiver) {
    return '\n' + "                                apply plugin: 'kotlin" + fInA($receiver, 1, '-platform-common') + "'" + '\n' + '\n' + '                                dependencies {' + '\n' + '                                    compile ' + '"' + 'org.jetbrains.kotlin:kotlin-stdlib' + fInA($receiver, 1, '-common') + ':' + String.fromCharCode(36) + 'kotlin_version' + '"' + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_69($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_43));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_70($receiver) {
    $receiver.unaryPlus_pdl1vz$('lib/build.gradle');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_44($receiver) {
    return '\n' + "                                apply plugin: 'kotlin" + fInA($receiver, 2, '-platform-jvm') + "'" + '\n' + '\n' + '                                dependencies {' + '\n' + '                                    ' + replace_0($receiver, 3, 'compile', 'expectedBy') + " project(':common')" + '\n' + '                                    compile ' + '"' + 'org.jetbrains.kotlin:kotlin-stdlib:' + String.fromCharCode(36) + 'kotlin_version' + '"' + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_71($receiver) {
    set_style($receiver, 'font-size: 85%; line-height: 1.2em; background-color: white');
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_44));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_29(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_67);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_68);
      hlCode(this$, 'groovy', main$lambda$lambda$lambda$lambda$lambda_69);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_70);
      hlCode(this$, 'groovy', main$lambda$lambda$lambda$lambda$lambda_71);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_72($receiver) {
    $receiver.unaryPlus_pdl1vz$('expect / actual');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_73($receiver) {
    $receiver.unaryPlus_pdl1vz$('Common');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_45($receiver) {
    return '\n' + '                                ' + fInA($receiver, 2, 'expect ') + 'fun platform(): String' + '\n' + '\n' + '                                fun hello() = println(' + '"' + 'Hello, ' + hl($receiver, 1, '${platform()}') + '!' + '"' + ')' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_74($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_45));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_75($receiver) {
    $receiver.unaryPlus_pdl1vz$('JVM');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_46($receiver) {
    return '\n' + '                                ' + fInA($receiver, 3, 'actual ') + 'fun platform() = ' + '"' + 'JVM' + '"' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_76($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_46));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_30(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_72);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_73);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_74);
      small(this$, 'fileName', main$lambda$lambda$lambda$lambda$lambda_75);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_76);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_77($receiver) {
    $receiver.unaryPlus_pdl1vz$('Philosophy');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('business');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_47(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Multiplatform is for ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
      $receiver.unaryPlus_pdl1vz$(' code.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_48($receiver) {
    $receiver.unaryPlus_pdl1vz$('APIs (including UI) are available for each platform...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    set_style($receiver, 'display: block; text-align: right;');
    $receiver.unaryPlus_pdl1vz$('(except the stdlib)');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_49(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('...but there is no "one API to rule them all"!');
      br(this$);
      b(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotlin/Native');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$('...for iOS (duh)');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('...for embedded systems');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.unaryPlus_pdl1vz$('...for (amazing) performance');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.unaryPlus_pdl1vz$('...powered by a very high perf ARC with cycle detection');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.unaryPlus_pdl1vz$('...for C interop');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('amazing tech!!!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('...an ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11(this$) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 90%');
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_50(this$) {
    return function ($receiver) {
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
      $receiver.unaryPlus_pdl1vz$(' is');
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_78(this$) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 90%');
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_47(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_48);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_49(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_50(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_31(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_77);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_78(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_8(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_25(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_26(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_27(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_28(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_29(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_30(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_31(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_32($receiver) {
    $receiver.unaryPlus_pdl1vz$('Tools');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_79($receiver) {
    $receiver.unaryPlus_pdl1vz$('IntelliJ...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_80($receiver) {
    $receiver.unaryPlus_pdl1vz$('...same tools as in Java!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_33(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_79);
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_80);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_81($receiver) {
    set_style($receiver, 'display: inline-block; transform: rotate(15deg)');
    $receiver.unaryPlus_pdl1vz$('Done!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_34(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; color: blue; left: 36%; top: 54%; font-size: 210%;');
      span(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_81);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_9(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda_32);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda_33(this$));
      b(stamp(this$), void 0, main$lambda$lambda$lambda$lambda_34(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_82($receiver) {
    $receiver.unaryPlus_pdl1vz$('Some libraries');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_51($receiver) {
    $receiver.unaryPlus_pdl1vz$('All');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_52($receiver) {
    $receiver.unaryPlus_pdl1vz$('as-is');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_83(this$) {
    return function ($receiver) {
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_51);
      $receiver.unaryPlus_pdl1vz$(' libraries that are available for Java are available for Kotlin ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_52);
      $receiver.unaryPlus_pdl1vz$('.');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_53($receiver) {
    $receiver.unaryPlus_pdl1vz$('some');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_84(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Here are ');
      i(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_53);
      $receiver.unaryPlus_pdl1vz$(' libraries for Kotlin...');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_35(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_82);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_83(this$));
      p(fadeIn(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_84(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_85($receiver) {
    $receiver.unaryPlus_pdl1vz$('RxKotlin');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_86($receiver) {
    $receiver.unaryPlus_pdl1vz$('ReactiveX for Kotlin');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_54($receiver) {
    return '\n' + '                                list' + hl($receiver, 1, '.toObservable()') + '\n' + '                                    .filter { it.length >= 5 }' + '\n' + '                                    .' + hl($receiver, 2, 'subscribeBy') + '(' + '\n' + '                                        ' + hl($receiver, 2, 'onNext =') + ' { println(it) },' + '\n' + '                                        ' + hl($receiver, 2, 'onError =') + ' { it.printStackTrace() },' + '\n' + '                                        ' + hl($receiver, 2, 'onComplete =') + ' { println(' + '"' + 'Done!' + '"' + ') }' + '\n' + '                                    )' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_87($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_54));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_36(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_85);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_86);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_87);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_88($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kodein');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_89($receiver) {
    $receiver.unaryPlus_pdl1vz$('KOtlin DEpendency INjection');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_55($receiver) {
    return '\n' + '                                val kodein = Kodein {' + '\n' + '                                    ' + hl($receiver, 2, hl($receiver, 1, 'bind<CredentialsManager>()') + ' with singleton') + ' { CredsManImpl() }' + '\n' + '                                }' + '\n' + '\n' + '                                val cm: CredentialsManager ' + hl($receiver, 3, 'by kodein.instance()') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_90($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_55));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_37(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_88);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_89);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_90);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_91($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotson');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_92($receiver) {
    $receiver.unaryPlus_pdl1vz$('KOTlin gSON');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_56($receiver) {
    return '\n' + '                                val obj: JsonObject = jsonObject(' + '\n' + '                                    ' + '"' + 'name' + '"' + ' ' + hl($receiver, 1, 'to') + ' ' + '"' + 'kotson' + '"' + ',' + '\n' + '                                    ' + '"' + 'creation' + '"' + ' ' + hl($receiver, 1, 'to') + ' Date().getTime(),' + '\n' + '                                    ' + '"' + 'files' + '"' + ' ' + hl($receiver, 1, 'to') + ' 4' + '\n' + '                                )' + '\n' + '\n' + '                                val name = obj' + hl($receiver, 2, '["name"]') + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_93($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_56));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_38(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_91);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_92);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_93);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_94($receiver) {
    $receiver.unaryPlus_pdl1vz$('Ktor');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_95($receiver) {
    $receiver.unaryPlus_pdl1vz$('Non-blocking I/O framework.');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_57($receiver) {
    return '\n' + '                                ' + hl($receiver, 1, 'fun main(args: Array<String>)') + ' {' + '\n' + '                                    embeddedServer(Netty, 8080) {' + '\n' + '                                        routing {' + '\n' + '                                            get(' + '"' + '/' + '"' + ') {' + '\n' + '                                                ' + hl($receiver, 2, 'call.respondText(\n                                                    "Hello, world!",\n                                                    ContentType.Text.Html\n                                                )') + '\n' + '                                            }' + '\n' + '                                        }' + '\n' + '                                    }.start(wait = true)' + '\n' + '                                }' + '\n' + '                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_96($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_57));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_39(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_94);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_95);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_96);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_97($receiver) {
    $receiver.unaryPlus_pdl1vz$('Spek');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_98($receiver) {
    $receiver.unaryPlus_pdl1vz$('Unit test specifications framework.');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_58($receiver) {
    return '\n                                class SimpleTest : Spek({\n                                    describe("a calculator") {\n                                        val calculator = SampleCalculator()\n\n                                        it("should know addition") {\n                                            assertEquals(6, calculator.sum(2, 4))\n                                        }\n\n                                        it("should know substraction") {\n                                            assertEquals(2, calculator.subtract(4, 2))\n                                        }\n                                    }\n                                })\n                            ';
  }
  function main$lambda$lambda$lambda$lambda$lambda_99($receiver) {
    $receiver.unaryPlus_pdl1vz$(animText($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda_58));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_40(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_97);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_98);
      hlCode(this$, 'kotlin', main$lambda$lambda$lambda$lambda$lambda_99);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_100($receiver) {
    $receiver.unaryPlus_pdl1vz$('Spring');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_101($receiver) {
    $receiver.unaryPlus_pdl1vz$('Yeah, spring!');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_59($receiver) {
    $receiver.unaryPlus_pdl1vz$('Sebastien Deleuze');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_102(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Thanks, ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_59);
      $receiver.unaryPlus_pdl1vz$('!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_41(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_100);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_101);
      i(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_102(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_10(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_35(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_36(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_37(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_38(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_39(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_40(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_41(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_103($receiver) {
    $receiver.unaryPlus_pdl1vz$('Conclusion');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_104($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotlin is...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.unaryPlus_pdl1vz$('er');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_60(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Saf');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.unaryPlus_pdl1vz$('er');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_61(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Easi');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.unaryPlus_pdl1vz$('er');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_62(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Fresh');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.unaryPlus_pdl1vz$('er');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_63(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Bett');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_105(this$) {
    return function ($receiver) {
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_60(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_61(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_62(this$));
      li(fadeUp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_63(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_64($receiver) {
    $receiver.unaryPlus_pdl1vz$('progressive integration');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_106(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('...and it allows for ');
      b(this$, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_64);
      $receiver.unaryPlus_pdl1vz$('!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_42(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_103);
      p(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_104);
      ul(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_105(this$));
      i(stamp(this$), void 0, main$lambda$lambda$lambda$lambda$lambda_106(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_107($receiver) {
    $receiver.unaryPlus_pdl1vz$('So...');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_43(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_107);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_11(this$) {
    return function ($receiver) {
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_42(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_43(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_44(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Be In,');
      br(this$);
      $receiver.unaryPlus_pdl1vz$('Learn Kotlin!');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_45($receiver) {
    $receiver.unaryPlus_pdl1vz$('github.com/salomonbrys');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_46($receiver) {
    $receiver.unaryPlus_pdl1vz$('@salomonbrys');
    return Unit;
  }
  function main$lambda$lambda$lambda_12(this$) {
    return function ($receiver) {
      h2(this$, void 0, main$lambda$lambda$lambda$lambda_44(this$));
      a(this$, 'https://github.com/salomonbrys', void 0, void 0, main$lambda$lambda$lambda$lambda_45);
      br(this$);
      a(this$, 'https://twitter.com/salomonbrys', void 0, void 0, main$lambda$lambda$lambda$lambda_46);
      return Unit;
    };
  }
  function main$lambda$lambda(this$) {
    return function ($receiver) {
      section(this$, void 0, main$lambda$lambda$lambda(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda_0(this$));
      section(this$, void 0, main$lambda$lambda$lambda_1(this$));
      section(this$, void 0, main$lambda$lambda$lambda_2(this$));
      section(this$, void 0, main$lambda$lambda$lambda_3(this$));
      section(this$, void 0, main$lambda$lambda$lambda_4(this$));
      section(this$, void 0, main$lambda$lambda$lambda_5(this$));
      section(this$, void 0, main$lambda$lambda$lambda_6(this$));
      section(this$, void 0, main$lambda$lambda$lambda_7(this$));
      section(this$, void 0, main$lambda$lambda$lambda_8(this$));
      slide(this$, void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda_9(this$));
      section(this$, void 0, main$lambda$lambda$lambda_10(this$));
      section(this$, void 0, main$lambda$lambda$lambda_11(this$));
      slide(this$, void 0, void 0, 'zoom', void 0, void 0, main$lambda$lambda$lambda_12(this$));
      return Unit;
    };
  }
  function main$lambda($receiver) {
    revealSlides($receiver, main$lambda$lambda($receiver));
    return Unit;
  }
  function main$lambda_0(closure$revealRoot) {
    return function ($receiver) {
      $receiver.slideNumber = true;
      $receiver.history = true;
      $receiver.dependencies = [revealkt.RevealPlugins.speakerNotes_61zpoe$(closure$revealRoot), revealkt.RevealPlugins.highlightJs_61zpoe$(closure$revealRoot)];
      return Unit;
    };
  }
  function main(args) {
    append(ensureNotNull(document.body), main$lambda);
    var revealRoot = 'out/lib/webjars/reveal.js/3.5.0';
    revealkt.Reveal.initialize_3oypv5$(main$lambda_0(revealRoot));
  }
  _.fadeInAppear_h0p60k$ = fadeInAppear;
  _.fadeOutDisappear_h0p60k$ = fadeOutDisappear;
  _.replace_t04e5k$ = replace;
  _.stamp_h0p60k$ = stamp;
  _.fInA_avhqks$ = fInA;
  _.fInB_avhqks$ = fInB;
  _.fOutD_avhqks$ = fOutD;
  _.replace_p57n7q$ = replace_0;
  _.curB_avhqks$ = curB;
  _.error_rz4m0y$ = error;
  _.warning_rz4m0y$ = warning;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('BeInLearnKotlin', _);
  return _;
}(typeof BeInLearnKotlin === 'undefined' ? {} : BeInLearnKotlin, kotlin, revealkt, this['kotlinx-html-js']);

//# sourceMappingURL=BeInLearnKotlin.js.map
