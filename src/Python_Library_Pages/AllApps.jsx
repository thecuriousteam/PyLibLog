import { subMenusList } from "../Constants";
import githubicon from "../../assets/Logos & Favicon/github.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AllApps = () => {
  const [typedText, setTypedText] = useState(''); // State to store the typed text
  const targetText = "Encyclopedia"; // The text you want to type

  useEffect(() => {
    // Create an interval to type the text
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setTypedText(targetText.slice(0, currentIndex)); // Update the typed text
        currentIndex++;
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="max-h-screen p-3 lg:p-8">
      <center className="flex flex-col items-center">
        <h1 className="text-[3rem] ">PyLibLog</h1>
        <p className="mt-6 mb-3 text-[1.8rem] text-gray-700">
          Your Python Library {typedText} 🐍📚
        </p>
        <div className="flex flex-row gap-2 justify-center items-center">
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
      <div className="flex flex-col mt-10">
        <h3 className="text-xl mb-1 text-bold">Get Start</h3>
        <p className="text-gray-600 mb-3">Explore all python libraries</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
          {subMenusList?.map((data, i) => (
            <li
              key={i}
              className="list-none group hover:bg-[#8800ff] hover:text-white p-2 shadow-sm duration-500 ease-in-out  cursor-pointer border text-lg text-black"
            >
              {/* {data.name} */}
              <span className="border-b-2  border-b-[#8800ff] group-hover:border-b-white  p-1" style={{ marginRight: "1rem" }}>{i + 1}.</span>
              <Link to={data.route}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllApps;
