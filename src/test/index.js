const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'retrieveBooks()', () => {
    beforeEach( () => {
      window.document.body.innerHTML = '<div></div>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
      chai.spy.on( window, 'fetch' );
      await retrieveBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'https://anapioficeandfire.com/api/books' );
    } )
  } )
})


describe( "index.js", () => {
    describe( 'retrieveCharacters()', () => {
  
      beforeEach( () => {
        window.document.body.innerHTML = '<div></div>'
        window.fetch = require( 'node-fetch' );
      } );
  
      it( "sends a fetch request to 'https://anapioficeandfire.com/api/characters'", async () => {
        chai.spy.on( window, 'fetch' );
        await retrieveCharacters()
        expect( window.fetch, "A fetch to the API was not found" )
          .to.have.been.called.with( 'https://anapioficeandfire.com/api/characters' );
      } )
    } )
  })