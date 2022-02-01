import { Request, Response, NextFunction } from 'express';

const ContentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json');

  next();
};

export { ContentType };
