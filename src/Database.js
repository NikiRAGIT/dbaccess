class Database
{
    constructor( credentials)
    {
        this._credentials = credentials ;
    }

    /**
     * @function connect - self explaining
    */
    connect ()
    {
        //code to establish connection to db
        this._connected = true ; //supposed to be return status of connection
        return this._connected ;
    }

    /**
     * @function insert_record - inserts the given record into the database table
     * @param {string} relation - target table 
     * @param {Array} record - an associative array of whose keys are attribute names of the relation and whose values are their corresponding entries
     * @returns {boolean} true if transaction completed without fault else false
     */
    insert_record ( relation, record)
    {
        //require connection to db
        //insert data to relation
        return true; //return status of transation
    }

    /** 
     * @function update_record - updates the columns of an extant database table
     * @param {string} relation  - the table name
     * @param {Array} primary_key - key-value pairs of columns whose values will be used to identify the target columns to be updated in the relation
     * @param {Array} record - key-value pairs of columns to update and their corresponding values
     * @returns {boolean} true if transaction completed without fault else false
    */
    update_record ( relation, primary_key, record)
    {
        //require connection to db
        //get attributes of relation
        //update available attributes of relation
        return true ; //return status of transaction
    }


    /**
     * @function get_records - finds the records matching the given primary key and returns it as column-value pairs
     * @param {string} relation - name of target table
     * @param {Array} identity_key - identity of the row to return as a column/attribute-value pair
     * @returns {Array} array of associative arrays whose keys are attribute names and values are their corresponding entries
     */
    get_records ( relation, identity_key)
    {
        //require connection
        //get relevant rows from relation
        return new Array() ; //return the necessary data/associative array.
    }

    get credentials() 
    {
        return this._credentials ;
    }
}

module.exports.Database = Database ;