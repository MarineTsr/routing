import { useLoaderData } from "react-router-dom";

function Home() {
  const data = useLoaderData();
  
  return (
    <>
      <h2 className="text-center mb-5 pb-3">Homepage</h2>
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;
