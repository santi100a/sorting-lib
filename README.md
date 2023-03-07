# Santi's Timing Library
[![Build Status](https://github.com/santi100a/timing-lib/actions/workflows/main.yml/badge.svg)](https://github.com/santi100a/timing-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/timing-lib)](https://npmjs.org/package/@santi100/timing-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/timing-lib.svg)](https://github.com/santi100a/timing-lib)
[![License](https://img.shields.io/github/license/santi100a/timing-lib.svg)](https://github.com/santi100a/timing-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/timing-lib)](https://bundlephobia.com/package/@santi100/timing-lib@latest)

- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js

## What's this?
This is a library to keep track of time. It provides a class to create timer objects.
It also provides a submodule called `promises`, with an asynchronous version of such a class, and 
a promise-based time-out to wait. It can be useful for tracking the time it takes to complete certain operations in your application.
## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/timing-lib/issues) or [pull request](https://github.com/santi100a/timing-lib/pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).

## Installation
- Via NPM: `npm install @santi100/timing-lib`
- Via Yarn: `yarn add @santi100/timing-lib`
- Via PNPM: `pnpm install @santi100/timing-lib`
## API
### Main (`index.js`) module
- `new Timer(label?: string): Timer;` Creates a new instance of `Timer`. 
The label parameter was introduced in version 1.0.7.
- `start(): Timer;` Starts the timer. Returns the `this` object for chaining.
- `stop(): Timer;` Stops the timer. Returns the `this` object for chaining.
- `getDifference(): number;` Returns the time elapsed between the start and end of the timer.
#### Since 1.0.6 (see [Changelog](CHANGELOG.md))
- `close(): Timer;` Closes the timer so it can no longer be used. Returns the `this` object for chaining.
- `computeDifference(): Timer;` Computes the time elapsed between the start and end of the timer. Returns the `this` object for chaining.
- `isClosed(): boolean;` Checks whether or not this timer is closed and can't be used anymore. Returns whether or not this timer is closed.
- `isStarted(): boolean;` Checks whether or not this timer is started right now. Returns whether or not this timer is started.
- `isStopped(): boolean;` Checks whether or not this timer is stopped right now. Returns whether or not this timer is stopped.
#### Since 1.0.7
- `registerStartCb(cb: TimerCallback<T>): Timer;`: Register the callback for the starting of the timer. Returns the `this` object for chaining.
- `registerStopCb(cb: TimerCallback<T>): Timer;`: Register the callback for the stopping of the timer. Returns the `this` object for chaining.
- `registerCloseCb(cb: TimerCallback<T>): Timer;`: Register the callback for the closure of the timer. Returns the `this` object for chaining.
- `deleteStartCb(): Timer;`: Delete the callback for the starting of the timer. Returns the `this` object for chaining.
- `deleteStopCb(): Timer;`: Delete the callback for the stopping of the timer. Returns the `this` object for chaining.
- `deleteCloseCb(): Timer;`: Delete the callback for the closure of the timer. Returns the `this` object for chaining.
- `getLabel(): string;`: Returns the timer's label. 
- `reset(): Timer;`: Resets the starting time, ending time, and difference. Returns the `this` object for chaining.
### Promises (`promises.js`) module
- `async function delay(ms?: number): Promise<void>;` Creates a new `Promise` that resolves after `ms` milliseconds.
- `new AsyncTimer(): AsyncTimer;` Creates a new instance of `AsyncTimer`.
- `async start(): AsyncTimer;` Starts the timer. Returns a promise of the `this` object for chaining.
- `async stop(): AsyncTimer;` Stops the timer. Returns a promise of the `this` object for chaining.
- `async getDifference(): number;` Returns a promise of the time elapsed between the start and end of the timer.
#### Since 1.0.6 (see [Changelog](CHANGELOG.md))
- `async close(): AsyncTimer;` Closes the timer so it can no longer be used. Returns a promise of the `this` object for chaining.
- `async computeDifference(): AsyncTimer;` Computes the time elapsed between the start and end of the timer. Returns a promise of the `this` object for chaining.
- `async isClosed(): boolean;` Checks whether or not this timer is closed and can't be used anymore. Returns a promise of a boolean indicating whether or not this timer is closed.
- `async isStarted(): boolean;` Checks whether or not this timer is started right now. Returns a promise of a boolean indicating whether or not this timer is started.
- `async isStopped(): boolean;` Checks whether or not this timer is stopped right now. Returns a promise of a boolean indicating whether or not this timer is stopped.

## Usage
```javascript
const { Timer } = require('@santi100/timing-lib/cjs'); // Since 1.0.6; import '@santi100/timing-lib/cjs/index.js' if using version 1.0.5 or older. 
const { delay } = require('@santi100/timing-lib/cjs/promises'); 
// import { Timer } from '@santi100/timing-lib'; // For ESM
// import { delay } from '@santi100/timing-lib/promises.js'; // For ESM
const timer = new Timer(); 
timer.start(); 
// do something here 
timer.stop(); 
console.log(timer.getDifference()); // prints the elapsed time in milliseconds

// Example usage of delay
(async () => {
    console.log('Half a second later...');
    await delay(500); // Waits half a second (more or less)
    console.log("Sorry I'm late!");
})()
```

## Disclaimers
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so. Of course, some parts, like ESM support and setTimeout for the promise-based module, are not ES3 compliant, but I try my best so the main codebase is.*

*^The source code is just a few kilobytes in size.*

**Tests show `Timer` and  `AsyncTimer` don't work accurately sometimes. Open a pull request so we can fix it together.**