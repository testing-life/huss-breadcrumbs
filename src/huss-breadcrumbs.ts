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
  state,
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

  @queryAssignedElements({slot: 'icon', selector: 'p'})
  _icon: Array<HTMLElement>;
  /**
   * The name to say "Hello" to.
   */
  @state()
  icon: any = null;

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
    if (this._icon.length) {
      this.icon = this._icon[0];
    }
  }

  override render() {
    return html`
      <ul
        class="huss-breadcrumbs__list ${this._breadcrumbs.length > 5
          ? '--is-folded'
          : ''}"
      >
        ${this._breadcrumbs.map(
          (breadcrumb: HTMLElement, index: number) =>
            html`<li
              class="huss-breadcrumb__list-item ${this._breadcrumbs.length ===
              index + 1
                ? '--is-disabled'
                : null}"
            >
              ${breadcrumb}
            </li>`
        )}
      </ul>
      <slot name="breadcrumbs"></slot>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'huss-breadcrumbs': HussBreadcrumbs;
  }
}
