export const scrollTo = (className: string) => {
  const htmlElement = document.querySelector('.' + className);

  if (htmlElement) {
    const { top } = htmlElement.getBoundingClientRect();
    window.scrollBy({ top, behavior: 'smooth' });
  }
};
