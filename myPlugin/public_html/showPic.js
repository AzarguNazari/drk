

$(document).ready(function(){
    
    
    $.fn.showImage = function(width, fade){
       $(this).hide();
       var element = (this).children("div");
       alert(element[0].children("p").text());
//       var newPane = $("<div class'panel panel-default'>");
//       newPane.append("<div class='panel-heading'>" + element[0].children("p").text() + "</div>");
//       newPane.append("<div class='panel-body'><img width='100%' src='" + element[0].children("img").attr("src") + "'></div>");
//       newPane.append("</div>");
//       
//       $(this).html(newPane);
       
    };
});