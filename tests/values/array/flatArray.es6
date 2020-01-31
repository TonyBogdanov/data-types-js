/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import load from '../load';

export default ( async () => {

    return Object.values( await load( [

        '*',
        '!array/flatArray',
        '!array/deepArray',
        '!object/emptyObject',
        '!object/flatObject',
        '!object/deepObject',

    ] ) ).concat( [

        [ 'flat', 'array' ],
        [ 'deep', [ 'array' ] ],
        {},
        { flat: 'object' },
        { deep: { nonFlat: 'object' } },

    ] );

} )();
