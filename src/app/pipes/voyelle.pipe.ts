import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelle'
})
export class VoyellePipe implements PipeTransform {

  transform(ch: any) {
    // let newCh = ""
    // for (let i = 0; i < ch.length; i++) {
    //   if (ch[i] === 'a' || ch[i] === 'e' || ch[i] === 'i' || ch[i] === 'o' || ch[i] === 'u') {
    //     newCh = newCh + "*"
    //   } else {
    //     newCh = newCh + ch[i]
    //   }
    // }    return newCh

    return ch.replace(/[ aeiouAEIOU]/g, '*');
  }

}

