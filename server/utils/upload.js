
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const storage = new GridFsStorage({
    //url: `mongodb://${USERNAME}:${PASSWORD}@ac-jlgjfek-shard-00-00.3r8bwpq.mongodb.net:27017,ac-jlgjfek-shard-00-01.3r8bwpq.mongodb.net:27017,ac-jlgjfek-shard-00-02.3r8bwpq.mongodb.net:27017/?ssl=true&replicaSet=atlas-bq89h6-shard-0&authSource=admin&retryWrites=true&w=majority`,
    url: `mongodb://127.0.0.1:27017`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];
        if(match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({ storage });
