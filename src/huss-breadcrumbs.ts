/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, PropertyValueMap, html} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import {breadcrumbsStyles} from './huss-breadcrumbs.styles';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('huss-breadcrumbs')
export class HussBreadcrumbs extends LitElement {
  static override styles = [breadcrumbsStyles];

  @queryAssignedElements({slot: 'breadcrumbs', selector: 'a'})
  _breadcrumbs: Array<HTMLElement>;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  protected override firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (this._breadcrumbs.length) {
      this.requestUpdate();
    }
  }

  override render() {
    return html`
      <ul class="huss-breadcrumb__list">
        ${this._breadcrumbs.map(
          (breadcrumb: HTMLElement) =>
            html`<li class="huss-breadcrumb__list-item">${breadcrumb}</li>`
        )}
      </ul>
      <slot name="breadcrumbs"></slot>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'huss-breadcrumbs': HussBreadcrumbs;
  }
}
