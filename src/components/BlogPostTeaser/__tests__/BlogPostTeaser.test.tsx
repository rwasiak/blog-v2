import React from 'react';
import { render, axe } from 'customRender';
import BlogPostTeaser from '../index';

const teaserData = {
  id: 'hgt27',
  frontmatter: {
    title: 'Title test',
    teaser: 'Title teaser',
    date: '02-03-2020',
    cover: {
      childImageSharp: {
        fluid: {
          src: '/test.jpg',
          aspectRatio: 2,
          base64: '',
          srcSet: '',
          sizes: '',
        },
      },
    },
    coverTitle: 'alt example',
  },
  fields: {
    slug: '/test',
  },
};

const teaserWithoutSlug = {
  ...teaserData,
  fields: {},
};

const teaserWithoutCover = {
  ...teaserData,
  frontmatter: {
    ...teaserData.frontmatter,
    cover: null,
  },
} as any;

describe('BlogPostTeaser Component', () => {
  it('can render content', () => {
    const { getByText, getByAltText } = render(
      <BlogPostTeaser blogPostData={teaserData} />,
    );
    getByText(teaserData.frontmatter.title);
    getByText(teaserData.frontmatter.teaser);
    getByText(teaserData.frontmatter.date);
    getByAltText(teaserData.frontmatter.coverTitle);
  });

  it('can not render content without slug', () => {
    const { queryByText, queryByAltText } = render(
      <BlogPostTeaser blogPostData={teaserWithoutSlug} />,
    );

    expect(
      queryByText(teaserWithoutSlug.frontmatter.title),
    ).not.toBeInTheDocument();
    expect(
      queryByText(teaserWithoutSlug.frontmatter.teaser),
    ).not.toBeInTheDocument();
    expect(
      queryByText(teaserWithoutSlug.frontmatter.date),
    ).not.toBeInTheDocument();
    expect(
      queryByAltText(teaserWithoutSlug.frontmatter.coverTitle),
    ).not.toBeInTheDocument();
  });

  it('can render content without cover', () => {
    const { getByText, queryByAltText } = render(
      <BlogPostTeaser blogPostData={teaserWithoutCover} />,
    );

    getByText(teaserWithoutCover.frontmatter.title);
    getByText(teaserWithoutCover.frontmatter.teaser);
    getByText(teaserWithoutCover.frontmatter.date);
    expect(
      queryByAltText(teaserWithoutSlug.frontmatter.coverTitle),
    ).not.toBeInTheDocument();
  });

  it('pass a11y checks', async () => {
    const { container } = render(<BlogPostTeaser blogPostData={teaserData} />);

    expect(await axe(container.innerHTML)).toHaveNoViolations();
  });
});
