<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define('CUSTOM_NAMESPACE', 'LAdmin');
include 'phink/web/static_application.php';

//use Phink\Web\TWebApplication;
/**
 * Description of application
 *
 * @author david
 */
/*
class Index extends TWebApplication {
    //put your code here
    public static function main() {
        $app = new Index();
//        $app->setRedis(
//            ['host' => '192.168.1.8',
//            'port' => 6379,
//            'database' => 15]
//        );
        $app->run();
    }
}
*/
Phink\Web\TWebApplication::create();

