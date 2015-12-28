<?php


namespace Ladmin\Models;
//require_once 'phoenix/mvc/model.php';
//require_once 'phoenix/auth/authentication.php';
require_once APP_DATA . 'info_schema_connection.php';


class Grid extends \Phoenix\MVC\TModel
{

    public function init()
    {
        $this->connector = new \Ladmin\Data\InfoSchemaConnection();
        $this->connector->open();
    }

    
    public function getSchema($schema)
    {
        
        $sql = <<<SELECT
SELECT 
    `table_schema` as `Database`, `table_name` as `Table`, `column_name` as `Column`
FROM
    `columns`
WHERE
    table_schema = '$schema';
SELECT;

        $cmd = new \Phoenix\Data\Client\PDO\TPdoCommand($this->connector);
        $cmd->setSelectQuery($sql);

        return $cmd;
    }

    public function preRender() {
        //echo $this->cmd->queries->select . '<br>';
    }

    public function __destruct() {
        $this->connector->close();
    }
}
