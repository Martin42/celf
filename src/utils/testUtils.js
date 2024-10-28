// window.matchmedia is not implemented in the test environment
export const mockMatchMedia = (width) => {
  window.matchMedia = (query) => ({
    matches: query.includes(width),
    media: query,
    onchange: null,
    addEventListener: (event, handler) =>
      handler({ matches: query.includes(width) }),
    removeEventListener: () => {}
  });
};

// Reset the mock to avoid possible conflitcs with other tests
export const resetMatchMedia = () => {
  delete window.matchMedia;
};
