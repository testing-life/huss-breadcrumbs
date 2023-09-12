/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import {breadcrumbsStyles} from './huss-breadcrumbs.styles';

/**
 * Breadcrumbs which can collapse in the middle, leaving only first and several last crumbs visible.
 * @element huss-breadcrumbs
 * @slot breadcrumbs - Content to be displayed in as breadcrumbs. Expects links.
 * @cssprop --linkMaxWidthMobile - Carousel height on small screens.
 * @cssprop --linkMaxWidthDesktop - Carousel height on medium screens.
 * @cssprop --separatorUnicode - Carousel height on large screens.
 * @cssprop --separatorUnicodeColour - Width of dots for carousel navigation.
 */
@customElement('huss-breadcrumbs')
export class HussBreadcrumbs extends LitElement {
  static override styles = [breadcrumbsStyles];

  @queryAssignedElements({slot: 'breadcrumbs', selector: 'a'})
  private _breadcrumbs: Array<HTMLElement>;

  /**
   * An option telling the carousel that you are displaying either images or other components.
   * @type {image | anyContent}
   * @attr variant
   */
  @property({type: Number})
  collapseAfter: number;

  protected override firstUpdated(): void {
    if (this._breadcrumbs.length) {
      this.requestUpdate();
    }
  }

  override render() {
    console.log(this.collapseAfter);
    return html`
      <ul
        class="huss-breadcrumbs__list ${this.collapseAfter !== undefined &&
        this._breadcrumbs.length > this.collapseAfter
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
