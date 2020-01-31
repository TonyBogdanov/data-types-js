/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import load from '../load';

export default ( async () => {

    const flatArray = Object.values( await load( [ 'array/flatArray' ] ) )[0];
    return flatArray.concat( [ flatArray, flatArray.concat( [ flatArray ] ) ] );

} )();
