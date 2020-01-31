/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import load from '../load';

export default ( async () => {

    const object = {};

    for ( const value of Object.values( await load( [

        '*',
        '!array/flatArray',
        '!array/deepArray',
        '!object/emptyObject',
        '!object/flatObject',
        '!object/deepObject',

    ] ) ) ) {

        object[ Math.random() ] = value;

    }

    object[ Math.random() ] = [ 'flat', 'array' ];
    object[ Math.random() ] = [ 'deep', [ 'array' ] ];

    object[ Math.random() ] = {};
    object[ Math.random() ] = { flat: 'object' };
    object[ Math.random() ] = { deep: { nonFlat: 'object' } };

    return object;

} )();
