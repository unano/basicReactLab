import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const head = "HDip Computer Science - Modules table";
  const modules = [
    {
      name:"DevOps",
      noLectures:"2",
      noPracticals:"2"
    },
    {
      name:"Enterprise Web Dev",
      noLectures:"3",
      noPracticals:"2"

    }
  ]

  
  return (
    <table className="table table-bordered">
    <thead>
    <h1>{head}</h1>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <th>{modules[0].name}</th>
        <th>{modules[0].noLectures}</th>
        <th>{modules[0].noPracticals}</th>
      </tr>
      <tr>
        <th>{modules[1].name}</th>
        <th>{modules[1].noLectures}</th>
        <th>{modules[1].noPracticals}</th>
      </tr>
    </tbody >
  </table>
  );
};

export default Demo;
