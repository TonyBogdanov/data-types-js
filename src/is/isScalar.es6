/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isString from './isString';

export default value => isBoolean( value ) || isNumber( value ) || isString( value );
