var friendsData = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
   friendsData.push(req.body);
   
   //this is where the magic happens, the code will do the following
   //I'd define some variables for user data, an array of friends, some mathmatical functions
   //so much quality code to come

   res.json({
    name: req.body.name,
    photo: req.body.photo
  });
  });
};
