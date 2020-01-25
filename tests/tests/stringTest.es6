/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isString from '../../src/is/isString';

provider.test( 'isString', 'string', isString );
