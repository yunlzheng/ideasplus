exports.index = function(req, res){
    res.render('index', { title: 'Plus+', message: 'Hello there! You can share your idea and build a term'});
};

exports.partial = function (req, res) {
    res.render('partials/partial_' + req.params.name);
};