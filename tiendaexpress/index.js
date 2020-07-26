

const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');

let ObjectId = mongodb.ObjectID;

const MongoClient = mongodb.MongoClient;

let db;

MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {

    if (err !== null) {
        console.log()
    }

    else {

        db = client.db('socks')


    }

});

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());
// metodo Get para mostar los calcetines que tenemos
app.get('/api/socks', function (request, response) {
    db.collection('socksAdmin').find().toArray(function (err, socks) {

        if (err !== null) {
            console.log(err);
            response.send(err);
        }
        else {

            response.send(socks)

            console.log({ mensaje: 'The product has been added.' })

        }
    });
});

// metodo Get para sacar la infomación sobre el tipo de calcetines

app.get('/api/socks/:type', function (request, response) {
    let type = request.params.type
    db.collection('socksAdmin').find({ type }).toArray(function (err, sock) {


        if (err !== null) {
            response.send(err)

        }
        else {

            response.send(sock)
        }


    })


})
// metodo Post para añadir calcetines a la base de datos 

app.post('/api/socksAdmin', function (request, response) {
    let sock = request.body


    db.collection('socksAdmin').insertOne(sock, function (err, resultado) {

        if (err !== null) {
            response.send(err)
        }

        else {

            db.collection('socksAdmin').find().toArray(function (err, socks) {

                if (err !== null) {
                    console.log(err);
                    response.send(err);
                }
                else {



                    response.send(socks)

                    console.log({ mensaje: 'The product has been added.' })

                }


            })


        }
    })

})

//metodo put para modificar la cantidad de calcetines en la base de datos

app.put('/api/:qty/:id', function (request, response) {

    let id = request.params.id
    console.log(id)
    let qty =parseInt (request.params.qty)

    db.collection('socksAdmin').updateOne({ _id: ObjectId(id) }, { $set: { qty: qty } },
        function (err, result) {
            if (err !== null) {

                console.log(err)
                response.send(err)


            }
            else {
                db.collection('socksAdmin').find().toArray(function (err, result) {


                    if (err !== null) {

                        console.log(err)


                    }
                    else {

                        response.send(result)

                    }
                });




            }

        })

})


//metodo delte para borrar productos de la base de datos

app.delete('/api/delete/socksAdmin/:model', function (request, response) {
    let model = request.params.model
    console.log(model)

    db.collection('socksAdmin').deleteOne({ model:model }, function (err, resultado) {
        if (err !== null) {
            console.log(err);
            response.send(err);

        }
        else {
            if (resultado.deletedCount === 1) {


                db.collection('socksAdmin').find().toArray(function (err, socks) {

                    if (err !== null) {
                        console.log(err);
                        response.send(err);
                    }
                    else {

                        response.send(socks)
                        console.log(socks)
                        console.log({ mensaje: 'The product has been deleted.' })

                    }


                })
            }
            else {

                response.send({ mensaje: "the porduct has not been deleted" })
            }



        }

    })

});

app.post('/api/carrito', function (request, response) {
    let sock = request.body
    console.log(request.body)


    db.collection('cart').insertOne(sock, function (err, resultado) {

        if (err !== null) {
            response.send(err)
        }

        else {
            db.collection('socksAdmin').updateOne({ model:request.body.modelo }, { $inc: { qty:-1 } },
                function (err,result) 
                {
                    if (err!=null) 
                    {
                    response.send(err)    
                    }

                    else{
                        db.collection('cart').find().toArray(function (err, socks) {

                            if (err !== null) {
                                console.log(err);
                                response.send(err);
                            }
                            else {
            
            
            
                                response.send(socks)
            
                                console.log({ mensaje: 'The product has been added.' })
            
                            }
            
            
                        })


                    }
                })


           


        }
    })

})





app.get('/api/cart', function (request,response) {

    db.collection('cart').find().toArray
    (function(err,socks){
if (err !==null) {
    console.log(err)
    response.send(err);
    
}
else{
response.send(socks)
console.log({mensaje:'the product has been added to your cart'})

}


    })
    
})


app.delete('/api/delete/cart/:id', function (request, response) {

    let id = request.params.id
    let model = request.params.model
    console.log(model)

    db.collection('cart').deleteOne({_id: ObjectId(id)}, function (err, resultado) {
        if (err !== null) {
            console.log(err);
            response.send(err);

        }
        else {
            if (resultado.deletedCount === 1) {


                db.collection('cart').find().toArray(function (err, socks) {

                    if (err !== null) {
                        console.log(err);
                        response.send(err);
                    }
                    else {

                        response.send(socks)
                        console.log(socks)
                        console.log({ mensaje: 'The product has been deleted.' })

                    }


                })
            }
            else {

                response.send({ mensaje: "the porduct has not been deleted" })
            }



        }

    })

});


app.delete('/api/delete/cart/comprar/:common', function (request, response) {

    let common = request.params.common
console.log(common)

    db.collection('cart').deleteMany({common: "cart"}, function (err, resultado) {
        if (err !== null) {
            console.log(err);
            response.send(err);

        }
        else {
            if (resultado.deletedCount === 1) {


                db.collection('cart').find().toArray(function (err, socks) {

                    if (err !== null) {
                        console.log(err);
                        response.send(err);
                    }
                    else {

                        response.send(socks)
                        console.log(socks)
                        console.log({ mensaje: 'The product has been deleted.' })

                    }


                })
            }
            else {

                response.send({ mensaje: "the porduct has not been deleted" })
            }



        }

    })

});



app.post('/api/info', function (request, response) {
    let sock = request.body
    
console.log(sock)

    db.collection('info').insertOne(sock, function (err, resultado) {

        if (err !== null) {
            response.send(err)
        }

        else {

            db.collection('info').find().toArray(function (err, socks) {

                if (err !== null) {
                    console.log(err);
                    response.send(err);
                }
                else {



                    response.send(socks)

                    console.log({ mensaje: 'The product has been added.' })

                }


            })


        }
    })

})


let port = process.env.PORT || 3000;

app.listen(port)
