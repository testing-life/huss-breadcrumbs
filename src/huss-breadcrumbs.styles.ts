import {css} from 'lit';

export const breadcrumbsStyles = css`
  .huss-breadcrumb__list {
    --linkColour: var(--grey3);
    --activeBreadcrumbColour: var(--activeBreadcrumbTheme, var(--black));
    color: var(--linkColour);
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    font-size: var(--text-small);
    padding: 0;
    margin: 0;
  }

  .huss-breadcrumb__link {
    color: var(--linkColour);
    text-decoration: none;
    padding-inline: 8px;
    display: inline-block;
    max-width: 72px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .huss-breadcrumb__link:hover:is(a),
  .huss-breadcrumb__link:focus:is(a) {
    color: var(--primaryDark);
    cursor: pointer;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__link {
      max-width: 170px;
    }
  }

  .huss-breadcrumb__list-item {
    display: flex;
    align-items: center;
  }

  .huss-breadcrumb__list-item huss-icon {
    width: 9px;
  }

  .huss-breadcrumb__list-item:first-child .huss-breadcrumb__link {
    padding-inline-end: 8px;
  }

  .huss-breadcrumb__list-item:last-child {
    --linkColour: var(--activeBreadcrumbColour);
  }

  .huss-breadcrumb__list-item huss-icon {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(.huss-breadcrumb__link, huss-icon) {
    display: none;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(.huss-breadcrumb__link, huss-icon) {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
    .huss-breadcrumb__link {
    display: none;
    @media (width >= 48rem) {
      display: inline-block;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
    content: '...';
    display: inline-block;
    padding-inline: 10px;
    @media (width >= 48rem) {
      display: none;
    }
  }

  .huss-breadcrumb__list-item:nth-child(2):not(
      :last-child
    ).huss-breadcrumb__list-item:nth-child(2):not(:last-child)
    huss-icon {
    display: inline-block;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    :where(.huss-breadcrumb__link, huss-icon) {
    display: none;
  }

  @media (width >= 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      :where(.huss-breadcrumb__link, huss-icon) {
      display: inline-block;
    }
  }

  @media (width >= 48rem) {
    .huss-breadcrumbs--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      :where(.huss-breadcrumb__link, huss-icon) {
      display: none;
    }

    .huss-breadcrumbs--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)
      .huss-breadcrumb__link {
      display: none;
      @media (width >= 48rem) {
        display: inline-block;
      }
    }

    .huss-breadcrumbs--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      content: '...';
      display: inline-block;
      padding-inline: 10px;
    }
  }
`;
