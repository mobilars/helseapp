import clientPromise from '$lib/mongodb-client.js'

/*
AnnotatedECG.componentOf.timepointEvent.componentOf.subjectAssignment.subject.trialSubject.subjectDemographicPerson.name
AnnotatedECG.componentOf.timepointEvent.componentOf.subjectAssignment.subject.trialSubject.id
*/

export async function get(request) {

    const fnr = request.url.searchParams.get('fnr');
    const documentId = request.url.searchParams.get('documentId');
    
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('ECG');

    var query = {};
    if (!fnr && !documentId) {
        // return all - not really feasible!!!
        /*
        query = {};
        const ECGs = await collection.find(query).toArray();
        return {
            status: 200,
            body: {
                ECGs
            }
        }
        */
    } else if (fnr) {
        //console.log('Finding one ECG with FNR = ' + fnr);
        const ECG = await collection.findOne({'AnnotatedECG.componentOf.timepointEvent.componentOf.subjectAssignment.subject.trialSubject.id': fnr});
        return {
            status: 200,
            body: {
                ECG
            }
        }
    } else if (documentId) {
        query = {'_id' : documentId};
        const ECG = await collection.findOne(query);
        //console.log('Finding ECG with documentId: ' + JSON.stringify(query));
        return {
            status: 200,
            body: {
                ECG
            }
        }
    }
}