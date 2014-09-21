(function() {
  var spritzController = null;
// Find Spritzer container
var container = $("#spritzer"); // Bind spritzer notification event listener
container.on("onSpritzPlay", function(event, position) {console.log("onSpritzPlay: " + position);});
container.on("onSpritzSpeedChanged", function(event, speed) {console.log("onSpritzSpeedChanged: " + speed);});
container.on("onSpritzCompleted", function(event) {alert("Spritz Completed");});
container.on("onSpritzBack", function(event, position, pausePos) {console.log("onSpritzBack: " + position + "/" + pausePos);});
  
  var onFetchSuccessController = function(spritzText) {
    // Start spritzing
    spritzController.startSpritzing(spritzText);
  };
  
  var onFetchError = function(error) {
    alert("Unable to Spritz: " + error.message);
  };
  
  var onStartSpritzClick = function(event) {
    var element = $(event.currentTarget);
    var url = element.data("url");
    SpritzClient.fetchContents(url, onFetchSuccessController, onFetchError);
  };

    var init = function() {
    $("#startSpritz").on("click", onStartSpritzClick);      

    // Construct a SpritzController
    spritzController = new SPRITZ.spritzinc.SpritzerController({placeholderText:{startText:'Click Spritz! Button'}});
    
    // Attach the controller's container to this page's "spritzer" container
    spritzController.attach($("#spritzer"));
  };
  
  
  $(document).ready(function() {
    init();
  });
})();
