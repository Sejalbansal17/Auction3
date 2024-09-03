const express = require('express');
const auctionRoomController = require('../controller/auctionRoomController');
const router = express.Router();

// Create a new auction room
router.post('/auction-rooms', auctionRoomController.createAuctionRoom);

// Get all auction rooms
router.get('/auction-rooms', auctionRoomController.getAuctionRooms);

// Get a single auction room by ID
router.get('/auction-rooms/:id', auctionRoomController.getAuctionRoomById);

// Update an auction room by ID
router.put('/auction-rooms/:id', auctionRoomController.updateAuctionRoom);

// Delete an auction room by ID
router.delete('/auction-rooms/:id', auctionRoomController.deleteAuctionRoom);

module.exports = router;
