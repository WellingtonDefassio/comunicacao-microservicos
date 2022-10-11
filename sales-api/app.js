import express from "express";

const app = express();
const env = process.env;
const port = env.PORT || 8082;


app.get('/api/status', (req, res) => {
  return res.json({
    service: "Sales-API",
    status: "up",
    httpStatus: 200
  })
})


app.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`)
})