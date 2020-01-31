/*
 * Copyright (c) Tony Bogdanov <tonybogdanov@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect } from 'chai';
import load from './values/load';

export default {

    run() {

        clearTimeout( this.runTimeout );
        this.runTimeout = setTimeout( () => {

            for ( const test in this.tests ) {

                if ( ! this.tests.hasOwnProperty( test ) ) {

                    continue;

                }

                describe( test, () => {

                    for ( const text in this.tests[ test ] ) {

                        if ( ! this.tests[ test ].hasOwnProperty( text ) ) {

                            continue;

                        }

                        it( text, this.tests[ test ][ text ] );

                    }

                } );

            }

            run();

        }, 100 );

    },

    async test( test, validator, validRules, invalidRules ) {

        const valid = await load( validRules );
        const invalid = await load( invalidRules );

        if ( 'undefined' === typeof this.tests ) {

            this.tests = {};

        }

        if ( ! this.tests.hasOwnProperty( test ) ) {

            this.tests[ test ] = {};

        }

        const register = ( map, truthy ) => {

            for ( const name in map ) {

                if ( ! map.hasOwnProperty( name ) ) {

                    continue;

                }

                this.tests[ test ][ `returns ${ truthy ? 'TRUE' : 'FALSE' } for ${ name }` ] = () => expect(

                    validator( map[ name ] ),
                    `Actual value: (${ typeof map[ name ] }) ${ JSON.stringify( map[ name ] ) }\n`

                ).to.be[ truthy ? 'true' : 'false' ];

            }

        };

        register( valid, true );
        register( invalid, false );

        this.run();

    }

};
