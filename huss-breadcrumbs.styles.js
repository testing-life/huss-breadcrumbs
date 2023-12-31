import { css } from 'lit';
export const breadcrumbsStyles = css `
  :host {
    --linkMaxWidthMobile: 72px;
    --linkMaxWidthDesktop: 170px;
    --separatorUnicode: '\\27A1';
    --separatorUnicodeColour: #202a2f;
    --font: Arial;
    --fontColour: #688897;
    --lastLinkFontWeight: 800;
    --textDecoration: none;
    --hoverFontColour: #977768;
    --hoverFontWeight: 500;
    --hoverTextDecoration: underline;
    --fontSize: 14px;
    --lastLinkFontColour: #93b649;
    --lastLinkFontWeight: 800;
  }

  .huss-breadcrumbs__list {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    font-size: var(--text-small);
    padding: 0;
    margin: 0;
    font-family: var(--font);
    font-size: var(--fontSize);
  }

  a {
    color: var(--fontColour);
    text-decoration: var(--textDecoration);
    padding-inline: 8px;
    display: inline-block;
    max-width: var(--linkMaxWidthMobile);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a:hover:is(a),
  a:focus:is(a) {
    cursor: pointer;
    color: var(--hoverFontColour);
    font-weight: var(--hoverFontWeight);
    text-decoration: var(--hoverTextDecoration);
  }

  @media (width > 48rem) {
    a {
      max-width: var(--linkMaxWidthDesktop);
    }
  }

  .huss-breadcrumb__list-item {
    display: flex;
    align-items: center;
  }

  .huss-breadcrumb__list-item:after {
    content: var(--separatorUnicode);
    color: var(--separatorUnicodeColour);
    width: 9px;
  }

  .huss-breadcrumb__list-item:first-child a {
    padding-inline-end: 8px;
    padding-inline-start: 0;
  }

  .huss-breadcrumb__list-item:last-child {
    color: var(--lastLinkFontColour);
    font-weight: var(--lastLinkFontWeight);
  }

  .huss-breadcrumb__list-item:last-child:after {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    a {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    ):not(:nth-last-child(3))::after {
    display: none;
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
    display: none;
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
    content: '...';
    display: inline-block;
    padding-inline: 10px;
  }

  @media (width > 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      a {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      ):not(:nth-last-child(3))::after {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      a {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2)):after {
      display: none;
    }

    .--is-folded .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: none;
    }

    .--is-folded .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: inline-block;
    }

    .--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      content: '...';
      display: inline-block;
      padding-inline: 10px;
    }

    .--is-folded.--is-folded.--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::after {
      content: '>';
      display: inline-block;
    }
  }

  .--is-disabled > a {
    pointer-events: none;
  }

  .--is-disabled > a:hover {
    cursor: default;
    color: var(--linkColour);
  }
`;
//# sourceMappingURL=huss-breadcrumbs.styles.js.map