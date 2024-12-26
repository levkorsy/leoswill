export default (
  selector: string,
  block: ScrollLogicalPosition | undefined = 'center'
): void => {
  setTimeout(() => {
    document
      .querySelector(selector)
      ?.scrollIntoView({ block, behavior: 'smooth' });
  });
};
