/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isNumber from '../../src/is/isNumber';

provider.test( 'isNumber', isNumber, [ 'integer', 'float', 'infinite' ], [ '*', '!integer', '!float', '!infinite' ] );
