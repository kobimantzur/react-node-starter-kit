import mongoose from 'mongoose';
import {getConnectionString} from './index';
mongoose.Promise = global.Promise

export default () => {
    // Init connection to the database
    mongoose.connect(getConnectionString(), { useMongoClient: true });
}
