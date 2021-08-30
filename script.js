"use strict";

// “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.

const fullname = "Albus Percival Wulfric Brian Dumbledore";

const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstName = fullname.substring(0, firstSpace);
const middleName = fullname.substring(firstSpace + 1, lastSpace);
const lastName = fullname.substring(lastSpace + 1);