/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isUndefined from '../../src/is/isUndefined';

provider.test( 'isUndefined', isUndefined, [ 'undefined' ], [ '*', '!undefined' ] );
