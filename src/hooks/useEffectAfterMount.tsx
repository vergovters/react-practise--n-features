import React from "react";

export default function UseEffectAfterMount(
  fn: () => void,
  deps: unknown[] = []
) {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    fn();
  }, deps);
}
