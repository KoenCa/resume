import "./src/sass/main.scss";
import "./src/utils/font-awesome";
import "./src/utils/smooth-scroll";

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
