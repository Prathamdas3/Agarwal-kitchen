export default function Pagination({
  page_count,
  start,
  end,
  length,
  setSearchParams,
  searchParams,
}) {
  const arr = []
  for (let i = 1; i <= page_count; i++) {
    arr.push(i)
  }

  return (
    <section aria-label="Page navigation example ">
      <ul className="pagination text-black">
        <li className="page-item">
          <button
            className="page-link text-black"
            href="#"
            aria-label="Previous"
            disabled={start > 0}
            onClick={() => {
              setSearchParams((prev) => {
                prev.set('page', `${Number(searchParams.get('page')) - 1}`)
              })
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {arr.map((e, index) => (
          <li className="page-item" key={index}>
            <a className="page-link text-black" href="#">
              {e}
            </a>
          </li>
        ))}

        <li className="page-item">
          <button
            className="page-link text-black"
            href="#"
            aria-label="Next"
            disabled={end < length}
            onClick={() => {
              setSearchParams((prev) => {
                prev.set('page', `${Number(searchParams.get('page')) + 1}`)
              })
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </section>
  )
}
