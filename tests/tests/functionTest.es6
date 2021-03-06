/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isFunction from '../../src/is/isFunction';

provider.test( 'isFunction', isFunction, [ 'function' ], [ '*', '!function' ] );
