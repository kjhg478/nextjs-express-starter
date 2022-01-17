import express from 'express';

const dumbEvents = [
  {
    name: 'My first event',
    data: '2022-01-17',
    description: 'Event from express server',
  },
];

export default function getEventsRoutes() {
  const router = express.Router();

  router.get('/', (_req, res) => {
    res.json(dumbEvents);
  });

  return router;
}
