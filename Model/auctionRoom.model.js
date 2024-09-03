const mongoose = require('mongoose');

const auctionRoomSchema = new mongoose.Schema({
    auction_Type: {
        type: String,
        required: true,
        enum: ['open', 'closed'], 
    },
    room_Id: {
        type: String,
        // required: true,
        unique: true,
    },
    numberOfMembers: {
        type: Number,
        required: true,
        min: 2, 
    },
    registration_Number: {
        type: String,
        required: true,
        unique: true, 
    },
    timelimit: {
        type: Number,
        required: true,
        default: 1800, 
    },
    minbid_increment: {
        type: Number,
        required: true,
        min: 1, 
    },
    start_time: {
        type: Date,
        required: true,
        default: Date.now, 
    },
    end_time: {
        type: Date,
        required: true,
    },
  
 
    winner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
    },
});

const AuctionRoom = mongoose.model('AuctionRoom', auctionRoomSchema);
module.exports = AuctionRoom;
