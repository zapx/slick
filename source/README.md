# @zapx/slick
Support angular 6+, slick v1.8.1
## Install

```sh
  ng add @zapx/slick
  ```
All config will be auto imports in file `angular.json` and `package.json`
## Example
`app.component.html`
```html
<zapx-slick [options]="options">
  <div>
    <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" width="100%">
  </div>
  <div>
    <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" width="100%">
  </div>
  <div>
    <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" width="100%">
  </div>
  <div>
    <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" width="100%">
  </div>
  <div>
    <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" width="100%">
  </div>
</zapx-slick>
```
`app.component.ts`
```typescript
import { SlickOptions } from '@zapx/slick';
...
...
export class AppComponent implements OnInit{
  title = 'zapx-slick-test';
  options: SlickOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
  };
  ngOnInit() {
  }
}
```

## Features
* Auto imports scripts and styles in `angular.json`.
* Auto install dependencies (`jquery`, `slick-carousel`).

## Comming soon
* Add all event of slick.
* Working in new version and old verson.
* Add UT testing.