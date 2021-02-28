export default function Pagination(props) {

    paginate(pageNumber){
        
    }

    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(props.totalPosts / props.postsPerPage); index++)
        pageNumbers.push(index)

    return (
        <div className="container">
            <div className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pageItem">
                        <a onClick={() => paginate(number)} className="pagelink>
                        {number}
                        </a>
                        </li>
                    ))}
            </div>
        </div>
    )
}