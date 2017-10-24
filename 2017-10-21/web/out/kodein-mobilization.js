if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kodein-mobilization'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kodein-mobilization'.");
}
this['kodein-mobilization'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  function RevealInit(progress, slideNumber, history, fragments, showNotes, previewLinks, transition, dependencies) {
    if (progress === void 0)
      progress = true;
    if (slideNumber === void 0)
      slideNumber = false;
    if (history === void 0)
      history = false;
    if (fragments === void 0)
      fragments = true;
    if (showNotes === void 0)
      showNotes = false;
    if (previewLinks === void 0)
      previewLinks = false;
    if (transition === void 0)
      transition = 'slide';
    this.progress = progress;
    this.slideNumber = slideNumber;
    this.history = history;
    this.fragments = fragments;
    this.showNotes = showNotes;
    this.previewLinks = previewLinks;
    this.transition = transition;
    this.dependencies = dependencies;
  }
  function RevealInit$Dependency(src, async, callback) {
    if (async === void 0)
      async = true;
    if (callback === void 0)
      callback = null;
    this.src = src;
    this.async = async;
    this.callback = callback;
  }
  RevealInit$Dependency.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dependency',
    interfaces: []
  };
  RevealInit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RevealInit',
    interfaces: []
  };
  function main$lambda() {
    hljs.initHighlightingOnLoad();
    return Unit;
  }
  function main(args) {
    var revealRoot = 'out/lib/webjars/reveal.js/3.5.0';
    Reveal.initialize(new RevealInit(void 0, true, true, void 0, void 0, void 0, void 0, [new RevealInit$Dependency('out/lib/webjars/reveal.js/3.5.0/plugin/notes/notes.js'), new RevealInit$Dependency('out/lib/webjars/reveal.js/3.5.0/plugin/highlight/highlight.js', void 0, main$lambda)]));
  }
  RevealInit.Dependency = RevealInit$Dependency;
  _.RevealInit = RevealInit;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kodein-mobilization', _);
  return _;
}(typeof this['kodein-mobilization'] === 'undefined' ? {} : this['kodein-mobilization'], kotlin);

//# sourceMappingURL=kodein-mobilization.js.map
