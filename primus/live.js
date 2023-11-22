module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {  });


    //check if primus connection ok, then console.log
    primus.on('connection', (spark) => {
        console.log('primus connection ok');

        //check if data received from client, then console.log
    spark.on('data', (data) => {
        console.log('data received from client: ', data);
        if(data.action ==="newMessage") {
            primus.write({
                action: 'newMessage', 
                message: data.message,
            });
        }
    });
    });

    
}
