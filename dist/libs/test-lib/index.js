'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const lodash = require('lodash');
const jsxRuntime = require('react/jsx-runtime');

const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

const lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

const styles = {
	
};

function TestLib(props) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: styles["container"],
    children: /* @__PURE__ */ jsxRuntime.jsx("h1", {
      children: "Welcome to TestLib!"
    })
  });
}

console.log(lodash__default.default);

exports.TestLib = TestLib;
