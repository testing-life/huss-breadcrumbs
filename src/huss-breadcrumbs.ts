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
 * @cssprop --linkMaxWidthMobile - How long should a bredcrumb be on small screens.
 * @cssprop --linkMaxWidthDesktop - How long should a bredcrumb be on large screens.
 * @cssprop --separatorUnicode - A symbol for separator. Expectes escaped unicode and default is \27A1 (right arrow)
 * @cssprop --font - Font family for all breadcrumbs.
 * @cssprop --fontColour - Colour for all breadcrumbs.
 * @cssprop --fontSize - Font size for all breadcrumbs.
 * @cssprop --lastLinkFontColour - Colour of the last (current) link.
 * @cssprop --lastLinkFontWeight - Weight for the separator.
 * @cssprop --textDecoration - Text decoration for all links.
 * @cssprop --hoverFontColour - Text colour for hover state. Last link does not have a hover state.
 * @cssprop --hoverFontWeight - Font weight for hover state. Last link does not have a hover state.
 */
@customElement('huss-breadcrumbs')
export class HussBreadcrumbs extends LitElement {
  static override styles = [breadcrumbsStyles];

  @queryAssignedElements({slot: 'breadcrumbs', selector: 'a'})
  private _breadcrumbs: Array<HTMLElement>;

  /**
   * After how many elements should the list collapse, keeping only the first and last three elements (on large screen).
   * @type {number}
   * @attr collapseAfter
   */
  @property({type: Number})
  collapseAfter: number;

  protected override firstUpdated(): void {
    if (this._breadcrumbs.length) {
      this.requestUpdate();
    }
  }

  override render() {
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
