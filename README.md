# Chronos Logger

Chronos Logger is a simple Angular 6 application with enterprise features. It's used for study of new and advanced, technologies and tecniques with Angular.

It's a pomodoro like timer with enfase in focus and productive time. Doesn't matter the duration of breaks ;)


## Application

### Libraries, components and angular tecniques

* Angular 6
* Angular Material (material design)
* Angular Flex-Layout (flexbox)
* NGRX Platform (redux like using store and effects)
* Reactive forms only
* Change detection: OnPush only

### Features

* Pre-programmed timer with multipliers
* Sound alarm
* Basic timer control

## TODO

### Features

* Play/Pause/Resume
* Explicit end of session (registering a log)
* Display log (start time, end time, duration)
* Project support
* Browser notification after time's up
* Change time slot duration
* Service Worker: Notification in footer about new version
* Mobile: Landscape support (new layout)
* Animations
* Negative timer, waiting for explicit end
* Automatic stop after certain negative timer limit
* Persist data (on localStorage, firebase, etc)
* Shortcuts, with global shortcuts support
* Google Analytics support
* External configuration: Same bundle several targets with different configuration - Feature Toggle?


### Improvements

* Don't show current timer in page title when stopped
* Better icon
* Image for alarm option
* Roboto font
* Digital font for timer


### Bugs

* Fix sound in chrome for android


### CI

* Github pages
* Travis for CI
* Build time e git hash


### Development

* Upgrade @angular/cli
* Upgrade @angular@6 (release)
* Upgrade @rxjs@6 (release)
* Upgrade @angular/material@6 (release)
* Include some e2e tests
* Include more effect tests
