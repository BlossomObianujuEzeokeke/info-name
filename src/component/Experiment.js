import React from "react";

export default function Experiment () {
const firstName = "John";
const lastName = "Doe";
const sparta = "schools";
const date = new Date();

return (
 <h1>Hello {firstName} {lastName}!, this is JavaScript. It is {date.getHours() % 12}pm </h1>
)

}