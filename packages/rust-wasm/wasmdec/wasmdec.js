(() => {
  class Decompiler {
    constructor(enableDebugLogging, emitExtraInfo, inputType, input) {
      this._ptr = Wasmdec._wasmdec_create_decompiler(
        enableDebugLogging,
        emitExtraInfo,
        inputType,
        input
      );
    }
    decompile() {
      return Wasmdec._wasmdec_decompile(this._ptr);
    }
    getDecompiledCode() {
      return Wasmdec._wasmdec_get_decompiled_code(this._ptr);
    }
    destroy() {
      // MUST be called to free wasm memory
      Wasmdec._wasmdec_destroy_decompiler(this._ptr);
    }
  }
  window.Wasmdec = {
    VERSION: '1.2.1b19',
    ready: false,
    onReady: null,
    Decompiler: Decompiler,
  };
  let glue = document.createElement('script');
  glue.src = 'https://rawgit.com/wwwg/wasmdec/master/wasmdec.js/wasmdec.wasm.js';
  document.head.appendChild(glue);
  glue.onload = () => {
    Wasmdec.Module.addOnPostRun(init);
  };
  let init = () => {
    Wasmdec.ready = true;
    // bind wasm functions to javascript
    Wasmdec._wasmdec_create_decompiler = Wasmdec.Module.cwrap(
      'wasmdec_create_decompiler',
      'number',
      ['bool', 'bool', 'string', 'string']
    );
    Wasmdec._wasmdec_decompile = Wasmdec.Module.cwrap('wasmdec_decompile', 'bool', ['number']);
    Wasmdec._wasmdec_get_decompiled_code = Wasmdec.Module.cwrap(
      'wasmdec_get_decompiled_code',
      'string',
      ['number']
    );
    Wasmdec._wasmdec_destroy_decompiler = Wasmdec.Module.cwrap(
      'wasmdec_destroy_decompiler',
      'void',
      ['number']
    );
  };
})();
