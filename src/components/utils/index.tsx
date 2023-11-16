import { MenuItem, Option, FormControlItem } from "./types";

interface CustomOption extends Option {
  Item: string; // Sesuaikan ini dengan tipe yang benar
}

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: CustomOption[] = [
  {
    value: "application",
    label: "Application",
    Item: "someValue", // Sesuaikan ini dengan nilai yang sesuai dengan tipe yang benar
  },
  {
    value: "data",
    label: "Data",
    Item: "someOtherValue",
  },
  {
    value: "software",
    label: "Software",
    Item: "anotherValue",
  },
  {
    value: "tech",
    label: "Technology",
    Item: "yetAnotherValue",
  },
  {
    value: "science",
    label: "Science",
    Item: "andSoOnValue",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Project Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Project Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Project Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCNdy9sluwko6rQ8vALi6c7mK-J9yqmJW8",
  authDomain: "gamasti-udb.firebaseapp.com",
  projectId: "gamasti-udb",
  storageBucket: "gamasti-udb.appspot.com",
  messagingSenderId: "676606638212",
  appId: "1:676606638212:web:a6e9f32d08f8adadf2aad1",
  measurementId: "G-01LNCY4LKQ",
};

export const initialBlogFormData = {
  title: "",
  description: "",
  image: "",
  category: "",
};
