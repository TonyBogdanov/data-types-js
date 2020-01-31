/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isArray from '../../src/is/isArray';

provider.test( 'isArray', isArray, [ 'array' ], [ '*', '!array' ] );
