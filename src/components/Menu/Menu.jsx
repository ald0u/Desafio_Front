
import Image from "next/image";
import CardSignIn from "../CardSignIn/CardSignIn";
import ItemsTags from '../ItemsTags/ItemsTags';
import OtherItems from '../OtherItems/OtherItems';
import PopularTags from '../PopularTags/PopularTags';
import SocialMedia from '../SocialMedia/SocialMedia';
import CardDevTo from "../CardDevTo/CardDevTo";
import Footer from "../Footer/Footer";



const Menu = () => {
  return (
    <div className="mainContainer">
      <aside className="leftAside">
        <div className="aside">
          <CardSignIn />
          <nav className="block mt-4 mb-4">
            <div className="flex justify-start mb-4">
              <ItemsTags />
            </div>
            <div className="flex justify-start mb-4">
              <OtherItems />
            </div>
            <nav className="mb-6">
              <div className="w-full h-48 overflow-y-auto">
                <div className="pl-3">
                  <PopularTags />
                </div>
                <SocialMedia />
              </div>
            </nav>
          </nav>
          <CardDevTo />
          <Footer />
        </div>
      </aside>
      <main className="mainContent">
        {/* Aquí va el contenido principal */}
      </main>
    </div>

  );
}

export default Menu;
