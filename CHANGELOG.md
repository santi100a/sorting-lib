# Changelog

## Version 1.0.6
- Added support for direct import of the `cjs` submodule.
- Added the `close()`, `computeDifference()`, `isClosed()`, `isStarted()` and `isStopped()` methods.
- Dropped support for `Timer.prototype.difference` and `AsyncTimer.prototype.difference`.
- Made `AsyncTimer` its own separate class.
- Used `Object.defineProperty()` instead of `Symbol`s, for improved ES3 compliance.

## Version 1.0.7
- Added support for registering callbacks 
(with `registerStartCb()`, `registerStopCb()` and `registerCloseCb()`), 
which will be called when the timer is stopped and closed respectively.
- Added support for deleting the aforementioned callbacks 
(with `deleteStartCb()`, `deleteStopCb()` and `deleteCloseCb()`), 
which will be called when the timer is stopped and closed respectively.
- Added an optional `label` parameter to the constructor, and a corresponding `getLabel()` method.
- Added a method to reset the timer, called (of course) `reset()`.