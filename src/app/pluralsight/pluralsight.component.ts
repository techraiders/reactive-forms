import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-pluralsight",
  templateUrl: "./pluralsight.component.html",
  styleUrls: ["./pluralsight.component.css"]
})
export class PluralsightComponent implements OnInit {
  customerForm;
  constructor(private fb: FormBuilder) {
    /* this.customerForm = this.fb.group({
      firstName: "",
      sendCatalog: true
    }); */
    /* this.customerForm = this.fb.group({
      firstName: { value: "n/a", disabled: false },
      sendCatalog: { value: true, disabled: false }
    }); */
    this.customerForm = this.fb.group({
      firstName: ["", Validators.required, Validators.minLength(3)],
      sendCatalog: [true]
    });
  }

  ngOnInit() {}
}
