import React, { HTMLAttributes } from "react";
import './Notification.css';
interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    buttonLabel: string;
    onClickMethod: (arg: any) => void;
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
