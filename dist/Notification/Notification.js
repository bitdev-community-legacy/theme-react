var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import './Notification.css';
import Button from '../Button';
const Notification = (_a) => {
    var { text, buttonLabel, onClickMethod } = _a, rest = __rest(_a, ["text", "buttonLabel", "onClickMethod"]);
    return (React.createElement("div", Object.assign({ className: 'notif' }, rest),
        React.createElement("div", { className: 'notif-text-container' }, text),
        React.createElement("div", { className: 'notif-button-container' },
            React.createElement(Button, { onClickMethod: onClickMethod }, buttonLabel))));
};
export default Notification;
