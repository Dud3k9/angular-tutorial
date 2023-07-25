import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Card } from "../../../../models/card.model";
import { CardForm } from "./cardForm.model";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"],
})
export class AddCardFormComponent implements OnInit {
  @Output() onCardAdd = new EventEmitter<Card>();
  formGroup!: FormGroup<CardForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group<CardForm>({
      content: this.fb.control("", { validators: Validators.required }),
      person: this.fb.control("", { validators: Validators.required }),
    });
  }

  handleAddCard() {
    if (this.formGroup.invalid) {
      this.formGroup.markAsTouched();
      return;
    }

    const newCard: Card = {
      content: this.formGroup.value.content!,
      person: this.formGroup.value.person!,
    };
    this.formGroup.reset();
    this.onCardAdd.emit(newCard);
  }
}
