import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@vaadin/vaadin-list-box/src/vaadin-list-box.js';
import '@vaadin/vaadin-item/src/vaadin-item.js';
import '@vaadin/vaadin-dropdown-menu/src/vaadin-dropdown-menu.js';

import '../theme/whcg-lit-item-styles.js';
import '../theme/whcg-lit-list-box-styles.js';
import '../theme/whcg-lit-dropdown-styles.js';


/*
 * `WhcgNumberField`
 * 
 * @customElement
 * @polymer
 
 */
export class WhcgSelect extends PolymerElement {
    static get template() {
        return html `
      <style>
             vaadin-dropdown-menu {
                --whcg-host-before-font-size: var(--whcg-text-field-host-before-font-size);
                --whcg-host-before-height: var(--whcg-text-field-host-before-height);

                --whcg-host-padding-top: var(--whcg-text-field-host-padding-top);
                --whcg-host-padding-bottom: var(--whcg-text-field-host-padding-bottom);
                --whcg-host-padding-left: var(--whcg-text-field-host-padding-left);
                --whcg-host-padding-right: var(--whcg-text-field-host-padding-right);
                --whcg-host-haslabel-padding-top: var(--whcg-text-field-host-haslabel-padding-top);
                --whcg-host-haslabel-padding-bottom: var(--whcg-text-field-host-haslabel-padding-bottom);
                --whcg-host-haslabel-padding-left: var(--whcg-text-field-host-haslabel-padding-left);
                --whcg-host-haslabel-padding-right: var(--whcg-text-field-host-haslabel-padding-right);

                --whcg-label-font-size: var(--whcg-text-field-label-font-size);
                --whcg-label-font-weight: var(--whcg-text-field-label-font-weight);
                --whcg-label-font-family: var(--whcg-text-field-label-font-family);

                --whcg-label-color: var(--whcg-text-field-label-color);
                --whcg-label-host-focused-color: var(--whcg-text-field-label-host-focused-color);
                --whcg-label-host-hover-not-focused-color: var(--whcg-text-field-label-host-hover-not-focused-color);
                --whcg-label-host__dark-color: var(--whcg-text-field-label-host__dark-color);

                --whcg-label-padding-top: var(--whcg-text-field-label-padding-top);
                --whcg-label-padding-bottom: var(--whcg-text-field-label-padding-bottom);
                --whcg-label-padding-left: var(--whcg-text-field-label-padding-left);
                --whcg-label-padding-right: var(--whcg-text-field-label-padding-right);

                --whcg-input-field-font-family: var(--whcg-text-field-input-field-font-family);
                --whcg-input-field-font-size: var(--whcg-text-field-input-field-font-size);
                --whcg-input-field-font-weight: var(--whcg-text-field-input-field-font-weight);
                --whcg-input-field-background-color: var(--whcg-text-field-input-field-background-color);
                --whcg-input-field-host__dark-background-color: var(--whcg-text-field-input-field-host__dark-background-color);

                --whcg-input-field-host__shadow-box-shadow: var(--whcg-text-field-input-field-host__shadow-box-shadow);
                
                --whcg-input-field-border-radius: var(--whcg-text-field-input-field-border-radius);
                --whcg-input-field-border-style: var(--whcg-text-field-input-field-border-style);
                --whcg-input-field-border-width: var(--whcg-text-field-input-field-border-width);
                --whcg-input-field-border-color: var(--whcg-text-field-input-field-border-color);
                --whcg-input-field-padding-top: var(--whcg-text-field-input-field-padding-top);
                --whcg-input-field-padding-bottom: var(--whcg-text-field-input-field-padding-bottom);
                --whcg-input-field-padding-left: var(--whcg-text-field-input-field-padding-left);
                --whcg-input-field-padding-right: var(--whcg-text-field-input-field-padding-right);
              
                --whcg-value-color: var(--whcg-text-field-value-color);
                --whcg-value-placeholder-color: var(--whcg-text-field-value-placeholder-color);
                --whcg-value-host__dark-color: var(--whcg-text-field-value-host__dark-color);
                --whcg-value-min-height: var(--whcg-text-field-value-min-height);
                --whcg-overlay-background-color: red;

                --whcg-dropdown-button-color: var(--parmaco-base-color-100pct);
                --whcg-dropdown-button-hover-color: var(--parmaco-base-color-100pct);
                --whcg-dropdown-input-field-color: var(--parmaco-base-color-100pct);

                
                
             }


            vaadin-list-box {
                --whcg-items-slotted-vaadinitem-hover-not-disabled-background-color: var(--whcg-list-box-items-slotted-vaadinitem-hover-not-disabled-background-color);
                --whcg-items-slotted-vaadinitem-border-radius: var(--whcg-list-box-items-slotted-vaadinitem-border-radius);
                --whcg-items-slotted-vaadinitem-padding-right: var(--whcg-list-box-items-slotted-vaadinitem-padding-right);
                --whcg-items-slotted-vaadinitem-padding-left: var(--whcg-list-box-items-slotted-vaadinitem-padding-left);
                --whcg-items-slotted-vaadinitem-background-color: var(--whcg-list-box-items-slotted-vaadinitem-background-color);
             }

            vaadin-item {
                --whcg-host-font-size: var(--whcg-item-host-font-size);
                --whcg-host-min-height: var(--whcg-item-host-min-height);
                --whcg-host-before-content: var(--whcg-item-host-before-content);
                --whcg-host-before-font-family: var(--whcg-item-host-before-font-family);
                --whcg-host-before-font-size: var(--whcg-item-host-before-font-size);
                --whcg-host-before-color: var(--whcg-item-host-before-color);
                --whcg-host-before-margin-top: var(--whcg-item-host-before-margin-top);
                --whcg-host-before-margin-bottom: var(--whcg-item-host-before-margin-bottom);
                --whcg-host-before-margin-left: var(--whcg-item-host-before-margin-left);
                --whcg-host-before-margin-right: var(--whcg-item-host-before-margin-right);
                --whcg-content-font-family: var(--whcg-item-content-font-family);
                --whcg-content-font-size: var(--whcg-item-content-font-size);
                --whcg-content-line-height: var(--whcg-item-content-line-height);
                --whcg-content-color: var(--whcg-item-content-color);
                --whcg-content-host-selected-color: var(--whcg-item-content-host-selected-color);
                --whcg-content-host-disabled-font-family: var(--whcg-item-content-host-disabled-font-family);
                --whcg-content-host-disabled-font-size: var(--whcg-item-content-host-disabled-font-size);
                --whcg-content-host-disabled-color: var(--whcg-item-content-host-disabled-color);
                
            }

            

        </style>
	<vaadin-dropdown-menu id="vdm" on-value-changed="_appSelect" value="{{value}}" id="vaadinlistbox" placeholder="{{placeholder}}" label="{{label}}">
		<template>
			<vaadin-list-box>
				<template is="dom-repeat" items="{{objinput}}">
					<vaadin-item value$="[[item.value]]">[[item.caption]]<span> {{suffix}}</span></vaadin-item>
				</template>
			</vaadin-list-box>
		</template>
	</vaadin-dropdown-menu>

    `;
    }

    static get properties() {

        return {

            label: {
                type: String,
                notify: true,
                readOnly: false,
            },
            value: {
                type: String,
                notify: true,
                readOnly: false,
                //observer: '_valueChanged'
            },
            placeholder: {
                type: String,
                notify: true,
                readOnly: false,
            },
            suffix: {
                type: String,
                notify: true,
                readOnly: false,
            },
            kind: {
                type: String,
                notify: true,
                readOnly: false,
            },
            period: {
                type: String,
                notify: true,
                readOnly: false,
            },
            valueoutput: {
                type: String,
                notify: true,
                readOnly: false,
			},
			jsoninput: {
                type: String,
                notify: true,
				readOnly: false,
				observer: '_jsoninputChanged'
			},
			objinput: {
                type: Object,
                notify: true,
				readOnly: false,
            }
        }
	}
	
	_appSelect() {
		
		// console.log('CHANGED!!');
		// console.log(this.$.vdm.__data.value);
		this.valueoutput = this.$.vdm.__data.value;
	}

    _valueChanged() {
		this.valueoutput = this.value;
		// console.log('CHANGED!!');
		// console.log(this.$.vdm.__data.value);
		// this.valueoutput = this.$.vdm.__data.value;
	}
	
	_jsoninputChanged() {
		this.objinput = JSON.parse(this.jsoninput);
		// console.log('objInput');
		// console.log(this.objinput);
	}

    connectedCallback() {
		super.connectedCallback();
		//this.valueoutput = this.$.vdm.__data.value;
		this.valueoutput = this.value;

        let event = new CustomEvent('childrenattached', {bubbles: true, composed: true});
        // console.log('dispatchingEvent!!');
		this.dispatchEvent(event);
		// console.log('this.$.vaadinlistbox');
		// console.log(this.$.vaadinlistbox.shadowRoot);
		
		// this.$.vaadinlistbox.addEventListener('changed', console.log);
    }

}

window.customElements.define('whcg-select', WhcgSelect);
