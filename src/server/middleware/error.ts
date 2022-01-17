import logger from 'loglevel';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    next(error);
  } else {
    logger.error(error);
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

export default errorHandler;
