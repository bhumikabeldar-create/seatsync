'use strict';

const express = require('express');
const router = express.Router();

// Mock data for seat allocation
let seatAllocations = [];

// API Endpoint to allocate a seat
router.post('/allocate', (req, res) => {
    const { username, seatNumber } = req.body;
    if (!username || !seatNumber) {
        return res.status(400).json({ message: 'Username and seat number are required.' });
    }
    const allocation = { username, seatNumber, allocatedAt: new Date() };
    seatAllocations.push(allocation);
    return res.status(201).json(allocation);
});

// API Endpoint to get all seat allocations
router.get('/allocations', (req, res) => {
    return res.status(200).json(seatAllocations);
});

// API Endpoint to get allocation by username
router.get('/allocations/:username', (req, res) => {
    const { username } = req.params;
    const userAllocations = seatAllocations.filter(allocation => allocation.username === username);
    return res.status(200).json(userAllocations);
});

module.exports = router;