import { EditdialogModule } from './editdialog.module';

describe('EditdialogModule', () => {
  let editdialogModule: EditdialogModule;

  beforeEach(() => {
    editdialogModule = new EditdialogModule();
  });

  it('should create an instance', () => {
    expect(editdialogModule).toBeTruthy();
  });
});
