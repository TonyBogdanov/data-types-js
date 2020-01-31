/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import load from '../load';

export default ( async() => {

    const object = Object.values( await load( [ 'object/flatObject' ] ) )[0];

    object.deeper = Object.assign( {}, object );
    object.deep = Object.assign( {}, object );

    return object;

} )();
