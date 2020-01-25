/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { resolve } from '../loader';

export default new Promise( ( _resolve, reject ) => resolve( 'object/flatObject' ).then( ( [ object ] ) => {

    object.deeper = Object.assign( {}, object );
    object.deep = Object.assign( {}, object );

    _resolve( object );

}, reject ) );
