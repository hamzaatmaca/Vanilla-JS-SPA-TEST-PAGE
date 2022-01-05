import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';



const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.login}

	<div>
		<h1>
			LOGIN TEST PAGE
		</h1>
	</div>
`;
class Login extends HTMLElement{
	constructor(){
		super();

		this.attachShadow({mode : 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		
	}
	
	connectedCallback(){
		
	}
	disconnectedCallback(){
		
	}
}

window.customElements.define('login-page', Login);
