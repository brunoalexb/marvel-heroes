import React from 'react';

interface ComicsListProps {
  comics: any[];
}

function ComicsList({ comics }: ComicsListProps) {
  return (
    <div className="p-4 ">
      <h2 className="text-3xl font-bold mb-4 p-8">Últimos lançamentos</h2>
      <div className="grid grid-cols-5 gap-4">
        {comics.map((comic) => (
          <div key={comic.id} className=" p-2 rounded-lg bg-gray-100">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-40 h-60 overflow-hidden rounded"
            />
            <h3 className="mt-2 text-sm font-semibold">{comic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComicsList;
