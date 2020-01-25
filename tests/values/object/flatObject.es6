/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { resolve } from '../loader';

export default new Promise( ( _resolve, reject ) => resolve( [

    'array/index', 'array/flatArray', 'array/deepArray',
    'object/index', 'object/emptyObject', 'object/flatObject', 'object/deepObject',

], true, false ).then( values => {

    const object = {};

    for ( const value of values ) {

        object[ Math.random() ] = value;

    }

    object[ Math.random() ] = [ 'flat', 'array' ];
    object[ Math.random() ] = [ 'deep', [ 'array' ] ];

    object[ Math.random() ] = {};
    object[ Math.random() ] = { flat: 'object' };
    object[ Math.random() ] = { deep: { nonFlat: 'object' } };

    _resolve( object );

}, reject ) );
