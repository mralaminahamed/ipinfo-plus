/*
* IP Info Plus
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/ipinfoplus/
* */

'use strict';
import {Crawler} from "./additional";
import {acsComPortFront} from "./messanger";


/*Login/Registration tracker*/
const Clr = new Crawler(window.location.href);
Clr.init(function () {
    acsComPortFront.postMessage({
        command: "saveNavigateData",
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*Login/Registration tracker*/