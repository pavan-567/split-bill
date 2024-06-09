function Container({ children }) {
  return (
    <div className="px-[24px] mx-auto h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default Container;
