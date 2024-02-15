mod utils;

use names::Generator;
use rand::Rng;
use utils::set_panic_hook;
use wasm_bindgen::prelude::*;
use wasm_timer::Instant;

// JavaScript functions brought to Rust

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = Date)]
    fn now() -> f64;
}

// --------------------------------

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn hello_world() {
    console_log!("Hello {}, from WebAssembly!", "world");
}

fn generate_random_number() -> i32 {
    let mut rng = rand::thread_rng();
    rng.gen_range(0..100_000)
}

fn generate_name() -> String {
    let mut generator = Generator::default();
    generator.next().unwrap()
}

fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn main() {
    set_panic_hook();
    hello_world();
    console_log!("2 + 2 = {}", add(2, 2));
    console_log!("Your lucky number is: {}", generate_random_number());
    console_log!("Your random name is: {}", generate_name());

    let number = 32;
    let start = Instant::now();
    let calculation_result = fibonacci(number);
    let duration = start.elapsed();

    console_log!("Fibonacci of {} is: {}", number, calculation_result);
    console_log!("Time elapsed in (Rust) fibonacci() is: {:?}", duration);
}
