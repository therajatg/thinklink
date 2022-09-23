import style from "./orderDetails.module.css";
import { BsBasket2 } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import {
  OpenOrders,
  OrdersInTransit,
  FulfilledOrders,
  CancelledOrders,
} from "../../icons/index";

export const OrderDetails = () => {
  const orderDetails = [
    {
      type: "Open orders",
      payload: 239,
      icon: <OpenOrders />,
      borderColor: "yellow",
    },
    {
      type: "Orders in transit",
      payload: 126,
      icon: <OrdersInTransit />,
      borderColor: "blue",
    },
    {
      type: "Fulfilled orders",
      payload: 1254,
      icon: <FulfilledOrders />,
      borderColor: "green",
    },
    {
      type: "Cancelled orders",
      payload: 1254,
      icon: <CancelledOrders />,
      borderColor: "red",
    },
  ];

  return (
    <div className={style.orderDetails}>
      {orderDetails.map(({ type, payload, icon, borderColor }) => (
        <div
          className={`style.singleOrderInfo ${
            borderColor === "yellow" && style.borderColorYellow
          } ${borderColor === "blue" && style.borderColorBlue} ${
            borderColor === "green" && style.borderColorGreen
          } ${borderColor === "red" && style.borderColorRed}`}
        >
          <div className={style.typeAndIcon}>
            <span className={style.type}>{type}</span>
            {icon}
          </div>
          <span className={style.payload}> {payload}</span>
        </div>
      ))}
    </div>
  );
};
