/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import provider from '../tester';
import isEmpty from '../../src/is/isEmpty';

provider.test(

    'isEmpty',
    isEmpty,

    [

        'undefined',
        'null',
        'boolean/false',
        'integer/zero',
        'string/empty',
        'string/zero',
        'array/emptyArray',
        'object/emptyObject',
        'class/testClass',

    ],

    [

        '*',
        '!undefined',
        '!null',
        '!boolean/false',
        '!integer/zero',
        '!string/empty',
        '!string/zero',
        '!array/emptyArray',
        '!object/emptyObject',
        '!class/testClass',

    ],

);
