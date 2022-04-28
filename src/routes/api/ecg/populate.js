import clientPromise from '$lib/mongodb-client.js'
import { v4 as uuidv4 } from 'uuid';

import ecgData from './spirareecg-real.json';

export async function get (request) {
    const data = ecgData; // or .json(), or .text(), etc
    ecgData._id = uuidv4();
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('ECG');
    const ECG = await collection.insertOne(ecgData);
    return {
        status: 200,
        body: {
            ECG
        }
    }

}