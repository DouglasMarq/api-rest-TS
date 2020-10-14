import { Request, Response } from 'express';
import PostumeService from '../../domain/service/postume';
import * as _ from 'lodash';
import { inject, injectable } from 'inversify';

@injectable()
export default class PostumeController {
  constructor(@inject(PostumeService) private readonly postumeSvc: PostumeService) {}

  findPostume = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.postumeSvc.findPostume(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  createPostume = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.postumeSvc.createPostume(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  updatePostume = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.postumeSvc.updatePostume(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  deletePostume = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.postumeSvc.deletePostume(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };
}
