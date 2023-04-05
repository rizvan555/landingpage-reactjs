import { ReactComponent as Brush } from "../resorce/images/brush.svg";
import { ReactComponent as GlobeLine } from "../resorce/images/globe-line.svg";
import { ReactComponent as MegaPhone } from "../resorce/images/megaphone.svg";
import { ReactComponent as SelectObject } from "../resorce/images/object-select.svg";

const menuSection = [
  {
    icon: Brush,
    title: "Brand Idently",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    icon: SelectObject,
    title: "Illustration",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    icon: MegaPhone,
    title: "Marketing",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    icon: GlobeLine,
    title: "Web Design",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
];

const Firstsection = () => {
  return (
    <section className="firstsection">
      <h3>What We Do</h3>
      <h1>We've got everything you need to launch and grow your business</h1>
      {menuSection.map((menu) => {
        return (
          <article>
            <div className="up-side">
              <menu.icon />
              <p>{menu.title}</p>
            </div>
            <span>{menu.contain}</span>
          </article>
        );
      })}
    </section>
  );
};

export default Firstsection;
