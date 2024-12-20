// card-format.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardFormat",
  standalone: true,
})
export class CardFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    const rawValue = value.replace(/\s+/g, "");
    const parts = rawValue.match(/.{1,4}/g) || [];
    return parts.join(" ");
  }
}
