/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isInfinite from './isInfinite';
import isNumber from './isNumber';

export default value => ! isInfinite( value ) && isNumber( value ) && 0 === value % 1;
