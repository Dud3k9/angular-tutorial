import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "helloAngular",
})
export class HelloAngularPipe implements PipeTransform {
  transform(value: string, lang?: string): unknown {
    switch (lang) {
      case "pl":
        return "Witaj " + value;
        break;
      case "ang":
        return "Hello " + value;
        break;
      default:
        return "Hello " + value;
        break;
    }
  }
}
