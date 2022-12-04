Date utilities.

**Typescript examples**
```ts
import { JDate } from "@james-bennett-295/date";

const d = new JDate();
/*
 * Year:              %Y
 * Short year:        %y
 * Month:             %f
 * Padded month:      %m
 * Month name:        %B
 * Short month name:  %b
 * Date:              %e
 * Padded date:       %d
 * Padded hours:      %H
 * Padded minutes:    %M
 * Padded seconds:    %S
 */
console.log(`The date is ${d.formatDate("%d/%m/%Y")}`);
```
