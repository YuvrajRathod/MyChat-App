import mongoose from 'mongoose';
import  dotenv from 'dotenv';

dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-jlgjfek-shard-00-00.3r8bwpq.mongodb.net:27017,ac-jlgjfek-shard-00-01.3r8bwpq.mongodb.net:27017,ac-jlgjfek-shard-00-02.3r8bwpq.mongodb.net:27017/?ssl=true&replicaSet=atlas-bq89h6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;
