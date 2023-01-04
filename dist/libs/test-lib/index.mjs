import lodash from 'lodash';
import { jsx } from 'react/jsx-runtime';

const styles = {
	
};

function TestLib(props) {
  return /* @__PURE__ */ jsx("div", {
    className: styles["container"],
    children: /* @__PURE__ */ jsx("h1", {
      children: "Welcome to TestLib!"
    })
  });
}

console.log(lodash);

export { TestLib };
