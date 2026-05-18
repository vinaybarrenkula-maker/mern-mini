import React, { useContext } from "react";
import { counterContextObject } from "../contexts/ContextProvider";

function Home() {
  const { counter, changeCounter } =
    useContext(counterContextObject);

  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Employee Management System
        </h1>

        <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
          A modern MERN Stack Employee Management
          Application that helps organizations manage
          employee information efficiently with
          simplicity, speed, and security.
        </p>

        {/* COUNTER SECTION */}
        <div className="mt-12 bg-white text-gray-800 inline-block px-8 py-6 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Counter: {counter}
          </h2>

          <button
            onClick={changeCounter}
            className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Change Count
          </button>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Employee Management
            </h3>
            <p className="text-gray-600">
              Easily add, update, remove, and organize
              employee records with a smooth and
              user-friendly experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Built with React and Node.js to provide
              fast loading speed and smooth user
              experience for users.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Secure Database
            </h3>
            <p className="text-gray-600">
              Employee information is securely stored
              in MongoDB with proper backend API
              management.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT APP */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-5">
            About This App
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System is a modern
            MERN stack application developed to simplify
            employee information management for companies,
            startups, educational institutions, and
            organizations. Instead of storing employee
            records manually in documents or spreadsheets,
            this system allows users to manage employee
            information digitally in a more efficient and
            organized manner. The application provides
            functionality to add employees, update their
            information, view complete details, and delete
            unnecessary records whenever required. Since
            the project is built using modern web
            technologies, it provides excellent
            performance, responsiveness, and accessibility
            across devices. The clean interface also makes
            the application easy to use for beginners and
            professionals alike.
          </p>
        </div>
      </section>

      {/* USES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-green-700 mb-5">
            Uses of This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System can be used in
            various workplaces where staff information
            needs to be managed professionally. Companies
            can maintain employee details such as names,
            phone numbers, email addresses, company names,
            and job designations in one centralized
            platform. Human Resource departments can
            benefit from quick access to employee records
            and instant updates whenever changes occur.
            Small businesses and startups can use this
            system to organize employee information
            digitally without maintaining large amounts of
            paperwork. Educational institutions can also
            adapt this application for staff management.
            Overall, the app saves time, improves
            productivity, and reduces manual errors.
          </p>
        </div>
      </section>

      {/* WHY THIS APP */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-purple-700 mb-5">
            Why Choose This App?
          </h2>

          <p className="text-lg leading-9 text-justify">
            This application is designed to make employee
            management simple, fast, and reliable.
            Traditional systems often rely on paperwork or
            spreadsheets, which can be difficult to
            maintain and prone to human error. This
            Employee Management System provides a digital
            alternative that keeps employee records
            organized and easily accessible. Since the
            application uses MERN stack technology, it is
            scalable, secure, and capable of delivering
            smooth performance. The user-friendly design
            ensures that even first-time users can operate
            the application comfortably. It is suitable
            both for academic projects and practical
            real-world business usage.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-5">
            How to Use This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            Using this Employee Management System is easy
            and beginner-friendly. Users can start by
            opening the application and exploring the
            available features. To add employee
            information, users can enter details such as
            employee name, email, mobile number,
            designation, and company information into the
            forms provided. Once submitted, the details
            are stored in the database securely. Users can
            also view employee details in an organized
            list and update information whenever required.
            If a record becomes unnecessary, it can be
            deleted instantly. The simple interface makes
            navigation smooth and helps users complete
            tasks quickly.
          </p>
        </div>
      </section>

      {/* ABOUT MERN */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-cyan-300 mb-5">
            About MERN Stack
          </h2>

          <p className="text-lg leading-9 text-justify">
            MERN Stack is one of the most widely used
            technologies for modern web development. The
            term MERN stands for MongoDB, Express.js,
            React.js, and Node.js. MongoDB stores employee
            data efficiently in a flexible format.
            Express.js helps developers create backend APIs
            and manage server-side logic. React.js builds
            interactive user interfaces through reusable
            components, making applications fast and
            responsive. Node.js enables JavaScript to run
            on the server side efficiently. Together,
            these technologies create a powerful
            development ecosystem that supports secure,
            scalable, and high-performance applications.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
