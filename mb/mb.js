setInterval(() => {
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    const path = require('path');
    
    const protoObject = protoLoader.loadSync(path.resolve(__dirname, 'todo.proto'));
    const TodoClient = grpc.loadPackageDefinition(protoObject);

    const client = new TodoClient.TodoService('localhost:50051', grpc.credentials.createInsecure());

    client.list({}, (err, todos) => {
        if(err) throw err;
        console.log(todos);        
    })
}, 5000);