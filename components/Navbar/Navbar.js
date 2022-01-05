import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';

const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.navbar}
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
	  <div class="container-fluid">
	    
	    <a class="navbar-brand me-5" href="/client/">E-COMMERCE TEST PAGE</a>
	   
	       <ul class="navbar-nav  mb-2 mb-lg-0">

	       	<li class="nav-item me-1">

	          <a class="nav-link" href="/client#login">
		          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
				    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
				  </svg>

		          Login
	          </a>

	        </li>
	        
	        <li class="nav-item me-1">

	          <a class="nav-link" href="/client#register">
	          	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
				  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
				</svg>

				Register
	          </a>

	        </li>

	       </ul>

	    
	  </div>
	</nav>
`;
class Navbar extends HTMLElement{
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

window.customElements.define('nav-bar', Navbar);
