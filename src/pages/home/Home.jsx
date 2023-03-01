import BookCollections from "./BookCollections";
import BookForm from "./BookForm";

const Home = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <BookCollections />
        <BookForm />
      </div>
    </main>
  );
};

export default Home;
