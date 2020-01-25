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

    values.push( [ 'flat', 'array' ] );
    values.push( [ 'deep', [ 'array' ] ] );

    values.push( {} );
    values.push( { flat: 'object' } );
    values.push( { deep: { nonFlat: 'object' } } );

    _resolve( values );

}, reject ) );
