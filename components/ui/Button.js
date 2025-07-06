export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="btn btn-primary mt-6 sm:mt-8"
    >
      {children}
    </button>
  );
}
