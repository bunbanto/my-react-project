//import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }
//----------------------------------------------
// import { useState } from "react";

// interface Values {
//   x: number;
//   y: number;
// }

// export default function App() {
//   const [values, setValues] = useState<Values>({ x: 0, y: 0 });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>
//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// }
//----------------------------------------------
// export default function App() {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get("username") as string;
//     console.log("Username:", username);
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" defaultValue="John Doe" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
//----------------------------------------------
// import OrderForm from "./OrderForm";

// export default function App() {
//   const handleOrder = (data: string) => {
//     console.log("Order received from:", data);
//     // можна зберегти замовлення, викликати API, показати повідомлення тощо
//   };

//   return (
//     <>
//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />
//     </>
//   );
// }
//----------------------------------------------

// import { useState } from "react";

// import SearchForm from "./SearchForm";
// import { Article } from "../types/article";
// import ArticleList from "./ArticleList";
// import { BeatLoader } from "react-spinners";
// import { fetchArticles } from "../services/articleService";

// interface ArticlesHttpResponse {
//   hits: Article[];
// }

// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);

//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);

//       const data = await fetchArticles(topic);
//       setArticles(data);
//     } catch {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSubmit={handleSearch} />
//       {/* 6. Використовуємо стан isError щоб показати помилку */}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {isLoading && <BeatLoader color="#ff5106" size={20} />}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }
//----------------------------------------------
// import Modal from "./Modal";
// import { useState } from "react";

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>Custom Modal Content</h2>
//           <p>This is a reusable modal with dynamic content.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }
//------------------------------------------------------------------
// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");

//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     }

//     return 0;
//   });

//   useEffect(() => {
//     localStorage.setItem("saved-clicks", JSON.stringify(clicks));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// }
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const fieldId = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>

          <label className={css.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${fieldId}-username`}
          />

          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`${fieldId}-email`}
          />
        </fieldset>

        <button className={css.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
