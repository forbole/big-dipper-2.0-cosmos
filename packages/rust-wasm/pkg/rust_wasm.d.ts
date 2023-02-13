/* tslint:disable */
/* eslint-disable */
/**
 * @param {Uint8Array} input
 * @returns {Uint8Array}
 */
export function decode(input: Uint8Array): Uint8Array;
/**
 */
export class GzDecoder {
  free(): void;
  /**
   */
  constructor();
  /**
   * @param {Uint8Array} input
   */
  write(input: Uint8Array): void;
  /**
   */
  flush(): void;
  /**
   * @returns {Uint8Array}
   */
  read(): Uint8Array;
  /**
   * @returns {Uint8Array}
   */
  finish(): Uint8Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly decode: (a: number, b: number, c: number) => void;
  readonly __wbg_gzdecoder_free: (a: number) => void;
  readonly gzdecoder_new: () => number;
  readonly gzdecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly gzdecoder_flush: (a: number, b: number) => void;
  readonly gzdecoder_read: (a: number, b: number) => void;
  readonly gzdecoder_finish: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {SyncInitInput} module
 *
 * @returns {InitOutput}
 */
export function initSync(module: SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */
export default function init(module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
