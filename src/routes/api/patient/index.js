import clientPromise from '$lib/mongodb-client.js'

/*
export async function post ({ request }) {
    const data = await request.json(); // or .json(), or .text(), etc
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('sveltekit-todos');
    const newTodo = await collection.insertOne(data);
    return {
        status: 200,
        body: {
            newTodo
        }
    }

}*/

export async function get(request) {
    const lastname = request.url.searchParams.get('lastname');
    const given = request.url.searchParams.get('given');
    const fnr = request.url.searchParams.get('fnr');
    const birthDate = request.url.searchParams.get('birthDate');

    
    var query = { }
    if (lastname) {
        query["name.family"] = lastname;
    }
    if (given) {
        query["name.given"] = given;
    }
    if (fnr) {
        query["name.given"] = fnr;
    }
    if (birthDate) {
        query["birthDate"] = birthDate;
    }

    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('Pasientregister');
    const patients = await collection.find(query).toArray();
    return {
        status: 200,
        body: {
            patients
        }
    }
}
