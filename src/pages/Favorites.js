import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const fContext = useContext(FavoritesContext);

  let content;

  if (fContext.totalFavorites === 0) {
    content = <p>You haven't any favorite meet up.</p>;
  } else {
    content = <MeetupList meetups={fContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
