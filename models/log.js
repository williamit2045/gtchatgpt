const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errorLogSchema = new Schema({
//TODO LATER , LOG ERRORS INSIDE DB OR MAYBE USE LOCAL SQLITE
},{timestamps:true})