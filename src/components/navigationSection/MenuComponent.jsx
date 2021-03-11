const MenuComponent = ({ linkReference, id, status, label }) => {
  return (
    <a
      href={linkReference}
      className="w-full px-2 py-2 lg:inline-flex lg:w-auto text-port-royal-B hover:text-port-royal-B"
    >
      <span
        id={id}
        className="pb-1 border-b-2 public_semibold border-port-royal-B"
      >
        {label}
      </span>
    </a>
  );
};

export default MenuComponent;
