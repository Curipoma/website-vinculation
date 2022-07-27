import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensions',
})
export class ExtensionsPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const pathAssets = 'assets/images/shared/files/';
    value = value ? value.toLowerCase() : value;
    switch (value) {
      case 'pdf':
      case '.pdf':
        return pathAssets + 'pdf.png';

      case 'jpg':
      case 'j.pg':
      case 'jpeg':
      case '.jpeg':
      case 'png':
      case '.png':
      case 'bmp':
      case '.bmp':
      case 'tiff':
      case '.tiff':
      case 'tif':
      case '.tif':
      case 'svg':
      case '.svg':
        return pathAssets + 'image.png';

      case 'txt':
      case '.txt':
      case 'doc':
      case '.doc':
      case 'docx':
      case '.docx':
        return pathAssets + 'doc.png';

      case 'xls':
      case '.xls':
      case 'xlsx':
      case '.xlsx':
      case 'csv':
      case '.csv':
        return pathAssets + 'excel.png';

      case 'zip':
      case '.zip':
      case 'rar':
      case '.rar':
      case '7z':
      case '.7z':
      case 'tar':
      case '.tar':
        return pathAssets + 'zip.png';

      case 'ptt':
      case '.ptt':
      case 'pptx':
      case '.pptx':
        return pathAssets + 'powerpoint.png';

      default:
        return pathAssets + 'other.png';
    }
  }
}
