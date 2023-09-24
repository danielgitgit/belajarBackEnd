const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/api/products", async (req, res) => {
  const products = await axios.get("http://localhost:4400/products");

  return res.status(200).send({
    status: 200,
    message: "products succesfully fetched",
    data: products.data
  });
});

app.put("/api/products", async (req, res) => {
  const { name, price } = req.body;

  const products = await axios.post("http://localhost:4400/products", {
    name: name,
    price: price,
  });

  return res.status(201).send({
    status: 201,
    message: "products succesfully created",
    data: products.data,
  });
});

app.put("/api/products/:id",async (req, res) => {

    const { id } = req.params
    const { name, price} = req.body
    //console.log( req.body)

    const productUpdate = await axios.put("http://localhost:4400/products/"+id,{
        name:name,
        price:price
    })

    return res.status(200).send({
        status:200,
        message:"products sucessfully updated",
        data:productUpdate.data
    })
})

app.delete("/api/products/:id",async (req, res) => {

    const { id } = req.params
    //console.log( req.body)

    const products = await axios.delete(`http://localhost:4440/products/${id}`);

    return res.status(204).send()
})

app.post("/",(req, res) => {
    res.status(201).send({
        status:201,
        message:"created",
        content:"HOME CREATED"
    })
})

app.get("/service",(req, res) => {
    res.status(200).send({
        status:200,
        message:"OK",
        content:"SERVICE"
    })
})

app.get("/api",(req, res) => {
    res.status(200).send({
        status:200,
        message:"OK"
    })
})


app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
