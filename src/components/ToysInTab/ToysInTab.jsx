import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ToysInTab = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-5">Toys Catagory</h1>
      <div>
        <Tabs forceRenderTabPanel defaultIndex={0}>
          <TabList>
            <Tab>Pet Animal Toy</Tab>
            <Tab>Ancient Animal Toy</Tab>
            <Tab>Forest Animal Toy</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Dog</Tab>
                <Tab>Cat</Tab>
                <Tab>Horse</Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Dog")
                    .map((toy) => (
                      <div
                        key={toy._id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Cat")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Horse")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Dinosaur</Tab>
                <Tab>Dragon</Tab>
                <Tab>Unicorn</Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Dinosaur")
                    .map((toy) => (
                      <div
                        key={toy._id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Dragon")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Unicorn")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Wolf</Tab>
                <Tab>Cow</Tab>
                <Tab>Monkey</Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Wolf")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Cow")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <p>{toy.description}</p>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2">
                            <p>rating: {toy.rating}</p>
                            <p className="text-left md:text-right">
                              Price: {toy.price}
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {toys
                    .filter((toy) => toy.category === "Monkey")
                    .map((toy) => (
                      <div
                        key={toy.id}
                        className="card w-96 bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img src={toy.image} alt={toy.name} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{toy.name}</h2>
                          <div>
                            <p>{toy.description}</p>
                            <p>rating: {toy.rating}</p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/showdetails/${toy._id}`}>
                              <div className="btn btn-outline">
                                Shoe Details
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToysInTab;
