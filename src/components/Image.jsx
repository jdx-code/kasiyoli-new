const Image = (props) => {
  let title;

  props.data.forEach((item) => {
    title = item.title;
  });

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-2xl lg:text-3xl font-semibold">

      {title && (
        <h1 className="text-center px-2 sm:px-6 lg:px-20 leading-8 mb-6">
          {title}
        </h1>
      )}

      {/* Responsive Image Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          lg:grid-cols-5
          gap-5
          md:gap-6
          lg:gap-5
          py-6
          md:py-8
          lg:py-10
          mb-8
        "
      >

        {props.data.map((item) => (
          <div
            key={item.id}
            className="
              w-full
              overflow-hidden
              rounded-lg
              border-2
              border-[#14a800]
              bg-white
              shadow-lg
              hover:shadow-2xl
              transition-shadow
              duration-300
            "
          >

            {item.file ? (
              <a
                href={item.file}
                data-fancybox="gallery"
                data-caption="Caption #2"
                className="block"
              >
                <img
                  src={item.file}
                  alt=""
                  className="
                    w-full
                    h-auto
                    aspect-[4/3]
                    object-cover
                    block
                  "
                />
              </a>
            ) : (
              <a
                href={item.image}
                data-fancybox="gallery"
                data-caption={item.studentName || ''}
                className="block"
              >
                <img
                  src={item.image}
                  alt={item.studentName || 'Magazine image'}
                  className="
                    w-full
                    h-auto
                    aspect-[4/3]
                    object-cover
                    block
                  "
                />
              </a>
            )}

            {item.description ? (
              <div className="p-3">
                <h5 className="text-base lg:text-lg font-semibold text-center">
                  {item.description}
                </h5>
              </div>
            ) : item.studentName ? (
              <div className="p-3">
                <h5 className="text-base lg:text-lg font-semibold text-center">
                  {item.studentName}
                </h5>
              </div>
            ) : null}

          </div>
        ))}

      </div>
    </div>
  );
};

export default Image;