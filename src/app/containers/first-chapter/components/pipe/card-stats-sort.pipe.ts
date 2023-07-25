import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardStatsSort",
})
export class CardStatsSortPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a, b) => b.count - a.count);
  }
}
