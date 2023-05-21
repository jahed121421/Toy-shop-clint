import useTitle from "../Custom Title/CustomTitle";

const Blog = () => {
  useTitle("BLOG");
  return (
    <>
      <div className="m-16">
        <h1 className="text-5xl font-bold text-center mb-10">Blog</h1>
        <div className="text-justify space-y-7">
          <h3 className="font-bold text-lg">
            1 Question: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h3>
          <p>
            Ans: An access token is a short-lived credential that is used to
            access protected resources. It is typically issued by an
            authorization server to a client application, such as a web browser
            or mobile app, after the user has successfully authenticated. Access
            tokens are typically used to access resources on behalf of the user,
            such as reading their email or making changes to their account
            settings. A refresh token is a long-lived credential that can be
            used to obtain new access tokens. Refresh tokens are typically
            issued by an authorization server to a client application when the
            user first authorizes the application to access their resources.
            Refresh tokens are typically stored securely by the client
            application and are not exposed to the user. Access tokens and
            refresh tokens are both important security mechanisms that are used
            to protect user data. Access tokens help to ensure that only
            authorized users can access protected resources, while refresh
            tokens help to make it easier for users to access those resources
            without having to log in repeatedly. How do they work? When a user
            logs in to a website or app, they are typically authenticated by
            providing their username and password. Once the user has been
            authenticated, the authorization server will issue an access token
            to the client application. The access token is then used by the
            client application to access protected resources on behalf of the
            user. If the access token expires, the client application can use
            the refresh token to obtain a new access token. The refresh token is
            typically stored securely by the client application and is not
            exposed to the user. Where should we store them on the client-side?
            Access tokens and refresh tokens should be stored securely on the
            client-side. They should not be stored in plain text, as this could
            make them vulnerable to attack. Access tokens and refresh tokens can
            be stored in a variety of ways, including: In a database In a file
            In memory The best way to store access tokens and refresh tokens
            will depend on the specific application. However, it is important to
            ensure that they are stored securely and that they cannot be
            accessed by unauthorized users. Here are some additional security
            considerations for storing access tokens and refresh tokens: Access
            tokens and refresh tokens should be encrypted. Access tokens and
            refresh tokens should have a limited lifetime. Access tokens and
            refresh tokens should be invalidated if they are compromised.
          </p>
          <h3 className="font-bold text-xl">
            2 Question: Compare SQL and NoSQL databases?
          </h3>
          <p>
            Ans:SQL databases are relational databases that store data in
            tables. Tables are made up of rows and columns, and each row
            represents a single record. SQL databases use Structured Query
            Language (SQL) to query and manipulate data. <br /> NoSQL databases
            are non-relational databases that store data in a variety of
            formats, including key-value pairs, documents, and graphs. NoSQL
            databases do not use SQL, and they are often used for storing large
            amounts of data or for applications that require high performance.
          </p>
          <h3 className="font-bold text-xl">
            3 Question: What is express js? What is Nest JS?
          </h3>
          <p>
            Ans: Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for building web
            applications. It is used by millions of developers worldwide and is
            one of the most popular Node.js frameworks. <br />
            Nest.js is a framework that builds on top of Express.js and provides
            a more robust and opinionated set of features for building web
            applications. It is built on top of TypeScript and provides a number
            of features that make it easier to build scalable and maintainable
            web applications. Here is a table summarizing the key diff
          </p>
          <h3 className="font-bold text-xl">
            4 Question: What is MongoDB aggregate and how does it work?
          </h3>
          <p>
            Ans : MongoDB aggregate is a way to process and transform data in
            MongoDB. It allows you to group documents together, perform
            calculations on the grouped data, and return a single result.
            Aggregation pipelines are used to perform aggregation in MongoDB.
            MongoDB aggregation is a powerful tool that can be used to process
            and transform data in a MongoDB database. It is similar to SQL
            aggregation, but it is more powerful and flexible. You can use
            aggregation to group documents together, perform calculations on the
            grouped data, and return a single result. <br />
            how does it work: Aggregation pipelines are sequences of stages that
            process documents. Each stage performs an operation on the input
            documents, and the documents that are output from a stage are passed
            to the next stage. The most common aggregation stages are $match,
            $group, $project, $sum, $avg, $min, and $max. You can use any
            combination of these stages to perform aggregation on your data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
