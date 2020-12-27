exports.getAll = (req, res, next) => {
    console.log('- get all posts -');
    res.send('voici les posts');
    res.status(200);
    res.end();
}