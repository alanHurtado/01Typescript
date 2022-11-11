export default {
  DB:{
    URI:process.env.MONGODB_URI ||'mongodb://loaclhost/api-rest-type',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  }
}