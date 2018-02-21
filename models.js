const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const months = [ 'January', 'December' ];

const PersonSchema = ({
    firstName: {
      type: String,
      required: true,
      index: true, //new
      lowercase: true, //make sure it's lowercase before it's saved
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // creates an index automatically on backend
    },
    friends: [],
    age: { type: Number, min: 0, max: 150 }, //new git it a min and max
    gender: String,
    location: String,
    dateOfBirth: Date,
    workDay: { type: String, match: /^(mon|tues|wednes|thurs|fri)day$/i},//regex may not be correct
    months: { type: String, enum: months } //new, enum = enumeration
}, 
{ runSetterOnQuery: true })//new it will help your lowercase to work better

//PersonSchema.pre('save', (val) => {
  /*grab the property you want
  grab only the numbers using regex
  based on counry or the length choose a format
  reqite it to the format you want
  return the formatted number
  */

  //filter.name === collection.name
})

module.exports = mongoose.model('Person', PersonSchema);
