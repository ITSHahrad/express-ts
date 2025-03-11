import express from 'express';

const testRoute = express.Router();

testRoute.get('/', (req, res) => {
  res.status(200).json({
    routed: req.path,
    message: "Server running carefully!"
  });
})

export default testRoute;