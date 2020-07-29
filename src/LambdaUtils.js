
//not covered by tests
function eventHandler( event, context, callback)
{
    //depending on event properties we'll call some helper functions

    //get_paper_review_language
}
//insert event
//get info event
//update info event
//Event contains data as well
//handler calls multiple functions
class BusinessLogic 
{
    get_db_data( key, db_connection)
    {
        //query db
        var result = db_connection.get_records( key) ;
        //reformat data
        try{
            //return data
            return this.clean_data( result) ;
        }catch( ee)
        {
            return null ;
        }
    }

    //just sums elements of array
    //we simulate mathematical processing over some data
    do_calculation( bunch_of_numerical_data)
    {
        var total = 0 ;
        bunch_of_numerical_data.forEach(element => {
            total += element
        });
        return total ;
    }

    //we simulate communication over a network connection
    //assuming we had some protocol that responds with
    //onexx - when still processing request
    //forxx - when requester made an error
    //treexx - when re-routing caller
    //twoxx - when accepted
    //fivexx - when error occurs at requested service
    communicate_to_remote( data, remote_connection)
    {
        return remote_connection.communicate( data) ;
    }

    clean_data( array_of_data)
    {
        //we drop some values from array and return essential ones
        if ( array_of_data["essential_key1"] == null || array_of_data["essential_key2"] == null)
        {
            throw "myErrorEvent" ;
        }

        return { essential_key1 : array_of_data["essential_key1"],
        essential_key2 : array_of_data["essential_key2"]
        };
    }
}

module.exports.BusinessLogic = BusinessLogic ;