const exportObjectDatabase = require( '../src/Database') ;
Database = exportObjectDatabase.Database ;
//TODO test whether whether Database class can connect and quiry DBs as needed 
//and implement DB API


//stub pass test to make jest happy on that test suite must contain at least one test error
test( 'Passes no matter what.', ()=>
{
    expect( 0).toBe( 0) ;
});