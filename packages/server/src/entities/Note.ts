import { v4 } from 'uuid';

export class Note {
  public readonly id;

  public title: string;
  public subtitle?: string;
  public text?: string;
  public color?: string;

  constructor(props: Omit<Note, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}
