const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/**
 * Raffle Read - All
 */
router.get('/', function (req, res) {
    db.Raffle.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Raffle Read - One
 */
router.get('/:id', function (req, res) {
    db.Raffle.findByPk(req.params.id, { include: db.User })
        .then(dbModel => res.json())
        .catch(err => res.status(422).json(err))
});

router.post('/', isAuthenticated, function (req, res) {
    db.Raffle.scope('withPassword')
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Raffle - Update
 */
router.put('/:id', function (req, res) {
    db.Raffle.update(req.body, { where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Raffle - Delete
 */
router.delete('/:id', function (req, res) {
    db.Raffle.destroy({ where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;