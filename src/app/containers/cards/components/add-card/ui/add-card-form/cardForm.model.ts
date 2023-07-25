import { FormControl } from "@angular/forms";

export interface CardForm {
    content: FormControl<string | null>;
    person: FormControl<string | null>;
  }