import { subMenusList } from "../Constants";
import githubicon from "../../assets/Logos & Favicon/github.png";
import { Link } from "react-router-dom";

const AllApps = () => {
  return (
    <div className="max-h-screen p-8">
      <center className="flex flex-col items-center">
        <h1 className="text-[3rem] ">PyLibLog</h1>
        <p className="mt-6 mb-3 text-[1.8rem] text-gray-700">
          Your Python Library Encyclopedia 🐍📚
        </p>
        <div className="flex flex-row gap-2 justify-center ">
          <h3 className="text-gray-700">
            PyLibLog is open source project... you can also contribute
          </h3>
          <a
            href="https://github.com/thecuriousteam/PyLibLog.git"
            target="blank"
          >
            <img src={githubicon} alt="github-icon" width={25} height={25} />
          </a>
        </div>
      </center>
      <div className="flex flex-col ml-10 mt-10">
        <h3 className="text-xl mb-1 text-bold">Get Start</h3>
        <p className="text-gray-600 mb-3">Explore all python libraries</p>
        <ul>
          {subMenusList?.map((data, i) => (
            <li
              key={i}
              className="list-none hover:text-[#8800ff] cursor-pointer p-1.5 text-lg text-gray-900 ml-[3rem]"
            >
              {/* {data.name} */}
              <Link to={data.route}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllApps;
