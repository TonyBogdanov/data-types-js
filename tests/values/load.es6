/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require( 'path' );
const glob = require( 'glob' );

const valuesPath = path.resolve( './tests/values' );
const values = [];

for ( const file of glob.sync( `${ valuesPath }/*/*.es6` ) ) {

    let name = path.relative( valuesPath, file );

    name = name.substr( 0, name.length - path.extname( name ).length );
    name = name.replace( /\\/g, '/' );
    name = name.split( '/' );

    values.push( { name: name, file: file } );

}

export default async rules => {

    rules = rules
        .map( rule => rule.split( '/' ) )
        .map( rule => 1 === rule.length ? rule.concat( [ '*' ] ) : rule )
        .map( rule => ( { positive: '!' !== rule[0].substr( 0, 1 ), first: rule[0], second: rule[1] } ) )
        .map( rule => ( { positive: rule.positive, first: rule.positive ? rule.first : rule.first.substr( 1 ),
            second: rule.second } ) )
        .sort( rule => rule.positive ? -1 : 1 );

    const positive = rules.filter( rule => rule.positive );
    const negative = rules.filter( rule => ! rule.positive );

    const filter = byPositive => value => {

        for ( const rule of ( byPositive ? positive : negative ) ) {

            if (

                ( '*' === rule.first || value.name[0] === rule.first ) &&
                ( '*' === rule.second || value.name[1] === rule.second )

            ) {

                return byPositive;

            }

        }

        return ! byPositive;

    };

    const result = {};

    for ( const value of values.filter( filter( true ) ).filter( filter( false ) ) ) {

        let _value = ( await import( value.file ) ).default;
        if ( _value instanceof Promise ) {

            _value = await _value;

        }

        result[ value.name.join( '/' ) ] = _value;

    }

    return result;

};
