//Lets assume Object is very large;
let ref = {
  id: 1,
  name: "rahul",
  email: "rahul@gmail.com",
  mobile: "3223232",
  address: {},
  social: {
    facebook: "rahul@gmail.com",
    instagram: "rahulg",
  },
};

// OBJECT DESTRUCTURING
// DESTRUCTURING :: It helps you to select / query specific members from the large object tree.

// selecting only one memeber.
let {} = ref;
let { name } = ref;
let { name, email } = ref;
let { name, email, mobile } = ref;
