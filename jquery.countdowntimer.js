/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "jquery.countdowntimer.js"
 * by Manjunath Manohar <manjunath.nm89@gmail.com>
 * demo page: demo.html (will add a link in my projects page soon)
 * 
 * Copyright (c) 2012 Manjunath 
 *
 * Dependencies: jquery 1.4+
 * --------------------------------------------------------------------
 */

(function($){
  // startTime - Current time of the server - a valid dateString - October 13, 1975 11:13:00 or 2012-10-29 00:00:58 +0530
  //             this is required as, if the current time is computed in the client side, it would lead to time zone inconsistencies 
  // endTime -   End time of the event. - a valid dateString - October 13, 1975 11:13:00 or 2012-10-29 00:00:58 +0530
  jQuery.fn.countdowntimer = function(startTime, endTime, options){
    var settings = jQuery.extend({
      widgetTitle: "Countdown Widget",
      WidgetEnd: "Hurray! Event Started"
    }, options);

    var constants = {
      enclosingDivClass: "_countdowntimer",
      idArray: ["_cdays", "", "_chours", "", "_cmins", "", "_csecs"],
      legendArray: ["Days", "", "Hours", "", "Minutes", "", "Seconds"]
    };

    var startTime = new Date(startTime);
    var endTime = new Date(endTime);
    var diffTime = endTime - startTime;
    var days = Math.floor((diffTime/86400)/1000);
    var hours = Math.floor((diffTime-(days*86400))/3600);
    var mins = Math.floor((diffTime-(days*86400)-(hours*3600))/60);
    var secs = Math.floor(diffTime-(days*86400)-(hours*3600)-(mins*60));

    var divEnclosure = jQuery(this);

    divEnclosure.addClass(constants.enclosingDivClass).
      append(getWidgetHeader()).
        append(createTableStructure());

    function getWidgetHeader(){
      return jQuery("<h3>").html(settings.widgetTitle);
    }

    function createTableStructure(){
      var tableDiv = jQuery("<div>");
      var tableObj = jQuery("<table>");
      tableObj.attr({border: "0", cellspacing: "3", cellpadding: "2"});
      tableObj.css("padding-left", "30px");
      var trCounterRow = jQuery("<tr>").append(generateTdCells(constants.idArray, false));
      var trLegendRow = jQuery("<tr>").append(generateTdCells(constants.legendArray, true));
      tableDiv.append(tableObj.append(trCounterRow).append(trLegendRow));
      return tableDiv;
    }

    function generateTdCells(constantsArray, isLegendRow){
      content = ""
      for(i = 0; i < 7; i++){
        if(i%2 == 0){
          if(isLegendRow)
            content += "<td align='center'>"+ constantsArray[i] +"</td>"
          else
            content += "<td align='center' id='"+ constants.enclosingDivClass + constantsArray[i] +"'>00</td>";
        }
        else{
          if(isLegendRow)
            content += "<td>&nbsp;</td>";
          else
            content += "<td align='center'>:</td>";
        }
      }
      return content;
    }

    var timeEnd = setInterval(countdownTimer,1000);
    var tsecs = secs;

    function countdownTimer(){

      tsecs--;
      if(tsecs < 0)
      {
        jQuery("#" + constants.enclosingDivClass).html(settings.WidgetEnd);
        clearInterval(timeEnd);
      }
      else
      {
        secs -= 1;
        if(secs < 0)
        {
          secs = 59;
          mins -= 1;

        }
        if(mins < 0)
        {

          if(hours >= 1 || days >= 1)
          {
            mins = 59;
            hours -= 1;
          }
        }
        if(hours < 0)
        {

          if(days >= 1)
          {
            hours = 23;
            days -= 1;
          }
        }
      }
      jQuery("#" + constants.enclosingDivClass + constants.idArray[0]).html(prefixZero(days));
      jQuery("#" + constants.enclosingDivClass + constants.idArray[2]).html(prefixZero(hours));
      jQuery("#" + constants.enclosingDivClass + constants.idArray[4]).html(prefixZero(mins));
      jQuery("#" + constants.enclosingDivClass + constants.idArray[6]).html(prefixZero(secs));
    }

    function prefixZero(intValue){
      return (intValue < 10) ? ("0" + intValue) : intValue
    }
  }
})(jQuery)