import React from "react";

const Blogs = () => {
  return (
    <div div className="bg-zinc-50">
      <div className=" pb-5 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-slate-700">
          OUR BLOGS
        </h1>
        <div className=" w-36 h-1 bg-slate-700 mx-auto rounded-lg" />
      </div>

      <div className="bg-lightblue py-10 px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="font-signika mdmax:mb-10 mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            You May Want to Know...
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                1) What is Difference between Javascript and Node?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                First of all, Javascript is a interpreted programing language.{" "}
                <br />
                On the other hand, Node is a runtime environment of Javascript.{" "}
                <br />
                To run Javascript we need browser (if don't use Node). <br />
                But Node can run in background. By using Node we can run
                Javascript without browser. <br />
                Javascript can run in any browser engine as like Spidermionkey,
                Chakra, etc. <br />
                But Node use only V8 engine.
                <br />
                Javascript used in Frontend and Node used in Server-side
                development.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                2) When should I use Node and when should I use Mongo?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                At first we need to know, that what is Node and what is Mongo.{" "}
                <br />
                Node is a runtime environment of Javascript.
                <br />
                But Mongo is a NoSql Database.
                <br />
                By using Node we can execute Javascript without Browser. <br />
                And by using Mongo we can do create, read, delete and edit
                actions with out data.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                3) Difference between SQL and NoSQL?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Both SQL and NoSQL are database. <br />
                SQl is relational database.
                <br />
                But NoSQL is non-relational database.
                <br />
                SQL database is static.
                <br />
                But NoSQL db is dynamic.
                <br />
                SQL is good for complex database.
                <br />
                But for complex database NoSQL is not good choose.
                <br />
                By increasing Ram, SSD, CPU we can increase load of SQL single
                server. Because SQL DB is vertically scalable.
                <br />
                But to increasing load in NoSQL DB we need to sharding and
                adding new server in NoSQL DB. Because this is horizontally
                scalable.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                4) What is the purpose of JWT?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                JWT or JSON Web Token is a standard away to secure our API
                between client-side and server-side.
                <br />
                Generally JWT take a single data from client-side then in
                server-side it encrypt the data and generate a secret Token.
                Then return the token to client side.
                <br />
                Now when we call the api, we need to send the encrypted token
                and the data with request.
                <br />
                Then the server decode the encrypted token and compare the
                decoded data with new data.
                <br />
                If server found match then it will response API otherwise it
                won't.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
