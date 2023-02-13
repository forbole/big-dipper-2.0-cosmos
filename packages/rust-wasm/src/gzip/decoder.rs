// decoder.rs

extern crate alloc;
extern crate wasm_bindgen;

use alloc::vec::Vec;
use hex::FromHex;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn decode(input: &[u8]) -> Result<Vec<u8>, JsError> {
    if !input.is_empty() && input.starts_with(b"\\x1f8b") {
        if let Ok(bytes) = Vec::from_hex(&input[2..]) {
            use std::io::Write;
            let mut decoder = flate2::write::GzDecoder::new(Vec::new());
            decoder.write_all(&bytes).map_err(JsError::from)?;
            return decoder.finish().map_err(JsError::from);
        }
    }

    Ok(input.to_vec())
}

#[wasm_bindgen]
pub struct GzDecoder {
    pub(crate) inner: Box<flate2::write::GzDecoder<Vec<u8>>>,
}

#[wasm_bindgen]
impl GzDecoder {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let decoder = flate2::write::GzDecoder::new(Vec::new());
        let inner = Box::new(decoder);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn write(&mut self, input: &[u8]) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.write_all(input).map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn flush(&mut self) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.flush().map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn read(&mut self) -> Vec<u8> {
        let output = self.inner.get_ref().to_vec();

        self.inner.get_mut().clear();

        output
    }

    #[wasm_bindgen]
    pub fn finish(self) -> Result<Vec<u8>, JsError> {
        self.inner.finish().map_err(JsError::from)
    }
}
