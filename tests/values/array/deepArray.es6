/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { resolve } from '../loader';

export default new Promise( ( _resolve, reject ) => resolve( 'array/flatArray' ).then( flatArray =>
    _resolve( flatArray.concat( [ flatArray, flatArray.concat( [ flatArray ] ) ] ) ), reject ) );
