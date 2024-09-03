const AuctionRoom = require('../Model/auctionRoom.model');

const crypto = require('crypto');

// Generate a unique room ID
function generateRoomId() {
    return crypto.randomBytes(6).toString('hex'); // Generates a 12-character hexadecimal string
}

// Create a new auction room
exports.createAuctionRoom = async (req, res) => {
    try {
        // Generate and set the room ID
        req.body.room_Id = generateRoomId();

        const auctionRoom = new AuctionRoom(req.body);
        await auctionRoom.save();
        res.status(201).json({ message: 'Auction room created successfully', auctionRoom });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all auction rooms
exports.getAuctionRooms = async (req, res) => {
    try {
        const auctionRooms = await AuctionRoom.find();
        res.status(200).json(auctionRooms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single auction room by ID
exports.getAuctionRoomById = async (req, res) => {
    try {
        const auctionRoom = await AuctionRoom.findById(req.params.id);
        if (!auctionRoom) {
            return res.status(404).json({ message: 'Auction room not found' });
        }
        res.status(200).json(auctionRoom);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an auction room by ID
exports.updateAuctionRoom = async (req, res) => {
    try {
        const auctionRoom = await AuctionRoom.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!auctionRoom) {
            return res.status(404).json({ message: 'Auction room not found' });
        }
        res.status(200).json({ message: 'Auction room updated successfully', auctionRoom });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an auction room by ID
exports.deleteAuctionRoom = async (req, res) => {
    try {
        const auctionRoom = await AuctionRoom.findByIdAndDelete(req.params.id);
        if (!auctionRoom) {
            return res.status(404).json({ message: 'Auction room not found' });
        }
        res.status(200).json({ message: 'Auction room deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
