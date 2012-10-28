jQuery Countdown Timer
======================

Countdown timer is a jquery plugin which will render a Countdown widget in your app.
Though this script executes on the client side, it will not have any issues with the users residing in time zones.

Usage
-----

You need to pass in the Current Time and the Countdown End Time. You need to pass in the Current time, to avoid any time zone inconsistencies.

jQuery("div").countdowntimer("October 25, 2012 11:13:00", "December 25, 2012 11:13:00")

jQuery("div").countdowntimer("October 25, 2012 11:13:00", "December 25, 2012 11:13:00", {
  widgetTitle: "Countdown to Christmas",
  WidgetEnd: "Happy Christmas"    
});

Current time - a valid dateString - October 13, 2012 11:13:00 or 2012-10-29 00:00:58
Event End time - a valid dateString - November 13, 2012 11:13:00 or 2012-11-29 00:00:58

Additional options

widgetTitle - The title of the widget
widgetEnd - The text which should be displayed when the countdown ends

Dependencies
------------

jQuery 1.4+