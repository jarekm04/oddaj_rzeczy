import React, {useState} from 'react';
import PaginationData from "../../assets/PAGINATION_DATA.json";
import ReactPaginate from "react-paginate";
import decoration from "../../assets/Decoration.svg";

const Foundation = () => {
    const [data, setData] = useState(PaginationData.foundations);
    const [pageNumber, setPageNumber] = useState(0);

    const dataPerPage = 1;
    const pagesVisited = pageNumber * dataPerPage;

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map((item) => {
        return (
            <div className="choice__content" key={item.id}>
                <p className="choice__text">{item.choiceText}</p>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">{item.leftTitle1}</p>
                        <p className="left__desc">{item.leftDesc1}</p>
                    </div>
                    <div className="box-right">
                        <p className="right__desc">{item.rightDesc1}</p>
                    </div>
                </div>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">{item.leftTitle2}</p>
                        <p className="left__desc">{item.leftDesc2}</p>
                    </div>
                    <div className="box-right">
                        <p className="right_desc">{item.rightDesc2}</p>
                    </div>
                </div>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">{item.leftTitle3}</p>
                        <p className="left__desc">{item.leftDesc3}</p>
                    </div>
                    <div className="box-right">
                        <p className="right_desc">{item.rightDesc3}</p>
                    </div>
                </div>
            </div>
        );
    });


    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <section className="foundation" id="foundationID">
            <p className="foundation__title">Komu pomagamy?</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <div className="foundation__choice">
                <div className="choice" onClick={() => {setData(PaginationData.foundations); setPageNumber(0) }}>Fundacjom</div>
                <div className="choice" onClick={() => {setData(PaginationData.organisations); setPageNumber(0)}}>Organizacjom pozarządowym</div>
                <div className="choice" onClick={() => {setData(PaginationData.collections); setPageNumber(0)}}>Lokalnym zbiórkom</div>
            </div>
            { displayData }
            <ReactPaginate
                pageCount={data.length}
                onPageChange={changePage}
                containerClassName={"foundation__numbers"}
            />
        </section>
    );
};

export default Foundation;