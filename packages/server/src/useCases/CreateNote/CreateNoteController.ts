import { Request, Response } from 'express';
import { CreateNoteUseCase } from './CreateNoteUseCase';

export class CreateNoteController {
  constructor(private createNoteUserCase: CreateNoteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, subtitle, text, color } = request.body;

    try {
      const createdNote = await this.createNoteUserCase.execute({
        title,
        subtitle,
        text,
        color,
      });

      return response.status(201).json(createdNote);
    } catch (err) {
      console.log(err);

      return response.status(400).json({
        message: err.message || 'Unexpected Error.',
      });
    }
  }
}
