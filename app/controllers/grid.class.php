<?php
namespace LAdmin\Controllers;

class Grid extends \Phink\MVC\TPartialController {

    protected $stmt = NULL;
    protected $cmd = NULL;
    protected $cols = array();
    protected $dataGrid = NULL;
    protected $cn = NULL;
    protected $pager = NULL;
    protected $onclick = NULL;
    protected $anchor = NULL;
    protected $pageCount = 0;
    protected $index = 1;

    public function setPageCount($value) {
        $this->pageCount = $value;
    }

    public function setAnchor($value) {
        $this->anchor = $value;
    }
    
    public function setOnclick($value) {
        $this->onclick = $value;
    }
    
    public function init() {
        $this->index = $this->request->getQueryArguments('pagenum');
        $this->pageCount = ($this->pageCount) ? $this->pageCount :  $this->request->getQueryArguments('pagecount');

        $this->cmd = $this->model->getSchema('soundlib');
    }

    public function getData($pagecount, $pagenum) {
        $id = $this->getViewName();
        $this->data = \Phink\Web\UI\Widget\Plugin\TPlugin::getGridData($id, $this->cmd, $this->pageCount);
        $this->response->setData('grid', $this->data);
    }
    
}
