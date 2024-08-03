import classNames from "classnames";
import React, { ComponentPropsWithRef } from "react";
import { PopoverContext } from "./PopoverProvider";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";

interface PopoverProps extends ComponentPropsWithRef<"div"> {}

const PopoverComponent: React.FC<PopoverProps> = ({
  className,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <PopoverContext.Provider value={{ open, onOpen, onClose }}>
      <div className={classNames("relative", className)} {...rest}>
        {children}
      </div>
      ;
    </PopoverContext.Provider>
  );
};

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});
export default Popover;

//  <Popover className="relative">
//    <Popover.Button>Popover!</Popover.Button>
//    <Popover.List>
//      {data.map((x) => (
//        <Popover.ListItem key={x.firstname}>
//          {x.firstname} {x.lastname}
//        </Popover.ListItem>
//      ))}
//    </Popover.List>
//  </Popover>;
