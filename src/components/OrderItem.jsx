import { BiPackage, BiTime, BiDollar } from "react-icons/bi";
function OrderItem({ order }) {
  // formatting Date to DD/MM/YY format
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  }
  return (
    <>
      <div className="flex items-center mb-2 sm:mb-0">
        <BiPackage className="text-blue-600 mr-2" size={24} />
        <span className="">{order.id}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
        <BiTime className="mr-1" />
        <span>{formatDate(order.date)}</span>
      </div>
      <div className="flex items-center text-green-600 mb-2 sm:mb-0">
        <BiDollar className="mr-1" />
        <span>{order.total.toFixed(2)}</span>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          order.status === "Delivered"
            ? "bg-green-100 text-green-800"
            : order.status === "Processing"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}>
        {order.status}
      </span>
    </>
  );
}

export default OrderItem;
