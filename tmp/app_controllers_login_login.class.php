<?php
namespace Detroit\Controllers;

/**
 * Description of logme
 *
 * @author david
 */
class Login extends \Phoenix\Web\UI\TControl {
    //put your code here
    
    private $_login = '';
    private $_password = '';
    protected $headers = '';
    
    public function init() {
        foreach($_SERVER as $key => $value) {
            if (substr($key, 0, 5) == 'HTTP_') 
            { 
                $this->headers .= "$key = $value<br />";
//                $this->headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value; 
            } 
        }
    }
       
    public function logout() {
        session_destroy();
        session_start();
        
        $this->response->setMessage("logout");
    }
    
    public function authenticate() {
        $result = FALSE;
        $this->_login = $this->request->getQueryArguments('login');
        $this->_password = $this->request->getQueryArguments('password');
        $container = $this->request->getQueryArguments('container');
        
        $token = '';
        if($this->_login && $this->_password) {
            $token = $this->model->getPermission($this->_login, $this->_password);
        }
        $result = ($token) ? 1 : 0;
            
        \Phoenix\Log\TLog::debug('token : ' . $token);

        if($result) {
            \Phoenix\Log\TLog::debug('result OK');
            
            $this->request->addSubRequest('master', SERVER_ROOT, MASTER_PAGE . '?token=!' . $token);
            $this->request->addSubRequest('page', SERVER_ROOT, HOME_PAGE . '?token=!' . $token);
            $result = $this->request->execSubRequests();
            
            $master = $result['master'];
            $page = $result['page'];        

            $masterHtml = ($container && $master['html']) ? $master['html'] : '';
            $pageHtml = ($page['html']) ? $page['html'] : '';

            $this->response->setData('master', $masterHtml);
            $this->response->setData('container', $container);
            $this->response->setData('page', $pageHtml);
            $this->response->setToken($token);
//            $this->response->setData('masterHeader', $master['code'] . ';' . $master['header']);
//            $this->response->setData('pageHeader', $page['code'] . ';' . $page['header']);
            $this->response->setReturn(200);
        } else {
            $this->response->setToken($token);
            $this->response->setReturn(403);
        }
    }
    <form class="form-signin" >
        <h2 class="form-signin-heading">Code Ph&oelig;nix (&alpha;lph&alpha;)</h2>
      <input class="form-control" type="text" id="login" name="login" placeholder="Identifiant" value="lambda">
      <input class="form-control" type="password" id="password" name="password" placeholder="Mot de passe" value="1MF14m2p97">
      <button class="btn btn-lg btn-primary  btn-block" type="button" name="valider" value="ok" id="authenticate" >Valider</button>
      <div id="message" style="color: red;">
      </div>
    </form>
<div>
    <?php echo $this->headers; ?>
</div>

