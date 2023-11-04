import notFoundImage from 'assets/images/pages/NotFound.jpg';

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${notFoundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - 160px)`,
      }}
    ></div>
  );
};

export default NotFoundPage;
