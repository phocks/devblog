+++
title = "A brief interlude into Gleam concurrency"
date = 2024-07-17
draft = false

[taxonomies]
tags = ["Gleam", "Programming", "Concurrency"]
+++

I've been learning [Rust](https://www.rust-lang.org/ "The Rust programming language website") for a while now.

The other day I came across this little project called [Gleam](https://gleam.run/ "The Gleam programming language website"). It's a functional programming language. It's written in Rust. It compiles to JavaScript and Erlang. It borrows a lot of the good bits from Rust while hiding away a lot of the lower-level stuff.  It feels kinda like Rust-lite.

I was intrigued, so I took a quick look into it.

If you're also intrigued I recommend taking the [Gleam language tour](https://tour.gleam.run/ "The Gleam language tour"), or keep reading for a quick speedrun.

Gleam is easy to [install](https://gleam.run/getting-started/installing/ "Installation instruction for Gleam and Erlang etc.") via Homebrew or your system package manager.

New projects can be made with `gleam new my_project`.

Packages can be added with `gleam add`. Let's add [gleam_otp](https://hexdocs.pm/gleam_otp/ "Gleam Open Telecom Platform") with `gleam add gleam_otp`, which we'll use to spawn new tasks. It will now be an entry in your `gleam.toml` file, under `[dependencies]`

```
gleam_otp = ">= 0.10.0 and < 1.0.0"
```

I'm interested in Gleam's concurrency handling, so let's test it out. Add the following code to `src/my_project.gleam` (an example from the Gleam homepage).

```gleam
import gleam/int
import gleam/io
import gleam/list
import gleam/otp/task

fn spawn_task(i) {
  task.async(fn() {
    let n = int.to_string(i)
    io.println("Hello from " <> n)
  })
}

pub fn main() {
  // Run loads of threads, no problem
  list.range(0, 200_000)
  |> list.map(spawn_task)
  |> list.each(task.await_forever)
}
```

Compile and run the code with `gleam run`.

You should see a whole bunch of hellos from different numbers. They appear, at first glance, to be counting in order from 0 to 200,000 like this.

```
Hello from 44790
Hello from 44791
Hello from 44792
Hello from 44793
Hello from 44795
Hello from 44794
Hello from 44796
Hello from 44797
Hello from 44798
Hello from 44799
```

The cool thing is though, that each of these tasks is being run concurrently (if you've got a multi-core processor that is ... I think) ...

... And if you scroll back up, you should see that some of the numbers are actually out of order. This is because sometimes — for whatever electronic reason I won't try to understand right now — one of the tasks makes it through your CPU faster than a previous one, thus overtaking it and printing its number out first.

Pretty cool, huh? 

Looking forward to [exploring more](https://gleam.run/documentation/ "Gleam main documentation page"), and maybe using Gleam for when I don't need to be quite as close to the metal as Rust gets me.
