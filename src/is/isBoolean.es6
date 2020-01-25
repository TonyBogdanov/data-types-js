/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default value => true === value || false === value ||
    '[object Boolean]' === Object.prototype.toString.call( value );
