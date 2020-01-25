/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isNaN from './isNaN';

export default value => ! isNaN( value ) && '[object Number]' === Object.prototype.toString.call( value );
