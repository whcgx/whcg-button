import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import "../theme/whcg-button-styles.js";

export class WhcgButton extends PolymerElement {
    static get template() {
        return html`

        <style>
             vaadin-button {
                --whcg-host-font-size: var(--whcg-button-host-font-size);
                --whcg-host-background-color: var(--whcg-button-host-background-color);
                --whcg-host-border-radius: var(--whcg-button-host-border-radius);
                --whcg-host-border-style: var(--whcg-button-host-border-style);
                --whcg-host-border-width: var(--whcg-button-host-border-width);
                --whcg-host-border-color: var(--whcg-button-host-border-color);
                --whcg-host-height: var(--whcg-button-host-height);
                --whcg-host-min-width: var(--whcg-button-host-min-width);
                --whcg-host-padding-top: var(--whcg-button-host-padding-top);
                --whcg-host-padding-bottom: var(--whcg-button-host-padding-bottom);
                --whcg-host-padding-left: var(--whcg-button-host-padding-left);
                --whcg-host-padding-right: var(--whcg-button-host-padding-right);
                
                --whcg-label-font-size: var(--whcg-button-label-font-size);
                --whcg-label-font-weight: var(--whcg-button-label-font-weight);
                --whcg-label-font-family: var(--whcg-button-label-font-family);
                --whcg-label-line-height: var(--whcg-button-label-line-height); 
                --whcg-label-padding-top: var(--whcg-button-label-padding-top);
                --whcg-label-padding-bottom: var(--whcg-button-label-padding-bottom);
                --whcg-label-padding-left: var(--whcg-button-label-padding-left);
                --whcg-label-padding-right: var(--whcg-button-label-padding-right);
                --whcg-label-color: var(--whcg-button-label-color);
             }
        </style>

        <vaadin-button>
            <slot></slot>
        </vaadin-button>

    `;
    }

    static get properties() {

        return {

        }
    }

    

    

}

window.customElements.define('whcg-button', WhcgButton);