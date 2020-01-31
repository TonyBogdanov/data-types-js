/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isScalar from '../../src/is/isScalar';

provider.test(

    'isScalar',
    isScalar,

    [

        'boolean',
        'integer',
        'float',
        'infinite',
        'string',

    ],

    [

        '*',
        '!boolean',
        '!integer',
        '!float',
        '!infinite',
        '!string',

    ],

);
