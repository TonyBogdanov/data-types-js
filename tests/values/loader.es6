/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require( 'path' );
const glob = require( 'glob' );

const valuesPath = path.resolve( './tests/values' );
const values = glob.sync( `${ valuesPath }/*/*.es6` )
                   .map( file => path.relative( valuesPath, file ) )
                   .map( file => file.substr( 0, file.length - path.extname( file ).length ) );

function objectMap( object, callback ) {

    const result = {};
    let index = 0;

    for ( const key in object ) {

        if ( ! object.hasOwnProperty( key ) ) {

            continue;

        }

        result[ key ] = callback( object[ key ], key, index++ );

    }

    return result;

}

function normalize( name ) {

    if ( -1 === values.indexOf( name ) ) {

        name = `${ name }/index`;

    }

    if ( -1 === values.indexOf( name ) ) {

        throw `Invalid value path: ${ name }.`;

    }

    return name;

}

function collapse( value ) {

    return new Promise( ( resolve, reject ) => {

        if ( value instanceof Promise ) {

            return value.then( result => collapse( result ).then( resolve, reject ), reject );

        }

        if ( null !== value && Array.isArray( value ) ) {

            return Promise.all( value.map( collapse ) ).then( resolve, reject );

        }

        if ( null !== value && value === Object( value ) && 'Object' === value.constructor.name ) {

            return collapse( Object.values( value ) ).then( values => {

                resolve( objectMap( value, ( value, key, index ) => values[ index ] ) );

            } );

        }

        resolve( value );

    } );

}

function load( name ) {

    return new Promise( ( resolve, reject ) => {

        import( `${ valuesPath }/${ name }` )
            .then( result => collapse( result.default ).then( resolve, reject ), reject );

    } );

}

function invert( types, onlyIndexes = false ) {

    return values.filter( value => -1 === types.indexOf( value ) &&
        ( ! onlyIndexes || '/index' === value.substr( value.length - 6 ) ) );

}

function resolve( types, ignore = false, ignoreNonIndexes = true ) {

    if ( 'string' === typeof types ) {

        types = [ types ];

    }

    types = types.map( normalize );
    if ( ignore ) {

        types = invert( types, ignoreNonIndexes );

    }

    return new Promise( ( resolve, reject ) => Promise.all( types.map( load ) ).then( resolve, reject ) );

}

export { invert, resolve };
