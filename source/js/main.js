import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {helloJs} from './modules/hello';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

helloJs();
