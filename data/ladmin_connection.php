<?php

namespace LAdmin\Data;

class LAdminConnection extends \Phink\Data\Client\PDO\TPdoConnection {
    public function __construct() {
        $config = new \Phink\Data\Client\PDO\TPdoConfiguration(\Phink\Data\TServerType::MYSQL, 'ladmin', 'localhost', 'ladmin', 'demo');
        
        parent::__construct($config);
    }
}
