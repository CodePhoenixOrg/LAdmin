<?php
namespace Ladmin\Controllers;

use Phoenix\Web\UI\TControl;

class PasswordGenerator extends TControl
{
    
       
<h4 class="form-signin-heading">Générateur de mot de passe fort</h4>
<input class="input-block-level" type="text" id="password" readonly="readonly" name="password" placeholder="Mot de passe fort">
<input class="input-block-level" type="text" id="mnemonic" readonly="readonly" name="mnemonic" placeholder="Mnémonique">
<button class="btn btn-large btn-primary" type="button" name="valider" value="ok" onclick="displayPassword();" >Générer</button>
</form>

<script type="text/javascript" src="js/strongPasswordGenerator.js"></script>
