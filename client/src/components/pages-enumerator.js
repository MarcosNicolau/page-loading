import '../styles/pages-enumerator.scss';
const Pages = ({ pages, length, search }) => {
  return (
    <div className="pages">
      {pages.map((page, index) => {
        return (
          <div className="page" key={index}>
            <button
              onClick={() => (window.location.href = `/products?search=${search}&length=${page}`)}
              className={Number(length) === page && 'active-page'}
            >
              {index + 1}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pages;
