// routes to PASSWORDS [ //localhost/password ]
router.get('/password/:id', function (req, res, next) {
    Password.findById({ _id: req.params.id }, req.body).then(function (password) {
        res.send("Password Found " + password.lable)
        console.log(password.lable)
    }).catch(next)
})
router.post('/password', function (req, res, next) {
    Password.create(req.body).then(function (password) {
        res.send(password)
        console.log(password.id)
    }).catch(next)
})
router.put('/password/:id', function (req, res, next) {
    Password.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (password) {
        Password.findOne({ _id: req.params.id }).then(function (password) {
            res.send("Updated: " + password)
            console.log(password.id)
        })
    }).catch(next)
})
router.delete('/password/:id', function (req, res, next) {
    Password.findByIdAndRemove({ _id: req.params.id }).then(function (password) {
        res.send("ID Has Been Deleted: \n" + password)
        console.log(cnDel + password.id)
    }).catch(next)
})

// routes to Users [ //localhost/user ]
router.get('/user/:id', function (req, res, next) {
    User.findById({ _id: req.params.id }, req.body).then(function (user) {
        res.send("User Found " + user.username)
        console.log(user.username)
    }).catch(next)
})
router.post('/user', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user)
        console.log(User.id)
    }).catch(next)
})
router.put('/user/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send("Updated: " + user)
            console.log(User.id)
        })
    }).catch(next)
})
router.delete('/user/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send("ID Has Been Deleted: \n" + user)
        console.log(cnDel + User.id)
    }).catch(next)
})
