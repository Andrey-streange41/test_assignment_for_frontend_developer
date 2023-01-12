import "./App.css";
import Header from "./components/Header";
import Button from "./components/ui/buttons/Button";
import classNames from "./utils/classNames";
import UserCardList from "./components/UserCardList";
import AddUserForm from "./components/AddUserForm";
import { useEffect, useState } from "react";
import { getUsers } from "./api/users";
import { IUser } from "./types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = {
      page,
      count: 6,
    };

    const getData = async () => {
      setLoading(true);
      const { users } = await getUsers(params);
      setUsers(users);
      setLoading(false);
    };
    getData();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    const params = {
      page: page + 1,
      count: 6,
    };
    const { users: res } = await getUsers(params);
    setUsers([...users, ...res]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <div className=" min-h-[100vh] bg-[#F8F8F8] lg:flex lg:justify-center lg:flex-col lg:items-center">
      <Header />
      <article
        style={{ backgroundImage: `url(/bg.png)` }}
        className={classNames(
          `w-full h-[500px] bg-no-repeat mb-[140px] mt-[60px] z-50
          bg-cover bg-center px-4 py-[40px]
           text-[#FFFFFF] flex justify-center items-center border`,
          "lg:h-[650px] lg:w-[1170px]"
        )}
      >
        <section
          className={classNames("w-[328px] text-center", "md:w-[380px]")}
        >
          <h2 className="text-[40px] mb-[21px]  leading-10">
            Test assignment for front-end developer
          </h2>
          <p className="leading-[26px]">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button className="mt-[36px] w-[100px]" onClick={() => {}}>
            Sign up
          </Button>
        </section>
      </article>
      <section className="flex justify-center flex-col items-center w-full  md:p-[32px]">
        <h2 className="text-[40px] w-[328px] text-center  leading-10 mb-[50px] md:w-full">
          Working with GET request
        </h2>
        <UserCardList users={users} loadMore={loadMore} />
      </section>
      <section className="flex justify-center flex-col items-center w-full">
        <h2 className="text-[40px] w-[328px] md:w-full text-center  leading-10 mb-[50px]">
          Working with POST request
        </h2>
        <AddUserForm />
      </section>
    </div>
  );
}

export default App;
