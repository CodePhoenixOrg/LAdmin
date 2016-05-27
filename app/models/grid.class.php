<?php


namespace LAdmin\Models;
//require_once 'phink/mvc/model.php';
//require_once 'phink/auth/authentication.php';
require_once APP_DATA . 'info_schema_connection.php';


class Grid extends \Phink\MVC\TModel
{

    public function init()
    {
        $this->connector = new \LAdmin\Data\InfoSchemaConnection();
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

        $cmd = new \Phink\Data\Client\PDO\TPdoCommand($this->connector);
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
