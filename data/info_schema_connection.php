<?php

namespace Ladmin\Data;

//require_once 'phoenix/data/client/pdo/pdo_connection.php';

class InfoSchemaConnection extends \Phoenix\Data\Client\PDO\TPdoConnection {
    public function __construct() {
        $config = new \Phoenix\Data\Client\PDO\TPdoConfiguration(\Phoenix\Data\TServerType::MYSQL, 'information_schema', 'localhost', 'root', '');
        //$config = new TPdoConfiguration(TServerType::SQLSERVER, 'Alphas', 'DELPHI', 'sa', '1p2+ar');
        parent::__construct($config);
    }
}
