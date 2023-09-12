import {css} from 'lit';

export const breadcrumbsStyles = css`
  :host {
    --linkMaxWidthMobile: 7px;
    --linkMaxWidthDesktop: 170px;
  }

  .huss-breadcrumbs__list {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    font-size: var(--text-small);
    padding: 0;
    margin: 0;
  }

  .huss-breadcrumb__link {
    text-decoration: none;
    padding-inline: 8px;
    display: inline-block;
    max-width: var(--linkMaxWidthMobile);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .huss-breadcrumb__link:hover:is(a),
  .huss-breadcrumb__link:focus:is(a) {
    cursor: pointer;
  }

  @media (min-width: 48rem) {
    .huss-breadcrumb__link {
      max-width: var(--linkMaxWidthDesktop);
    }
  }

  .huss-breadcrumb__list-item {
    display: flex;
    align-items: center;
  }

  .huss-breadcrumb__list-item:after {
    content: '>';
    width: 9px;
  }

  .huss-breadcrumb__list-item:first-child .huss-breadcrumb__link {
    padding-inline-end: 8px;
  }

  .huss-breadcrumb__list-item:last-child {
    color: var(--activeLinkColour);
  }

  .huss-breadcrumb__list-item:last-child:after {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(.huss-breadcrumb__link) {
    display: none;
  }

  @media (min-width: 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(.huss-breadcrumb__link) {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
    .huss-breadcrumb__link {
    display: none;
  }

  @media (min-width: 48rem) {
    .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
      .huss-breadcrumb__link {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
    content: '...';
    display: inline-block;
    padding-inline: 10px;
  }

  @media (min-width: 48rem) {
    .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      display: none;
    }
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(.huss-breadcrumb__link) {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :after {
    display: none;
  }

  @media (min-width: 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(.huss-breadcrumb__link) {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :after {
      display: inline-block;
    }
  }

  @media (min-width: 48rem) {
    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      :where(.huss-breadcrumb__link) {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2)):after {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
      .huss-breadcrumb__link {
      display: none;
    }
  }

  @media (min-width: 48rem) and (min-width: 48rem) {
    .--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
      .huss-breadcrumb__link {
      display: inline-block;
    }
  }

  @media (min-width: 48rem) {
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
