import '../App.css';

interface PaginationProps {
    onNext: () => void;
    onPrev: () => void;
}

const Pagination = ({ onNext, onPrev } : PaginationProps) => {
    return (
        <div className='pagination'>
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default Pagination;