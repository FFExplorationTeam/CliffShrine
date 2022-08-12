export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Soliloquy Shrine Exploration Team';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'the Soliloque Shrine Project.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'To contact us, please head to the official Mousehunt Discord Server and you will probably find one of us there. This is currently a dummy project with no actual created information just yet, but more info will follow soon';

  return {
    name,
    blogTitle,
    footerText,
  };
};
