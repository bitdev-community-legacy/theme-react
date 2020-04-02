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
import './Button.css';
const Button = (_a) => {
    var { disabled = false, children, onClickMethod } = _a, rest = __rest(_a, ["disabled", "children", "onClickMethod"]);
    return (React.createElement("button", Object.assign({ disabled: disabled, className: 'primary-btn' }, rest, { onClick: onClickMethod }), children));
};
export default Button;
