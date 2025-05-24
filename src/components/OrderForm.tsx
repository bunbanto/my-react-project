// interface OrderFormProps {
//   onSubmit: (value: string) => void;
// }

// export default function OrderForm({ onSubmit }: OrderFormProps) {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get("username") as string;
//     onSubmit(username);
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Place order</button>
//     </form>
//   );
// }
import { useId } from "react";

export default function OrderForm() {
  const selectId = useId();

  const handleOrder = (formData: FormData) => {
    const deliveryTime = formData.get("deliveryTime") as string;
    console.log("Preferred delivery time:", deliveryTime);
  };

  return (
    <form action={handleOrder}>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}
