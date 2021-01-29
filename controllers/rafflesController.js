const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/**
 * User Read - All
 */

router.get('/', isAuthenticated, function (req, res) {
    db.Raffle.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get('/:id', isAuthenticated, function (req, res) {
    db.Raffle.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post('/', function (req, res) {
    const raffle = req.body;
    if (raffle.maximumEntries < raffle.minimumEntries) {
        raffle.maximumEntries = raffle.minimumEntries;
    }
    db.Raffle
        .create(raffle)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User - Update
 */
router.put('/:id', isAuthenticated, function (req, res) {
    db.Raffle.update(req.body, { where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User - Delete
 */
router.delete('/:id', isAuthenticated, function (req, res) {
    db.Raffle.destroy({ where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get('/:id', isAuthenticated, function (req, res) {
    db.Raffle.findAll({ where: { id: req.params.id } })
        .then(results => {
            const winner = Math.floor(Math.random() * results.length);
            results[winner].id;
            console.log(results[winner].id);

        });
});

module.exports = router;
