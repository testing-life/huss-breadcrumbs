import {css} from 'lit';

export const breadcrumbsStyles = css`
  :host {
    --linkColour: pink;
    --activeBreadcrumbColour: green;
    --hover: goldenrod;
  }

  .huss-breadcrumbs__list {
    color: var(--linkColour);
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    font-size: var(--text-small);
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--linkColour);
    text-decoration: none;
    padding-inline: 8px;
    display: inline-block;
    max-width: 72px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a:hover,
  a:focus {
    color: var(--hover);
    cursor: pointer;
  }

  @media (width >= 48rem) {
    a {
      max-width: 170px;
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

  .huss-breadcrumb__list-item:first-child a {
    padding-inline-end: 8px;
  }

  .huss-breadcrumb__list-item:last-child {
    --linkColour: var(--activeBreadcrumbColour);
  }

  .huss-breadcrumb__list-item:last-child:after {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(a) {
    display: none;
  }
  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(a) {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    ):after {
    display: none;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      ):after {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
    display: none;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
    content: '...';
    display: inline-block;
    padding-inline: 10px;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      display: none;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(
      :last-child
    ).huss-breadcrumb__list-item:nth-child(2):not(:last-child):after {
    display: inline-block;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(a) {
    display: none;
  }
  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(a) {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    ):after {
    display: none;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      ):after {
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

  @media (width >= 48rem) {
    .conti-air-breadcrumbs--is-folded
      .conti-air-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      :where(a) {
      display: none;
    }

    .conti-air-breadcrumbs--is-folded
      .conti-air-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      :after {
      display: none;
    }

    .conti-air-breadcrumbs--is-folded
      .conti-air-breadcrumb__list-item:nth-child(2):not(:last-child)
      .conti-air-breadcrumb__link {
      display: none;
      // @media (width >= 48rem) {
      //   display: inline-block;
      // }
    }

    .conti-air-breadcrumbs--is-folded
      .conti-air-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      content: '...';
      display: inline-block;
      padding-inline: 10px;
    }
  }
`;
