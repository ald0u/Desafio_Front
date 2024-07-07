
import DiscussAsside from "../DiscussAside/DiscussAsside";
import ItemsAside from "../ItemsAside/ItemsAside";
import RevelantTop from "../RevelantTop/RevelantTop";

const Menu = () => {
  return (
    <div className="mainContainer">
      <aside className="leftAside">
        <ItemsAside/>
      </aside>
      <main className="mainContent custom-margin-top">
        <RevelantTop />
      </main>
      <aside className="rightAside custom-margin-top">
        <DiscussAsside />
      </aside>
    </div>
  );
}

export default Menu;
