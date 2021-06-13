import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magicpipe'
})
export class MagicpipePipe implements PipeTransform {

  transform(value, count): unknown {
    if (value==0){
      console.log("si es 0")
    }
    console.log("value",value)
    return {"xx":1};
  }

}
