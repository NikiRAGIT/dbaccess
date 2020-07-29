const { BusinessLogic } = require("../src/LambdaUtils");

//BEST PRACTICE using Chai for human readable assertions

//BEST PRACTICE disable automock so we don't taint the target code for tests
jest.disableAutomock() ;

businessLogic = null ;

//init the business logic object to be tested
beforeAll( () =>
{
    businessLogic = new BusinessLogic() ;
});

describe( 'Test calculations method', ()=>
{
    test( 'Returns correct answer for calculation over array of positive numbers.', ()=>
    {
        expect( businessLogic.do_calculation( [1,2,3,4,5])).toBe( 15) ;

    });

    test( 'Returns correct answer for calculation over array of negative numbers.', ()=>
    {
        expect( businessLogic.do_calculation( [-1,-2,-3,-14,-5])).toBe( -25) ;
    });

    test( 'Returns correct answer for calculation over array of mixed numbers.', ()=>
    {
        expect( businessLogic.do_calculation( [-1,-2,0,7,17])).toBe( 21) ;
    });
}) ;

//we'll just test get_db_data as it fully exercises the other function
describe( 'Test fetching data from db.', ()=>
{
    //mock a db connection object from a virtual Database module
    jest.mock( './Database', () =>
    {
        return new class DBConnection
        {
            //define function of interest
            get_records( key)
            {
                return key == "numbers" ? { non_essential_key1 : "something", essential_key1 : "euler", essential_key2 : 3141592, non_essential_key2 : "something else"} : {} ;
            }
        }
    }, { virtual : true});

    //test the target function using mocked module objects
    test( 'Returns correct essential data.', ()=>
    {
        dbconnection = require('./Database') ;
        //BEST PRACTICE expect.toBe vs. expect.toEqual for objects
        expect( businessLogic.get_db_data( "numbers", dbconnection )).toEqual( { essential_key2 : 3141592 ,essential_key1 : "euler"}) ;
    });

    test( 'Returns null on bad key passed in.', ()=>
    {
        dbconnection = require('./Database') ;
        //BEST PRACTICE expect.toBe vs. expect.toEqual for objects
        expect( businessLogic.get_db_data( "strings", dbconnection )).toBeNull() ;
    });
});

